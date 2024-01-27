"use client";

import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import LeftIcon from "../../assets/back_button.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();

  return (
    <Box height={"100vh"}>
      <Flex flexDir="column" height={"100%"} padding={"19px"} justifyContent={"space-around"}>
        <Link href={""}>
          <Image width={8} height={8} style={{ marginBottom: "36px", marginBottom: "19px" }} src={LeftIcon} alt="" />
        </Link>
        <Text fontSize={"26px"} lineHeight={"30px"} fontWeight={"bold"} marginBottom={"32px"}>
          산악회를 만들기 위해<br /> 만날 지역을 선택해주세요
        </Text>
        <Flex padding={'10px'} height={'120px'} direction={'column'} alignItems={'center'} justifyContent={'space-around'} style={{ border: '2px dotted #2DD790' }} borderRadius={'8px'}>
          <Text fontSize={'15px'} color={'gray'}>지역을 선택해주세요</Text>
          <Button
            height={"50px"}
            background={"#2DD790"}
            color={"white"}
            width={"130px"}
            borderRadius={'200px'}
          >
            선택하기
          </Button>
        </Flex>
        <Button
          marginTop={"auto"}
          height={"50px"}
          background={"#2DD790"}
          color={"white"}
          width={"100%"}
          onClick={() => navigate.push("/signup/chose")}
        >
          다음으로
        </Button>
      </Flex>
    </Box >
  );
}
