"use client";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function VisitAtom({ src, user, mt_name }) {
  return <Flex boxShadow={'0 3px 0px 1px lightgray'}
    marginBottom={'10px'}
    borderRadius={'15px'} padding={'10px'}
    direction={'column'} alignItems={'center'}
    justifyContent={'space-evenly'} style={{ border: '1px solid gray' }}
    height={'165px'} w={'165px'}>
    {src && <Image alt="" width={50} height={50} style={{ borderRadius: '300px' }} src={src} />}
    <Text fontSize={'15px'} textAlign={'center'} fontWeight={'bold'}>
      <span style={{ color: '#2DD790' }}>
        {user}
      </span>님이<br /> {mt_name}에 다녀갔어요.</Text>
  </Flex>
}