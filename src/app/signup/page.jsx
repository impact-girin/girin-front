"use client";

import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import LeftIcon from "../assets/back_button.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const navigate = useRouter();
  const [name, setName] = useState('')

  return (
    <Box height={"100vh"}>
      <Flex flexDir="column" height={"100%"} padding={"19px"} justifyContent={"space-around"}>
        <Box onClick={e => navigate.back()}>
          <Image width={8} height={8} style={{ marginBottom: "36px", marginBottom: "19px" }} src={LeftIcon} alt="" />
        </Box>
        <Text fontSize={"26px"} lineHeight={"26px"} fontWeight={"bold"} marginBottom={"32px"}>
          이름을 입력해주세요
        </Text>
        <Box>
          <Text fontSize={"13px"}>이름</Text>
          <Input
            padding={"18px 15px"}
            lineHeight={"17px"}
            fontSize={"16px"}
            style={{ border: "1px solid #E0E0E1", width: "100%" }}
            placeholder="이름을 입력해주세요"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </Box>
        <Button
          marginTop={"auto"}
          height={"50px"}
          background={"#2DD790"}
          color={"white"}
          width={"100%"}
          onClick={() => navigate.push(`/signup/chose?kind=age&name=${name}`)}
        >
          다음으로
        </Button>
      </Flex>
    </Box>
  );
}
