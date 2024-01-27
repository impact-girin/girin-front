"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import LeftIcon from "../../../assets/back_button.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Phone = () => {
  const searchParams = useSearchParams();
  const region = searchParams.get("region");
  const name = searchParams.get("name");
  const age = searchParams.get("age");
  const [value, setValue] = useState("");
  const [errorNumber, setErrorNumber] = useState(false);

  const navigate = useRouter();

  const checkNumber = () => {
    const regex = /^01[016789]\d{3,4}\d{4}$/;
    if (regex.test(value)) {
      setErrorNumber(false); // 일치할 경우 에러가 아닌 것으로 설정
      navigate.push(`/signup/certified?name=${name}&age=${age}&region=${region}&phone=${value}`);
    } else {
      setErrorNumber(true); // 일치하지 않을 경우 에러로 설정
    }
  };

  const onChangeInput = (value) => {
    setValue(String(value));
  };

  return (
    <Container height={"100vh"}>
      <Flex
        flexDir="column"
        height={"100%"}
        padding={"19px"}
        justifyContent={"space-around"}
      >
        <Box onClick={e => navigate.back()}>
          <Image
            width={8}
            height={8}
            style={{ marginBottom: "36px", marginBottom: "19px" }}
            src={LeftIcon}
            alt=""
          />
        </Box>
        <Text
          fontSize={"26px"}
          lineHeight={"26px"}
          fontWeight={"bold"}
          marginBottom={"32px"}
        >
          휴대폰번호를 입력해주세요
        </Text>
        <Flex>
          <FormControl>
            <FormLabel>휴대폰번호</FormLabel>
            <Input
              onChange={(e) => onChangeInput(e.target.value)}
              padding={"18px 15px"}
              lineHeight={"17px"}
              fontSize={"16px"}
              border="1px solid"
              borderColor={errorNumber ? "#CC4363" : "#E0E0E1"}
              width={"100%"}
              placeholder="휴대폰번호를 입력해주세요"
            />
            {errorNumber && (
              <FormHelperText
                margin="0 0 0 10px"
                color="#CC4363"
                fontSize="11px"
              >
                휴대폰번호를 다시 한 번 확인해주세요
              </FormHelperText>
            )}
          </FormControl>
        </Flex>
        <Button
          marginTop={"auto"}
          height={"50px"}
          background={"#2DD790"}
          color={"white"}
          width={"100%"}
          onClick={() => checkNumber()}
        >
          다음으로
        </Button>
      </Flex>
    </Container>
  );
};

export default Phone;
