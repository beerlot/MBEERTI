"use client";

import { getMBTIInfo } from "@/service.ts/mbti";
import { FALLBACK_MBTI_INFO } from "@/static/result";
import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Loading } from "../shared/loading";
import { GoToBeerlotButton } from "./GoToBeerlotButton";
import { ResetButton } from "./ResetButton";
import { ShareButton } from "./ShareButton";

interface ResultSectionProps {
  isLoading: boolean;
  onImageLoad?: () => void;
}

export const ResultSection: React.FC<ResultSectionProps> = ({
  isLoading,
  onImageLoad,
}) => {
  const searchParams = useSearchParams();
  const result = searchParams.get("mbti");
  const router = useRouter();
  const invalidCase = !result || !getMBTIInfo(result);
  const handleShare = () => {};

  if (invalidCase) {
    router.push("/");
    return null;
  }

  if (isLoading) return <Loading />;

  const mbtiInfo = getMBTIInfo(result) || FALLBACK_MBTI_INFO;

  return (
    <>
      <Image
        src={`/images/result/${mbtiInfo?.imageSrc}`}
        alt={mbtiInfo?.alt}
        layout="responsive"
        width={100}
        height={100}
        onLoad={onImageLoad}
      />
      <Box px={5} pt={4} pb={8}>
        <GoToBeerlotButton />
        <HStack mt={3}>
          <ShareButton onClick={handleShare} />
          <ResetButton />
        </HStack>
      </Box>
    </>
  );
};
