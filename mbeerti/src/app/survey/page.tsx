"use client";

import { useRouter } from "next/navigation";
import { SurveyList } from "@/static/survey";
import { pxToRem } from "@/utils/size";
import { Box } from "@chakra-ui/react";
import { AnswerOptions } from "./AnswerOptions";
import { Question } from "./Question";
import { useState } from "react";
import { typeType } from "@/typedef/survey";
import { calculateMBTI } from "@/service.ts/mbti";

export default function Page() {
  const InitialAnswerCounter = {
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    F: 0,
    T: 0,
    J: 0,
    P: 0,
  };
  const [userAnswerCounter, setUserAnswerCounter] =
    useState(InitialAnswerCounter);

  const router = useRouter();
  const currentStep =
    userAnswerCounter.N +
    userAnswerCounter.S +
    userAnswerCounter.E +
    userAnswerCounter.I +
    userAnswerCounter.F +
    userAnswerCounter.T +
    userAnswerCounter.J +
    userAnswerCounter.P;

  const handleClickAnswer = (answer: typeType) => {
    if (currentStep === SurveyList.length - 1) {
      const finalAnswer = calculateMBTI(userAnswerCounter);
      router.push("/result?mbti=" + finalAnswer);
      return;
    }

    const newAnswer = {
      ...userAnswerCounter,
      [answer]: userAnswerCounter[answer] + 1,
    };
    setUserAnswerCounter(newAnswer);
  };

  return (
    <>
      <ProgressBar />
      {SurveyList.map((survey, index) => {
        const { question, option1, option2 } = survey;
        if (index !== currentStep) return null;
        return (
          <>
            <Question>{question}</Question>
            <AnswerOptions
              option1={option1}
              option2={option2}
              onClickAnswer={handleClickAnswer}
            />
          </>
        );
      })}
    </>
  );
}

const ProgressBar = () => {
  return (
    <Box
      w="100%"
      h={pxToRem(10)}
      bg="gray.200"
      borderRadius={pxToRem(10)}
      overflow="hidden"
    >
      <Box
        w="50%"
        h="100%"
        bg="blue.400"
        borderRadius={pxToRem(10)}
        transition="width 0.5s ease-in-out"
      ></Box>
    </Box>
  );
};
