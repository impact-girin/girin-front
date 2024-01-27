"use client";

import { infoState } from "@/store/atom";
import { Box, Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { useRecoilState } from "recoil";
import shoe from "../../../assets/shoe.png";

const MountainInfo = () => {
  const [state, setState] = useRecoilState(infoState);

  return (
    <Flex
      width="100%"
      height="100%"
      padding="20px"
      position="relative"
      justifyContent="center"
    >
      <Box
        width="100%"
        height="240px"
        position="absolute"
        top="0%"
        backgroundImage="https://lh5.googleusercontent.com/p/AF1QipNb59ZuCozBSFYU7n0FcsyXlH3o8IUaFPV9HQ4k=w426-h240-k-no"
      />
      <Box
        position="absolute"
        width="100%"
        height="200px"
        right="0%"
        top="12%"
        flexDir="column"
        zIndex="2"
        background="linear-gradient(1deg, #2DD790 5.06%, rgba(217, 217, 217, 0.00) 95.58%);"
      />
      <Box
        position="absolute"
        width="100%"
        height="200px"
        right="0%"
        top="42%"
        flexDir="column"
        zIndex="2"
        background="linear-gradient(180deg, #2DD790 5.06%, rgba(217, 217, 217, 0.00) 95.58%);"
      />
      <Flex marginTop="64px" flexDir="column" zIndex="3">
        <Text fontSize="40px" color="white" fontWeight={800}>
          {state.name}
        </Text>
        <Text
          marginBottom="16px"
          width="320px"
          fontSize="16px"
          color="white"
          fontWeight={400}
        >
          {state.description}
        </Text>
        <Text fontSize="16px" color="white" fontWeight={400}>
          {state.height}
        </Text>
        <Flex width="100%" justifyContent="center" alignItems="center">
          <Flex
            marginTop="32px"
            zIndex="3"
            width="352px"
            height="352px"
            backgroundColor="white"
            borderRadius="10px"
            flexDir="column"
            alignItems="center"
            padding="16px 64px"
          >
            <Text fontWeight={700} fontSize="24px">
              {state.name} 등산 보상
            </Text>
            <Text color="#717171" fontSize="16px" fontWeight={400}>
              등산을 하고 포인트를 받아보세요!
            </Text>
            <Flex
              position="relative"
              margin="28px 0 22px 0"
              width="154px"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                zIndex="2"
                position="absolute"
                width="150px"
                height="150px"
                borderRadius="100%"
                background=" linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%)"
                boxShadow="0px 8.158px 19.283px -11.125px rgba(0, 0, 0, 0.14);"
              />
              <Image style={{ zIndex: 3 }} src={shoe} alt="" />
            </Flex>
            <Text
              fontSize="32px"
              fontWeight={700}
              background="linear-gradient(264deg, #00D9F5 29.9%, rgba(45, 215, 144, 0.70) 113.23%);"
              backgroundClip="text"
            >
              100 포인트
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MountainInfo;
