"use client";

import { calculateMBTI } from "@/service.ts/mbti";
import { SURVEY_LIST_LENGTH, SurveyList } from "@/static/survey";
import { typeType } from "@/typedef/survey";
import { pxToRem } from "@/utils/size";
import { Box, Progress, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ContainerBackground, LayoutContainer } from "../shared/layout";
import { AnswerOptions } from "./AnswerOptions";
import { Question } from "./Question";

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

  const value = ((currentStep + 1) / SURVEY_LIST_LENGTH) * 100;

  return (
    <ContainerBackground>
      <LayoutContainer p={5}>
        <Progress
          value={value}
          size="xs"
          h={1}
          colorScheme="blackAlpha"
          borderRadius={100}
          mt={pxToRem(52)}
        />
        <Text
          textAlign={"end"}
          textColor={"#333"}
          mt={2}
          fontSize={pxToRem(14)}
          lineHeight={pxToRem(20)}
          fontWeight={700}
        >
          {currentStep + 1}
          <Text as={"span"} textColor={"#999"}>
            {" "}
            / {SURVEY_LIST_LENGTH}
          </Text>
        </Text>
        {SurveyList.map((survey, index) => {
          const { question, option1, option2 } = survey;
          if (index !== currentStep) return null;
          return (
            <Box key={question} mt={pxToRem(108)}>
              <Question>{question}</Question>
              <AnswerOptions
                option1={option1}
                option2={option2}
                onClickAnswer={handleClickAnswer}
              />
            </Box>
          );
        })}
      </LayoutContainer>
    </ContainerBackground>
  );
}
