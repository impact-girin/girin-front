"use client";

import React from "react";
import { useState } from "react";
import { Flex, Text, Grid, Button } from "@chakra-ui/react";
import Image from "next/image";
import LeftArrow from "../../assets/back_button.png";
import AgeImg from "../../assets/age_img.png";
import AreaImg from "../../assets/area_img.png";
import ChoseButton from "./choseButton";
import { useRouter, useSearchParams } from "next/navigation";

const ages = ["10대", "20대", "30대", "40대", "50대", "60대", "70대", "80대", "90대"];
const areas = ["서울", "경기", "경상도", "전라도", "강원도", "인천", "등등", "등등", "등등"];

const Chose = () => {
  // kind = "age" | "area"
  const searchParams = useSearchParams();
  const kind = searchParams.get("kind");

  const navigate = useRouter();

  const [clickNumber, setClickNumber] = useState(0);

  return (
    <Flex flexDirection={"column"} alignItems="center" padding={"20px"} width={"100%"} height={"100vh"}>
      <Flex justifyContent="left" width={"100%"} marginBottom={"16px"}>
        <Image width={"5px"} height={"5px"} src={LeftArrow} alt="" />
      </Flex>
      <Image height={81} src={kind === "age" ? AgeImg : AreaImg} marginTop={"16px"} alt="" />
      <Text marginTop="21px" fontSize="20px" fontWeight="600" fontFamily="Pretendard">
        {kind === "age" ? "“이름”님의 나이대를 알려주세요." : "“이름”님의 지역을 알려주세요."}
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={"10px"} width={"100%"} marginTop={"25px"}>
        {kind === "age"
          ? ages.map((age, idx) => (
              <ChoseButton
                key={idx}
                isClick={idx + 1 == clickNumber}
                onClick={() => {
                  clickNumber != idx + 1
                    ? setClickNumber(idx + 1)
                    : clickNumber == 0
                    ? setClickNumber(idx + 1)
                    : setClickNumber(0);
                }}
              >
                {age}
              </ChoseButton>
            ))
          : areas.map((age, idx) => (
              <ChoseButton
                key={idx}
                isClick={idx + 1 == clickNumber}
                onClick={() => {
                  clickNumber != idx + 1
                    ? setClickNumber(idx + 1)
                    : clickNumber == 0
                    ? setClickNumber(idx + 1)
                    : setClickNumber(0);
                }}
              >
                {age}
              </ChoseButton>
            ))}
      </Grid>
      <Button
        marginTop={"auto"}
        height={"50px"}
        background={"#2DD790"}
        color={"white"}
        width={"100%"}
        onClick={() => (kind === "age" ? navigate.push("/signup/chose") : navigate.push("/signup/phone"))}
      >
        다음으로
      </Button>
    </Flex>
  );
};

export default Chose;
