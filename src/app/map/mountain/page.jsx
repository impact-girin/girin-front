"use client";

import { infoState, rewardState } from "@/store/atom";
import { Box, Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { useRecoilState } from "recoil";
import shoe from "../../../assets/shoe.png";
import mountain from "../../../assets/mountain.png";
import maker from "../../../assets/maker.png";
import { useEffect, useState } from "react";

const MountainInfo = () => {
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [state, setState] = useRecoilState(infoState);
  const [isReward, setIsReward] = useRecoilState(rewardState);
  const [time, setTime] = useState(0); // 1200초는 20분

  // 위치를 비교해 리워드 성공 여부를 체크하는 hook
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머 정리
    time === 1200 && clearInterval(timer);
  }, [time]);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });

    if (time === 1200) {
      if (location.lat === state.lat && location.lng === state.lng) {
        setIsReward(true);
      } else {
        setIsReward(false);
      }
    }
  }, [state, location, isReward, setIsReward, time]);

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
        backgroundImage={`url(${state.image})`}
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
        top="40%"
        flexDir="column"
        zIndex="2"
        background="linear-gradient(180deg, #2DD790 5.06%, rgba(217, 217, 217, 0.00) 95.58%);"
      />
      <Flex marginTop="64px" flexDir="column" zIndex="3">
        <Text fontSize="40px" color="white" fontWeight={800}>
          {state.name}
        </Text>
        <Text
          display="flex"
          marginBottom="16px"
          width="320px"
          fontSize="16px"
          color="white"
          fontWeight={400}
        >
          <Image
            src={maker}
            alt=""
            style={{ height: "14px", margin: "5px 14px 0 0" }}
          />{" "}
          {state.description}
        </Text>
        <Text
          display="flex"
          alignItems="center"
          fontSize="16px"
          color="white"
          fontWeight={400}
        >
          <Image src={mountain} alt="" style={{ marginRight: "5px" }} /> 높이:{" "}
          {state.height}m
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
