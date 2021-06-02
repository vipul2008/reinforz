import { Theme, ThemeOptions } from '@material-ui/core/styles';
import { Language } from 'prism-react-renderer';

// Basic Components

export interface IErrorLog {
  quiz: string;
  target: string;
  message: string;
  level: 'ERROR' | 'WARN';
  _id: string;
  quiz_id: string;
}

export interface IPlaySettingsOptions {
  shuffle_options: boolean;
  shuffle_quizzes: boolean;
  shuffle_questions: boolean;
  instant_feedback: boolean;
  flatten_mix: boolean;
  partial_score: boolean;
  disable_timer: boolean;
}

export interface IPlaySettingsFilters {
  time_allocated: [number, number];
  excluded_difficulty: TQuestionDifficulty[];
  excluded_types: TQuestionType[];
}

export interface IQuizPartial {
  topic: string;
  subject: string;
  questions: TQuestionPartial[];
  _id?: string;
}

export interface IQuizFull {
  topic: string;
  subject: string;
  questions: TQuestionFull[];
  _id: string;
}

export interface IPlaySettings {
  options: IPlaySettingsOptions;
  filters: IPlaySettingsFilters;
}

export type TQuestionType = 'MCQ' | 'MS' | 'FIB' | 'Snippet';
export type TQuestionDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface IQuestionPartial {
  type?: TQuestionType;
  image?: string | null;
  weight?: number;
  time_allocated?: number;
  difficulty?: TQuestionDifficulty;
  hints?: string[];
  _id?: string;
}

export interface SelectionQuestionOptions {
  text: string;
  index: string;
}

export interface IMcqQuestionPartial extends IQuestionPartial {
  question: string;
  options: string[];
  type?: 'MCQ';
  answers: (string | ISelectionQuestionAnswerPartial)[];
}

export interface IMsQuestionPartial extends IQuestionPartial {
  question: string;
  options: string[];
  type?: 'MS';
  answers: (string | ISelectionQuestionAnswerPartial)[];
}

export interface ISnippetQuestionPartial extends IQuestionPartial {
  question: string;
  type?: 'Snippet';
  answers: (
    | IInputQuestionAnswerPartial[]
    | IInputQuestionAnswerPartial
    | string
  )[];
}

export interface IFibQuestionPartial extends IQuestionPartial {
  question: string[];
  type?: 'FIB';
  answers: (
    | IInputQuestionAnswerPartial[]
    | IInputQuestionAnswerPartial
    | string
  )[];
}

export type TQuestionAnswerModifiers = 'IC' | 'IS';

interface IRegex {
  regex: string;
  flags: string;
}

export interface IInputQuestionAnswerPartial {
  text: string;
  modifiers?: TQuestionAnswerModifiers[];
  regex?: IRegex;
  explanation?: string | null;
}

export interface ISelectionQuestionAnswerPartial {
  text: string;
  explanation?: string | null;
}

export interface IMcqQuestionFull extends Required<IQuestionPartial> {
  question: string;
  options: SelectionQuestionOptions[];
  type: 'MCQ';
  answers: ISelectionQuestionAnswerFull[];
  quiz: QuizIdentifiers;
}

export interface IMsQuestionFull extends Required<IQuestionPartial> {
  question: string;
  options: SelectionQuestionOptions[];
  type: 'MS';
  answers: ISelectionQuestionAnswerFull[];
  quiz: QuizIdentifiers;
}

export interface IInputQuestionAnswerFull {
  text: string;
  modifiers: TQuestionAnswerModifiers[];
  regex: IRegex | null;
  explanation: string | null;
}

export interface ISelectionQuestionAnswerFull {
  text: string;
  explanation: string | null;
}

export interface ISnippetQuestionFull extends Required<IQuestionPartial> {
  question: string;
  options: null;
  type: 'Snippet';
  answers: IInputQuestionAnswerFull[][];
  quiz: QuizIdentifiers;
}

export interface IFibQuestionFull extends Required<IQuestionPartial> {
  question: string[];
  options: null;
  type: 'FIB';
  answers: IInputQuestionAnswerFull[][];
  quiz: QuizIdentifiers;
}

export type TInputQuestionPartial =
  | ISnippetQuestionPartial
  | IFibQuestionPartial;
export type TSelectionQuestionPartial =
  | IMcqQuestionPartial
  | IMsQuestionPartial;

export type TQuestionPartial =
  | TInputQuestionPartial
  | TSelectionQuestionPartial;

export type TInputQuestionFull = ISnippetQuestionFull | IFibQuestionFull;
export type TSelectionQuestionFull = IMcqQuestionFull | IMsQuestionFull;

export type TQuestionFull = TInputQuestionFull | TSelectionQuestionFull;

export interface QuizIdentifiers {
  topic: string;
  _id: string;
  subject: string;
}

export type IResultSelectionQuestion = Omit<
  TSelectionQuestionFull,
  'answers'
> & {
  answers: ISelectionQuestionAnswerFull & {
    isCorrect: boolean;
    userSelected: boolean;
  };
};

export type IResultInputQuestion = Omit<TInputQuestionFull, 'answers'> & {
  answers: IInputQuestionAnswerFull & {
    userSelected: string;
  };
};

export type TResultQuestion =
  | IResultSelectionQuestion
  | IInputQuestionAnswerFull;

export interface IResult {
  user_answers: string[];
  verdict: boolean;
  score: number;
  time_taken: number;
  hints_used: number;
  question: TResultQuestion;
}

export interface IReportFilter {
  time_taken: [number, number];
  verdict: boolean | 'mixed';
  hints_used: number | 'any';
  excluded_types: TQuestionType[];
  excluded_difficulty: TQuestionDifficulty[];
  excluded_quizzes: string[];
  excluded_columns: string[];
}

type color = {
  dark: string;
  base: string;
  light: string;
  opposite_dark: string;
  opposite_base: string;
  opposite_light: string;
};

export interface ExtendedThemeOptions extends ThemeOptions {
  color: color;
}

export interface ExtendedTheme extends Theme {
  color: color;
}

export type AllowedTheme = 'dark' | 'light';
export interface ISettings {
  theme: AllowedTheme;
  animation: boolean;
  hovertips: boolean;
}

export type TNumberAggregation = 'MIN' | 'MAX' | 'AVG';
export type TBooleanAggregation = 'TRUE' | 'FALSE';
export interface IReportAggregator {
  time_allocated: TNumberAggregation;
  time_taken: TNumberAggregation;
  weight: TNumberAggregation;
  score: TNumberAggregation;
  verdict: TBooleanAggregation;
  hints_used: TNumberAggregation;
}

export interface HighlighterProps {
  code: string;
  language: Language;
}
