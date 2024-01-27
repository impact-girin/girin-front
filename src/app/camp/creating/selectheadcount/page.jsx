"use client";

import { Box, Button, Flex, Input, Link, Text, border } from "@chakra-ui/react";
import LeftIcon from "../../../assets/back_button.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeadCountAtom from "@/components/headCountAtom";
import { useState } from "react";

export default function Home() {
  const navigate = useRouter();
  const [select, setSelect] = useState(1);

  return (
    <Box height={"100vh"}>
      <Flex flexDir="column" height={"100%"} padding={"19px"} justifyContent={"space-around"}>
        <Box onClick={e => navigate.back()}>
          <Image width={8} height={8} style={{ marginBottom: "36px", marginBottom: "19px" }} src={LeftIcon} alt="" />
        </Box>
        <Text fontSize={"24px"} lineHeight={"26px"} fontWeight={"bold"} marginBottom={"32px"}>
          산악회를 만들기 위해<br /> 필요한 정보를 입력해주세요!
        </Text>
        <Box >
          <Text marginBottom={'20px'} fontWeight={'bold'} fontSize={"15px"}>같이 갈 인원 수를 골라주세요!</Text>
          <Flex justifyContent={'space-between'} padding={'15px 0'} width={'100%'} style={{ borderTop: '1px solid gray', borderBottom: '1px solid gray' }}>
            <HeadCountAtom counts={1} selected={select} setSelected={setSelect} />
            <HeadCountAtom counts={2} selected={select} setSelected={setSelect} />
            <HeadCountAtom counts={3} selected={select} setSelected={setSelect} />
            <HeadCountAtom counts={4} selected={select} setSelected={setSelect} />
            <HeadCountAtom counts={5} selected={select} setSelected={setSelect} />
            <HeadCountAtom counts={6} selected={select} setSelected={setSelect} />
            <HeadCountAtom counts={7} selected={select} setSelected={setSelect} />
          </Flex>
        </Box>
        <Flex alignItems={'center'} justifyContent={'space-between'} padding={'15px 0'} width={'100%'} style={{ borderBottom: '1px solid gray' }}>
          <Box>
            <Text marginBottom={'10px'} fontWeight={'bold'} fontSize={'20px'}>산악회 프로필</Text>
            <Text fontSize={'14px'}>사람들이 <span style={{ color: '#2DD790' }}>당신</span>님의 산악회에 흥미를<br /> 느낄 수 있도록 사진을 등록해주세요</Text>
          </Box>
          <Image style={{ borderRadius: '300px', border: '3px solid #2DD790' }} width={100} height={100} alt="" src={'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'} />
        </Flex>
        <Button
          marginTop={"auto"}
          height={"50px"}
          background={"#2DD790"}
          color={"white"}
          width={"100%"}
          onClick={() => navigate.push("/camp/creating/selectRegion")}
        >
          다음으로
        </Button>
      </Flex >
    </Box >
  );
}
