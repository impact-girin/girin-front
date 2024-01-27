"use client";

import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import LeftIcon from "../../assets/back_button.png";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { instance } from "@/apis/axios";

export default function Home() {
  const navigate = useRouter();
  const [password, setPassword] = useState('')

  const searchParams = useSearchParams();
  const region = searchParams.get("region");
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  const phone = searchParams.get("phone");

  return (
    <Box height={"100vh"}>
      <Flex flexDir="column" height={"100%"} padding={"19px"} justifyContent={"space-around"}>
        <Box onClick={e => navigate.back()}>
          <Image width={8} height={8} style={{ marginBottom: "36px", marginBottom: "19px" }} src={LeftIcon} alt="" />
        </Box>
        <Text fontSize={"26px"} lineHeight={"26px"} fontWeight={"bold"} marginBottom={"32px"}>
          비밀번호를 입력해주세요
        </Text>
        <Box>
          <Text fontSize={"13px"}>비밀번호</Text>
          <Input
            padding={"18px 15px"}
            lineHeight={"17px"}
            fontSize={"16px"}
            style={{ border: "1px solid #E0E0E1", width: "100%" }}
            placeholder="비밀번호를 입력해주세요"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </Box>
        <Button
          marginTop={"auto"}
          height={"50px"}
          background={"#2DD790"}
          color={"white"}
          width={"100%"}
          onClick={async () => {
            await instance.post('/user/signUp', {
              phoneNumber: phone,
              password: password,
              age: age,
              zone: region,
              name: name
            }).then(e => {
              const { accessToken, accessTokenExpiredAt } = e.data;
              localStorage.setItem('access', accessToken)
              localStorage.setItem('access_expired', accessTokenExpiredAt)
              navigate.push(`/signup/complete`)
            }).catch(e => {
              console.log(e)
            })
          }}
        >
          마무리
        </Button>
      </Flex>
    </Box>
  );
}
