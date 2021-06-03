import { useContext } from "react";
import { ReportContext } from "../../../context/ReportContext";
import { useThemeSettings } from "../../../hooks";
import { TResultQuestion } from "../../../types";
import { sanitizeMarkdown } from "../../../utils";
import "./ReportQuestion.scss";

interface Props {
  question: TResultQuestion,
}

export function ReportQuestion(props: Props) {
  const { question } = props;
  const { theme } = useThemeSettings();
  const { reportFilter } = useContext(ReportContext);

  return <div style={{ display: 'flex', justifyContent: 'center' }}>
    {!reportFilter.excluded_columns.includes('question') ? <div className="Report-Question" style={{ width: question.image ? `75%` : `100%`, backgroundColor: theme.color.light }} dangerouslySetInnerHTML={{ __html: sanitizeMarkdown(Array.isArray(question.question) ? question.question.join(`<span style="width: 5px;height: 3px;display: inline-block;background-color: ${theme.color.dark};padding: 5px;border-radius: 2px;margin: 0px 5px;"></span>`) : question.question) }}></div> : null}
    {!reportFilter.excluded_columns.includes('image') ? question.image && <div className="Report-Question-image" style={{ width: `25%`, backgroundColor: theme.color.light, minWidth: 350 }}><img src={question.image} alt="Question" /></div> : null}
  </div>
}