"use client";

import { SurveyList } from "@/static/survey";
import { pxToRem } from "@/utils/size";
import { Box } from "@chakra-ui/react";
import { AnswerOptions } from "./AnswerOptions";
import { Question } from "./Question";

const index = () => {
  return (
    <>
      <ProgressBar />
      {SurveyList.map((survey, index) => {
        const { question, option1, option2 } = survey;
        return (
          <>
            <Question>{question}</Question>
            <AnswerOptions option1={option1} option2={option2} />
          </>
        );
      })}
    </>
  );
};

export default index;

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
