"use client";

import { Box, Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import maker from "../../assets/marker.svg";
import { useEffect, useState } from "react";
import { instance } from "@/apis/axios";
import { useRecoilState } from "recoil";
import { infoState } from "@/store/atom";
import { useRouter } from "next/navigation";

const MapComponent = () => {
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [data, setData] = useState([]);
  const [state, setState] = useRecoilState(infoState);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });

    instance.get("/mountain/list").then((res) => {
      setData(res.data.mountainList);
    });
  }, []);

  const navigate = useRouter();

  return (
    <Flex height="100vh">
      <Map
        center={{ lat: 37.4022864, lng: 127.1003289 }}
        style={{ width: "100%", height: "100vh" }}
      >
        <CustomOverlayMap position={location}>
          <Flex flexDir="column" alignItems="center">
            <Flex
              width="120px"
              borderRadius="20px"
              backgroundColor="#FFFFFF"
              alignItems="center"
              gap="15px"
              padding="10px"
              boxShadow="0px 10px 60px 0px rgba(45, 215, 144, 0.60);"
            >
              <Image src={maker} alt="" />
              <Text fontSize="16px" color="#2DD790" fontWeight={600}>
                현 위치
              </Text>
            </Flex>
            <Box
              w="11px"
              h="11px"
              marginTop="2px"
              borderRadius="100%"
              backgroundColor="#2DD790"
            />
          </Flex>
        </CustomOverlayMap>
        {data.map((item) => (
          <CustomOverlayMap
            key={item.name}
            position={{ lat: item.latitude, lng: item.longitude }}
          >
            <Flex
              flexDir="column"
              alignItems="center"
              onClick={() => {
                setState({
                  description: item.detailInfo,
                  height: item.height,
                  name: item.name,
                  image: item.mountainImageUrl,
                });
                navigate.push("/map/mountain");
              }}
            >
              <Flex
                width="120px"
                borderRadius="20px"
                backgroundColor="#FFFFFF"
                alignItems="center"
                gap="15px"
                padding="10px"
                boxShadow="0px 10px 60px 0px rgba(45, 215, 144, 0.60);"
              >
                <Image src={maker} alt="" />
                <Text fontSize="16px" color="#2DD790" fontWeight={600}>
                  {item.name}
                </Text>
              </Flex>
              <Box
                w="11px"
                h="11px"
                marginTop="2px"
                borderRadius="100%"
                backgroundColor="#2DD790"
              />
            </Flex>
          </CustomOverlayMap>
        ))}
      </Map>
    </Flex>
  );
};

export default MapComponent;
