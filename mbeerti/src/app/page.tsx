"use client";

import { pxToRem } from "@/utils/size";
import { Button, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ContainerBackground, LayoutContainer } from "./shared/layout";
import { trackSurveyStart } from "@/utils/analytics";

export default function Home() {
  const router = useRouter();
  const handleClickStart = () => {
    trackSurveyStart();
    router.push("/survey");
  };

  return (
    <ContainerBackground>
      <LayoutContainer>
        <VStack
          position="relative"
          cursor={"pointer"}
          onClick={handleClickStart}
        >
          <Image
            src="/images/intro/beerlot-start-image.jpg"
            alt="나는 어떤 맥주일까?"
            layout="responsive"
            width={100}
            height={100}
          />
          <Button
            position="absolute"
            bottom={14}
            left={5}
            right={5}
            bg={"#FEA801"}
            py={3}
            borderRadius={pxToRem(99)}
            fontSize={pxToRem(16)}
            lineHeight={pxToRem(24)}
            fontWeight={700}
            color={"white"}
            border={"none"}
            onClick={handleClickStart}
            _hover={{}}
          >
            맥주 테스트 시작하기!
          </Button>
        </VStack>
      </LayoutContainer>
    </ContainerBackground>
  );
}
