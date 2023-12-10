import { pxToRem } from "@/utils/size";
import { TextProps, Text } from "@chakra-ui/react";
import React from "react";

export const Question: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <Text
      fontSize={pxToRem(22)}
      fontWeight={700}
      lineHeight={pxToRem(28)}
      whiteSpace={"pre-wrap"}
      {...props}
    >
      {children}
    </Text>
  );
};
