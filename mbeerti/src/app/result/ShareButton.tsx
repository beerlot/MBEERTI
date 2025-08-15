"use client";

import { pxToRem } from "@/utils/size";
import { Button, ButtonProps } from "@chakra-ui/react";
import { trackShareClick } from "@/utils/analytics";

export const ShareButton: React.FC<ButtonProps> = ({ onClick, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    trackShareClick('share_button');
    if (onClick) {
      onClick(e);
    }
  };

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
      onClick={handleClick}
      {...props}
    >
      친구에게 공유하기
    </Button>
  );
};
