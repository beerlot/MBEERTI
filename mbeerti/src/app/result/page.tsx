"use client";

import { getMBTIInfo } from "@/service.ts/mbti";
import { FALLBACK_MBTI_INFO } from "@/static/result";
import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ContainerBackground, LayoutContainer } from "../shared/layout";
import { GoToBeerlotButton } from "./GoToBeerlotButton";
import { ResetButton } from "./ResetButton";
import { ShareButton } from "./ShareButton";

const Page = () => {
  const searchParams = useSearchParams();
  const result = searchParams.get("mbti");
  const handleShare = () => {};
  const router = useRouter();
  const invalidCase = !result || !getMBTIInfo(result);

  if (invalidCase) {
    router.push("/");
    return null;
  }

  const mbtiInfo = getMBTIInfo(result) || FALLBACK_MBTI_INFO;

  return (
    <ContainerBackground>
      <LayoutContainer>
        <Box>
          <Image
            src={`/images/result/${mbtiInfo?.imageSrc}`}
            alt={mbtiInfo?.alt}
            layout="responsive"
            width={100}
            height={100}
          />
        </Box>
        <Box px={5} pt={4} pb={8}>
          <GoToBeerlotButton />
          <HStack mt={3}>
            <ShareButton onClick={handleShare} />
            <ResetButton />
          </HStack>
        </Box>
      </LayoutContainer>
    </ContainerBackground>
  );
};

export default Page;
