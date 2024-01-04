"use client";

import { SurveyAnswerOptionType, typeType } from "@/typedef/survey";
import { pxToRem } from "@/utils/size";
import { Button, ButtonProps, VStack } from "@chakra-ui/react";
import React from "react";

interface AnswerOptionsProps {
  option1: SurveyAnswerOptionType;
  option2: SurveyAnswerOptionType;
  onClickAnswer: (answer: typeType) => void;
}

export const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  option1,
  option2,
  onClickAnswer,
}) => {
  return (
    <VStack mt={pxToRem(164)}>
      <AnswerButton onClick={() => onClickAnswer(option1.type)}>
        {option1.text}
      </AnswerButton>
      <AnswerButton mt={2} onClick={() => onClickAnswer(option2.type)}>
        {option2.text}
      </AnswerButton>
    </VStack>
  );
};

export const AnswerButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      border={"1px solid"}
      borderColor={"#FFEC9F"}
      bg={"#FFFCF1"}
      fontSize={pxToRem(16)}
      fontWeight={700}
      lineHeight={pxToRem(24)}
      w={"full"}
      h={pxToRem(80)}
      py={4}
      px={6}
      whiteSpace={"pre-wrap"}
      {...props}
    >
      {children}
    </Button>
  );
};
