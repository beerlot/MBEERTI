"use client";

import { ChakraProvider, extendTheme, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

// HOC to force light mode
function ForceLightMode({ children }: { children: React.ReactNode }) {
  const { setColorMode } = useColorMode();
  
  useEffect(() => {
    setColorMode("light");
  }, [setColorMode]);
  
  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ForceLightMode>{children}</ForceLightMode>
    </ChakraProvider>
  );
}

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
      },
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
