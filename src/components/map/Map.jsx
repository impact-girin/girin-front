"use client";

import { Box, Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import maker from "../../assets/marker.svg";
import { useEffect, useState } from "react";

const MapComponent = () => {
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
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
            boxShadow="0px 10px 50px 0px rgba(45, 215, 144, 0.20)"
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
    </Map>
  );
};

export default MapComponent;
