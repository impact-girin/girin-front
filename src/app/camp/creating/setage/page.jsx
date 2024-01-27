"use client";

import React from "react";
import { useState } from "react";
import { Flex, Text, Grid, Button } from "@chakra-ui/react";
import Image from "next/image";
import LeftArrow from "../../../assets/back_button.png";
import AgeImg from "@/app/assets/age_img.png";
// import AreaImg from "../../../assets/area_img.png";
import ChoseButton from "./choseButton";
import { useRouter, useSearchParams } from "next/navigation";

const ages = ["40세 이상", "45세 이상", "50세 이상", "55세 이상", "60세 이상", "65세 이상", "70세 이상", '75세 이상', '80세 이상'];
const areas = ["서울", "경기", "경상도", "전라도", "강원도", "인천", "경상도", "충청도", "제주도"];

const Chose = () => {
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get('name')
  const counts = searchParams.get('counts')
  const contact = searchParams.get('contact')
  const intro = searchParams.get('intro')
  const img = searchParams.get('img')
  const [clickNumber, setClickNumber] = useState(0);

  return (
    <Flex flexDirection={"column"} alignItems="center" padding={"20px"} width={"100%"} height={"100vh"}>
      <Flex onClick={e => navigate.back()} justifyContent="left" width={"100%"} marginBottom={"16px"}>
        <Image width={"5px"} height={"5px"} src={LeftArrow} alt="" />
      </Flex>
      <Image height={81} src={AgeImg} marginTop={"16px"} alt="" />
      <Text marginTop="21px" fontSize="20px" fontWeight="600" fontFamily="Pretendard">
        모일 연령대를 알려주세요.
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={"10px"} width={"100%"} marginTop={"25px"}>
        {ages.map((age, idx) => (
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
        onClick={() => navigate.push(`/camp/creating/selectRegion?name=${name}&intro=${intro}&counts=${counts}&img=${img}&contact=${contact}&age=${clickNumber}`)}
      >
        다음으로
      </Button>
    </Flex>
  );
};

export default Chose;
