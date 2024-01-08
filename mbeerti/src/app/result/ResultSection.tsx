"use client";

import { getMBTIInfo } from "@/service.ts/mbti";
import { FALLBACK_MBTI_INFO } from "@/static/result";
import { Box, HStack, useToast } from "@chakra-ui/react";
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
  const toast = useToast();

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        position: "top",
        title: "링크가 클립보드에 복사되었습니다.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch {
      toast({
        position: "top",
        title:
          "링크를 클립보드에 복사할 수 없습니다. 잠시 후 다시 시도해주세요.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
