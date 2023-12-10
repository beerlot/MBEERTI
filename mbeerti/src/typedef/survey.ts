export interface SurveyAnswerOptionType {
  text: string;
  type: "S" | "N" | "P" | "J" | "I" | "E" | "T" | "F";
}

export interface SurveyListType {
  question: string;
  option1: SurveyAnswerOptionType;
  option2: SurveyAnswerOptionType;
}
