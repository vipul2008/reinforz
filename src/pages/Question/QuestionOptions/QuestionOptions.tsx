import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup } from "@material-ui/core";
import { Markdown } from "../../../components";
import { useThemeSettings } from '../../../hooks';
import sounds from "../../../sounds";
import { TQuestionFull } from '../../../types';
import "./QuestionOptions.scss";

interface Props {
  setUserAnswers: (val: string[]) => any,
  userAnswers: string[],
  question: TQuestionFull,
}

export default function QuestionOptions(props: Props) {
  const { theme, settings } = useThemeSettings();
  const { setUserAnswers, userAnswers, question: { _id } } = props;

  const generateOptions = () => {
    switch (props.question.type) {
      case "MCQ": {
        return <RadioGroup className="QuestionOptions-container QuestionOptions-container--MCQ" style={{ backgroundColor: theme.color.base }} value={userAnswers.length === 0 ? [''] : userAnswers[0]} onChange={e => {
          settings.sound && sounds.option_click.play();
          setUserAnswers([e.target.value])
        }}>
          {props.question.options.map((option, i) => {
            return <div key={`${_id}option${i}`} className="QuestionOptions-container-item" style={{ backgroundColor: theme.color.light }}>
              <FormControlLabel
                control={<Radio color="primary" />}
                value={`${i}`}
                label={<Markdown content={option.text} />}
                labelPlacement="end"
              />
            </div>
          })}
        </RadioGroup>
      }
      case "MS": {
        return <FormGroup className="QuestionOptions-container QuestionOptions-container--MS" style={{ backgroundColor: theme.color.base }} onChange={(e: any) => {
          if (e.target.checked) {
            settings.sound && sounds.pop_off.play();
            setUserAnswers(userAnswers.concat(e.target.value))
          }
          else {
            settings.sound && sounds.pop_on.play();
            setUserAnswers(userAnswers.filter(user_answer => user_answer !== e.target.value));
          }
        }}>
          {props.question.options.map((option, i) => {
            return <div key={`${_id}option${i}`} className={`QuestionOptions-container-item`} style={{ backgroundColor: theme.color.light }}>
              <FormControlLabel
                control={<Checkbox checked={userAnswers.includes(`${i}`)} value={`${i}`} color="primary" />}
                label={<Markdown content={option.text} />}
              /></div>
          })}
        </FormGroup>
      }
      default: {
        return null
      }
    }
  }

  return generateOptions()
}

