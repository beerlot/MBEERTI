"use client";

import { getMBTIInfo } from "@/service.ts/mbti";
import { FALLBACK_MBTI_INFO } from "@/static/result";
import { BEERLOT_PROD_URL } from "@/static/url";
import { pxToRem } from "@/utils/size";
import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

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
    <div>
      <Box>
        <Image
          src={`/images/result/${mbtiInfo?.imageSrc}`}
          alt={mbtiInfo?.imageSrc}
          width={350}
          height={700}
        />
      </Box>
      <Button
        bg={"#FEA801"}
        py={3}
        as={Link}
        href={BEERLOT_PROD_URL}
        overflow={"hidden"}
        borderRadius={pxToRem(99)}
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(24)}
        fontWeight={700}
        color={"white"}
        border={"none"}
        w={"full"}
      >
        비어랏에서 맥주 구경하기
      </Button>
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
        onClick={handleShare}
      >
        ~~ 작업 예정 ~~ 친구에게 공유하기
      </Button>
      <Button
        bg={"#FEA801"}
        py={3}
        as={Link}
        href={"/"}
        overflow={"hidden"}
        borderRadius={pxToRem(99)}
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(24)}
        fontWeight={700}
        color={"white"}
        border={"none"}
        w={"full"}
      >
        Reset
      </Button>
    </div>
  );
};

export default Page;
