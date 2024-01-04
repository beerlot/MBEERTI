"use client";

import { pxToRem } from "@/utils/size";
import { Button, Container } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const handleClickStart = () => {
    router.push("/survey");
  };

  return (
    <Container>
      <Image
        src={`/images/intro/beerlot-start-image.jpg`}
        alt={"나는 어떤 맥주일까?"}
        width={350}
        height={700}
      />
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
