"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import LeftIcon from "../../../assets/back_button.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const Certified = () => {
  const [time, setTime] = useState(180); // 남은 시간 (단위: 초)

  const searchParams = useSearchParams();
  const region = searchParams.get("region");
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  const phone = searchParams.get("phone");
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  const getSeconds = (time) => {
    const seconds = Number(time % 60);
    if (seconds < 10) {
      return "0" + String(seconds);
    } else {
      return String(seconds);
    }
  };

  const navigate = useRouter();

  return (
    <Container height={"100vh"}>
      <Flex flexDir="column" height={"100%"} padding={"19px"} justifyContent={"space-around"}>
        <Box onClick={e => navigate.back()}>
          <Image width={8} height={8} style={{ marginBottom: "36px", marginBottom: "19px" }} src={LeftIcon} alt="" />
        </Box>
        <Text fontSize={"26px"} lineHeight={"26px"} fontWeight={"bold"} marginBottom={"32px"}>
          인증번호를 입력해주세요
        </Text>
        <Flex>
          <FormControl>
            <FormLabel>인증번호</FormLabel>
            <InputGroup>
              <Input
                padding={"18px 15px"}
                lineHeight={"17px"}
                fontSize={"16px"}
                border="1px solid"
                borderColor="#E0E0E1"
                width={"100%"}
                placeholder="6자리 숫자"
              />
              <InputRightElement width="90px">
                <Text marginRight={"15px"} fontSize="12px" fontWeight={400} color="#70757D">
                  <span>
                    {parseInt(time / 60)}:{getSeconds(time)}
                  </span>
                </Text>
                <Text
                  color="rgba(50, 129, 246, 0.80)"
                  fontSize="13px"
                  fontWeight={400}
                  textDecor="underline"
                  marginRight={"5px"}
                >
                  재전송
                </Text>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Flex>
        <Button
          marginTop={"auto"}
          height={"50px"}
          background={"#2DD790"}
          color={"white"}
          width={"100%"}
          onClick={() => navigate.push(`/signup/password?name=${name}&age=${age}&region=${region}&phone=${phone}`)}
        >
          확인
        </Button>
      </Flex>
    </Container>
  );
};

export default Certified;
