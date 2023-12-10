"use client";

import { pxToRem } from "@/utils/size";
import { Button, Container } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClickStart = () => {
    router.push("/survey");
  };

  return (
    <Container>
      <Button
        bg={"#FEA801"}
        py={3}
        overflow={"hidden"}
        borderRadius={pxToRem(99)}
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(24)}
        fontWeight={700}
        color={"white"}
        border={"none"}
        w={"full"}
        onClick={handleClickStart}
      >
        맥주 테스트 시작하기!
      </Button>
    </Container>
  );
}
