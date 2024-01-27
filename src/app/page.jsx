'use client'
import MT from './assets/area_img.png'
import { Flex, Text } from "@chakra-ui/react";
import Image from 'next/image';
import { useEffect } from "react";

export default function Home() {
  useEffect(e => {
    setTimeout(() => {
      // window.location.href = '/'
    }, 5000);
  }, [])
  return (
    <Flex height={'70vh'} alignItems={'center'} justifyContent={'center'}>
      <Text color={'#2DD790'} fontSize={'40px'} textAlign={'center'} fontWeight={'900'} wordBreak={'keep-all'}>
        우리 같이<br />
        등<Image style={{ position: 'absolute', marginTop: '-70px', marginLeft: '36px' }} width={60} height={60} src={MT} alt="" />&nbsp;
        &nbsp;&nbsp;&nbsp;해요
      </Text>
    </Flex>
  );
}
