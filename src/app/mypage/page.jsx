"use client";

import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import user from "../../assets/user.png";
import mymaker from "../../assets/mymaker.png";
import calander from "../../assets/calander.png";
import phone from "../../assets/phone.png";
import Subtract from "../../assets/Subtract.png";
import Vector from "../../assets/Vector.png";
import { useEffect, useState } from "react";
import { instance } from "@/apis/axios";
import { useRouter } from "next/navigation";

const ages = ["10대", "20대", "30대", "40대", "50대", "60대", "70대", "80대", "90대"];
const areas = ["서울", "경기", "경상도", "전라도", "강원도", "인천", "경상도", "충청도", "제주도"];

const MyPage = () => {
  const [data, setData] = useState({});

  const navigate = useRouter;

  useEffect(() => {
    instance.get("/user/my").then((res) => setData(res.data));
  }, []);

  const onClickLogOut = () => {
    localStorage.removeItem("access");
    navigate("/login");
  };

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      padding="20px"
    >
      <Flex
        marginTop="36px"
        width="80px"
        height="80px"
        borderRadius="100%"
        border="1px solid"
        borderColor="#BBBCBD"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          style={{
            width: "50px",
          }}
          src={user}
          alt=""
        />
      </Flex>
      <VStack marginTop="25px" width="100%">
        <Flex
          justifyContent="flex-start"
          width="100%"
          style={{
            borderRadius: "6px",
            border: "1px solid",
            borderColor: "#E0E0E1",
            padding: "10px 16px",
          }}
        >
          <Image
            style={{ marginRight: "5px", height: "20px" }}
            src={Subtract}
            alt=""
          />
          <Flex flexDir="column">
            <Text fontSize="20px" fontWeight={500}>
              닉네임
            </Text>
            <Text fontSize="18px" fontWeight={500} color="#70757D">
              {data.name}
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="flex-start"
          width="100%"
          style={{
            borderRadius: "6px",
            border: "1px solid",
            borderColor: "#E0E0E1",
            padding: "10px 16px",
          }}
        >
          <Image
            style={{ marginRight: "5px", height: "20px" }}
            src={calander}
            alt=""
          />
          <Flex flexDir="column">
            <Text fontSize="20px" fontWeight={500}>
              나이대
            </Text>
            <Text fontSize="18px" fontWeight={500} color="#70757D">
              {ages[data.age - 1]}
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="flex-start"
          width="100%"
          style={{
            borderRadius: "6px",
            border: "1px solid",
            borderColor: "#E0E0E1",
            padding: "10px 16px",
          }}
        >
          <Image
            style={{ marginRight: "5px", height: "20px" }}
            src={mymaker}
            alt=""
          />
          <Flex flexDir="column">
            <Text fontSize="20px" fontWeight={500}>
              지역
            </Text>
            <Text fontSize="18px" fontWeight={500} color="#70757D">
              {areas[data.zone - 1]}
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="flex-start"
          width="100%"
          style={{
            borderRadius: "6px",
            border: "1px solid",
            borderColor: "#E0E0E1",
            padding: "10px 16px",
          }}
        >
          <Image
            style={{ marginRight: "5px", height: "20px" }}
            src={phone}
            alt=""
          />
          <Flex flexDir="column">
            <Text fontSize="20px" fontWeight={500}>
              전화번호
            </Text>
            <Text fontSize="18px" fontWeight={500} color="#70757D">
              {data.phoneNumber}
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="flex-start"
          width="100%"
          style={{
            borderRadius: "6px",
            border: "1px solid",
            borderColor: "#E0E0E1",
            padding: "10px 16px",
          }}
        >
          <Image
            style={{ marginRight: "5px", height: "20px" }}
            src={Vector}
            alt=""
          />
          <Flex flexDir="column">
            <Text fontSize="20px" fontWeight={500}>
              포인트
            </Text>
            <Text fontSize="18px" fontWeight={500} color="#70757D">
              {data.rewardPoint}
            </Text>
          </Flex>
        </Flex>
      </VStack>
      <Text
        onClick={() => onClickLogOut()}
        marginTop="20px"
        color="#70757D"
        fontSize="14px"
        fontWeight={500}
      >
        로그아웃
      </Text>
    </Flex>
  );
};

export default MyPage;
