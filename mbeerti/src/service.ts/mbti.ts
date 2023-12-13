import { MBTIResultInfo, mbtiImages } from "@/typedef/result";

export const calculateMBTI = (answers: { [key: string]: number }): string => {
  let mbti = "";
  if (answers["I"] > answers["E"]) {
    mbti += "I";
  } else {
    mbti += "E";
  }
  if (answers["S"] > answers["N"]) {
    mbti += "S";
  } else {
    mbti += "N";
  }

  if (answers["T"] > answers["F"]) {
    mbti += "T";
  } else {
    mbti += "F";
  }

  if (answers["P"] > answers["J"]) {
    mbti += "P";
  } else {
    mbti += "J";
  }

  return mbti;
};
export const getMBTIInfo = (mbti: string): MBTIResultInfo => {
  return mbtiImages[mbti.toLowerCase()];
};
