"use client";

import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import cafe from "../../../assets/cafe.jpeg";
import dduck from "../../../assets/떡볶이.jpeg";
import pasta from "../../../assets/파스타.jpeg";
import pizza from "../../../assets/피자.jpeg";
import back from "../../assets/back_button.png";
import { instance } from "@/apis/axios";

const RestaurantPage = () => {
  const onClickButton = () => {
    instance.put("/reward/control?operator=minus&point=500");
  };

  return (
    <Flex flexDir="column" width="100%" height="100%">
      <Flex
        zIndex={99}
        position="fixed"
        top="5%"
        left="5%"
        padding="5px"
        width="50px"
        height="50px"
        backgroundColor="white"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        border="1px solid"
        borderColor="black"
        borderRadius="100%"
      >
        <Image src={back} alt="" />
      </Flex>
      <Image style={{ width: "100%", marginBottom: "4px" }} src={cafe} alt="" />
      <Flex flexDir="column" padding="20px">
        <Text fontWeight={800} fontSize="32px">
          러빙헛 카페
        </Text>
        <Text fontSize="16px" fontWeight={400}>
          주소: 서울특별시 강남구 개포로22길 35
        </Text>
        <Text fontSize="16px" fontWeight={400}>
          영업시간: 영업중, 오전 11:00시에 영업 시작
        </Text>{" "}
      </Flex>{" "}
      <Divider backgroundColor="#F2F2F2" />
      <Flex flexDir="column" padding="20px" gap="10px">
        <Flex>
          <Image
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              marginRight: "16px",
            }}
            src={pasta}
            alt=""
          />
          <Flex flexDir="column">
            <Text fontSize="17px">파스타</Text>
            <Text fontSize="15px" color="#8E8E93">
              pasta
            </Text>
            <Text fontSize="15px" fontWeight={700}>
              13,000원
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Image
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              marginRight: "16px",
            }}
            src={pizza}
            alt=""
          />
          <Flex flexDir="column">
            <Text fontSize="17px">피자</Text>
            <Text fontSize="15px" color="#8E8E93">
              pizza
            </Text>
            <Text fontSize="15px" fontWeight={700}>
              15,000원
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Image
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              marginRight: "16px",
            }}
            src={dduck}
            alt=""
          />
          <Flex flexDir="column" marginBottom="40px">
            <Text fontSize="17px">떡볶이</Text>
            <Text fontSize="15px" color="#8E8E93">
              tteokbokki
            </Text>
            <Text fontSize="15px" fontWeight={700}>
              4,000원
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Button
        position="fixed"
        bottom={0}
        right="3%"
        height={"50px"}
        background={"#2DD790"}
        color={"white"}
        width={"352px"}
        onClick={() => onClickButton()}
      >
        포인트 사용하기
      </Button>
    </Flex>
  );
};

export default RestaurantPage;
