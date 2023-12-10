"use client";

import { SurveyAnswerOptionType } from "@/typedef/survey";
import { pxToRem } from "@/utils/size";
import { Button, ButtonProps, VStack } from "@chakra-ui/react";
import React from "react";

interface AnswerOptionsProps {
  option1: SurveyAnswerOptionType;
  option2: SurveyAnswerOptionType;
}

export const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  option1,
  option2,
}) => {
  return (
    <VStack>
      <AnswerButton>{option1.text}</AnswerButton>
      <AnswerButton mt={2}>{option2.text}</AnswerButton>
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
      {...props}
    >
      {children}
    </Button>
  );
};
