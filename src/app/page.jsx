'use client'

import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(e => {
    setTimeout(() => {
      // window.location.href = '/'
    }, 5000);
  }, [])
  return (
    <Flex height={'70vh'} alignItems={'center'} justifyContent={'center'}>
      <Text color={'#2DD790'} fontSize={'40px'} textAlign={'center'} fontWeight={'bold'}>
        우리 같이<br />
        등산해요
      </Text>
    </Flex>
  );
}
