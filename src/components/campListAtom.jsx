"use client";

import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import LeftIcon from "../assets/back_button.png";
import { useRouter } from "next/navigation";

export default function ListAtom({ src, title, id, location, headcount, onClick }) {
  const navigate = useRouter();

  return <Box onClick={onClick}><Flex padding={'16px'} justifyContent={'space-between'} alignItems={'center'} onClick={e => id && navigate.push(`/camp/${id}`)}>
    <Flex alignItems={'center'}>
      {src && <Image width={30} height={30} style={{ borderRadius: '300px', width: '80px', marginRight: '10px' }} src={src} />}
      <Box>
        <Text color={'gray'} fontSize={'14px'}>{location}</Text>
        <Text fontWeight={'bold'} marginBottom={'5px'}>{title}</Text>
        {headcount && <Text color={'gray'}>모집 인원: {headcount}</Text>}
      </Box>
    </Flex>
    <Image alt="" style={{ transform: 'rotate(180deg)', width: '8px', height: '15px' }} src={LeftIcon} />
  </Flex></Box>
}