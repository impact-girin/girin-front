// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

export function Providers({ children }) {
  return (
    <>
      <RecoilRoot>
        <ChakraProvider>{children}</ChakraProvider>
      </RecoilRoot>
    </>
  );
}
