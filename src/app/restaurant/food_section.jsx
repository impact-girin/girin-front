"use client";

import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FoodSection({ src, name, eng, price, id }) {
  const navigate = useRouter();

  return <Flex padding={'20px'} alignItems={'center'}>
    <Image width={500} height={500} style={{ width: '64px', height: '64px', borderRadius: '16px' }} alt="" src={src} />
    <Box marginLeft={'20px'}>
      <Text>{name}</Text>
      <Text fontSize={'14px'} color={'gray'}>{eng}</Text>
      <Text marginTop={'5px'} fontWeight={'bold'}>{price}원</Text>
    </Box>
  </Flex>
}