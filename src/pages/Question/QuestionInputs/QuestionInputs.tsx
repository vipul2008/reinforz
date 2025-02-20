import { TextField } from "@material-ui/core";
import React from 'react';
import { useThemeSettings } from '../../../hooks';
import sounds from "../../../sounds";
import { TInputQuestionFull } from '../../../types';
import "./QuestionInputs.scss";

interface Props {
  setUserAnswers: React.Dispatch<React.SetStateAction<string[]>>
  userAnswers: string[],
  question: TInputQuestionFull,
}

export default function QuestionInputs(props: Props) {
  const { theme, settings } = useThemeSettings();
  const { setUserAnswers, userAnswers, question: { _id, type } } = props;

  return (
    <div className={`QuestionInputs QuestionInputs-${type}`} style={{ backgroundColor: theme.color.base }}>
      {props.question.answers.map((_, i) =>
        <div key={`${_id}.${i}`} className={`QuestionInputs-item`} style={{ backgroundColor: theme.color.base, color: theme.palette.text.primary }}>
          <TextField autoFocus={i === 0} fullWidth inputProps={{
            placeholder: `Answer ${i + 1}`
          }} value={userAnswers[i] ?? ''} onChange={e => {
            const min = Math.ceil(1);
            const max = Math.floor(3);
            const generatedRandomInt = Math.floor(Math.random() * (max - min + 1)) + min;
            settings.sound && sounds[`keyboard_${generatedRandomInt}` as 'keyboard_1'].play()
            userAnswers[i] = e.target.value;
            setUserAnswers([...userAnswers])
          }} /></div>
      )}
    </div>
  );
}

