"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
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
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});
