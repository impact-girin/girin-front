"use client";

import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import LeftIcon from "../../../assets/back_button.png";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const navigate = useRouter();
  const [intro, setIntro] = useState('')

  const searchParams = useSearchParams();
  const name = searchParams.get('name')

  return (
    <Box height={"100vh"}>
      <Flex flexDir="column" height={"100%"} padding={"19px"} justifyContent={"space-around"}>
        <Box onClick={e => navigate.back()}>
          <Image width={8} height={8} style={{ marginBottom: "36px", marginBottom: "19px" }} src={LeftIcon} alt="" />
        </Box>
        <Text fontSize={"24px"} lineHeight={"26px"} fontWeight={"bold"} marginBottom={"32px"}>
          산악회를 만들기 위해<br /> 필요한 정보를 입력해주세요!
        </Text>
        <Box marginBottom={'24px'}>
          <Text fontSize={"13px"}>방 소개</Text>
          <Input
            padding={"18px 15px"}
            lineHeight={"17px"}
            fontSize={"16px"}
            style={{ border: "1px solid #E0E0E1", width: "100%" }}
            placeholder="북한산 가실분!"
            value={intro}
            onChange={e => setIntro(e.target.value)}
          />
        </Box>
        <Button
          marginTop={"auto"}
          height={"50px"}
          background={"#2DD790"}
          color={"white"}
          width={"100%"}
          onClick={() => navigate.push(`/camp/creating/selectheadcount?name=${name}&intro=${intro}`)}
        >
          다음으로
        </Button>
      </Flex>
    </Box>
  );
}
