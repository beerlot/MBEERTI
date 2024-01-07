"use client";

import { BEERLOT_PROD_URL } from "@/static/url";
import { pxToRem } from "@/utils/size";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { CaretRightIcon } from "../../../public/icons/icons";

export const GoToBeerlotButton = () => {
  return (
    <Button
      bg={"#FEA801"}
      py={3}
      as={Link}
      href={BEERLOT_PROD_URL}
      borderRadius={pxToRem(99)}
      fontSize={pxToRem(16)}
      lineHeight={pxToRem(24)}
      fontWeight={700}
      color={"white"}
      border={"none"}
      w={"full"}
      _hover={{}}
    >
      비어랏에서 맥주 구경하기
      <CaretRightIcon w={5} h={9} />
    </Button>
  );
};
