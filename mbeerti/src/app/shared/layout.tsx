import { pxToRem } from "@/utils/size";
import { Box, BoxProps, Center, CenterProps } from "@chakra-ui/react";

// will be moved to layout in next.js
interface ContainerBackgroundProps extends CenterProps {}

export const ContainerBackground: React.FC<ContainerBackgroundProps> = ({
  children,
  ...props
}) => {
  return (
    <Center h="100vh" bg="gray" {...props}>
      {children}
    </Center>
  );
};

// will be moved to layout in next.js

interface LayoutContainerProps extends BoxProps {}

export const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Box maxW={pxToRem(450)} w="full" h="100vh" bg="white" {...props}>
      {children}
    </Box>
  );
};
