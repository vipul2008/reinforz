import { AiFillCheckSquare } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useThemeSettings } from "../../../hooks";
import { TResultQuestion } from "../../../types";
import { sanitizeMarkdown } from "../../../utils";
import "./ReportAnswers.scss";

interface Props {
  question: TResultQuestion
  userAnswers: string[]
}

export function ReportAnswers(props: Props) {
  const { question } = props;
  const { theme } = useThemeSettings();

  const render = () => {
    if (question.type === "MS" || question.type === "MCQ") {
      return question.options.map((option, index) => {
        return <div className="Report-Answers-container" style={{ backgroundColor: theme.color.dark }} key={option.text}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ backgroundColor: theme.color.light, padding: 10 }} className="Report-Answers-container-item Report-Answers-container-item--text" dangerouslySetInnerHTML={{ __html: sanitizeMarkdown(option.text ?? '') }}></div>
            <div style={{ backgroundColor: theme.color.light }} className="Report-Answers-container-item">
              {option.isCorrect ? <AiFillCheckSquare fill="#24ce2c" style={{ padding: 5 }} size={15} /> : <MdCancel fill="#ff3d2f" style={{ padding: 5 }} size={15} />}
              {option.userSelected ? <FaUser fill="#fff" style={{ padding: 5 }} size={15} /> : null}
            </div>
          </div>
          {question.answers[index]?.explanation ? <div style={{ backgroundColor: theme.color.light, padding: 10 }} className="Report-Answers-container-item Report-Answers-container-item--explanation" dangerouslySetInnerHTML={{ __html: sanitizeMarkdown(question.answers[index].explanation ?? '') }}></div> : null}
        </div>
      })
    }
    else {
      return null;
    }
  }
  return <div className="Report-Answers" style={{ backgroundColor: theme.color.base }}>
    {
      render()
    }
  </div>

}