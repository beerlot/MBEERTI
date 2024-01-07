"use client";

import { pxToRem } from "@/utils/size";
import { Button, ButtonProps } from "@chakra-ui/react";

export const ShareButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button
      border={"1px solid"}
      borderColor={"#FEA801"}
      color={"#FEA801"}
      bg={"transparent"}
      py={3}
      borderRadius={pxToRem(99)}
      fontSize={pxToRem(16)}
      lineHeight={pxToRem(24)}
      fontWeight={700}
      w={"full"}
      _hover={{}}
      {...props}
    >
      친구에게 공유하기
    </Button>
  );
};
