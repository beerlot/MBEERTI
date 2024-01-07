"use client";

import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { ResetIcon } from "../../../public/icons/icons";

export const ResetButton = () => {
  return (
    <IconButton
      borderRadius={"full"}
      border={"1px solid"}
      borderColor={"#FEA801"}
      color={"#FEA801"}
      bg={"transparent"}
      icon={<ResetIcon />}
      fontSize={24}
      w={10}
      h={10}
      as={Link}
      href={"/"}
    />
  );
};
