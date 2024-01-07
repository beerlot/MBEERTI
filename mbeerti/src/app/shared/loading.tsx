import { pxToRem } from "@/utils/size";
import { Center, Flex, Image, ImageProps, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const imageNames = [
  { src: "/images/loading/can_blue.100.png", alt: "Alphabet B" },
  { src: "/images/loading/can_yellow.300.png", alt: "Alphabet E" },
  { src: "/images/loading/can_yellow.200.png", alt: "Alphabet E" },
  { src: "/images/loading/can_yellow.100.png", alt: "Alphabet R" },
  {
    src: "/images/loading/can_orange.300.png",
    alt: "Alphabet L",
    style: { marginLeft: pxToRem(20) },
  },
  { src: "/images/loading/can_orange.200.png", alt: "Alphabet O" },
  { src: "/images/loading/can_orange.100.png", alt: "Alphabet T" },
];

export const Loading = () => {
  const totalAnimationTime = imageNames.length * 0.2 + 0.5;

  return (
    <Center w={"full"} h={"full"} flexDir={"column"}>
      <Flex gap={pxToRem(10)}>
        {imageNames.map((image, index) => (
          <BeerLoadingImage
            key={index}
            src={image.src}
            alt={image.alt}
            delay={index * 0.2}
          />
        ))}
      </Flex>
      <Text
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(24)}
        color={"#333333"}
        mt={4}
      >
        당신에게 딱 맞는 맥주 제조 중...
      </Text>
    </Center>
  );
};

interface BeerLoadingImageProps extends ImageProps {
  src: string;
  delay?: number;
  alt: string;
}
const BeerLoadingImage: React.FC<BeerLoadingImageProps> = ({
  src,
  alt,
  delay = 0,
  style,
  ...props
}) => {
  const variants = {
    animate: { y: [0, -20, 0] },
    initial: { y: 0 },
  };

  return (
    <motion.div
      animate={"animate"}
      initial={"initial"}
      variants={variants}
      transition={{ duration: 0.5, yoyo: Infinity, delay, ease: "easeInOut" }}
      style={style}
    >
      <Image src={src} alt={alt} w={pxToRem(28)} h={pxToRem(53)} {...props} />
    </motion.div>
  );
};
