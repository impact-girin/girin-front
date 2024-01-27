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
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

const MapComponent = () => {
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [data, setMountainData] = useState([]);
  const [state, setState] = useRecoilState(infoState);
  const [restaurantData, setRestaurantDate] = useState([]);
  const [seeRestaurant, setSeeRestaurant] = useState(false);

  useEffect(() => {
    instance.get("/mountain/list").then((res) => {
      setMountainData(res.data.mountainList);
    });

    instance.get("/restaurant/all").then((res) => {
      setRestaurantDate(res.data.restaurantList);
    });
  }, []);

  const navigate = useRouter();

  return (
    <Flex height="100vh">
      <FormControl
        zIndex={99}
        position="fixed"
        top="5%"
        left="5%"
        padding="5px"
        width="100px"
        backgroundColor="white"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        border="1px solid"
        borderColor="black"
        borderRadius="8px"
      >
        <FormLabel margin={0}>음식점</FormLabel>
        <Switch size="lg" onChange={() => setSeeRestaurant(!seeRestaurant)} />
      </FormControl>
      <Map
        center={{ lat: 37.4022864, lng: 127.1003289 }}
        style={{ width: "100%", height: "100vh", position: "relative" }}
      >
        <CustomOverlayMap position={{ lat: 37.4022864, lng: 127.1003289 }}>
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
        {
          // 식당 맵 리스트
          seeRestaurant &&
            restaurantData.map((item) => (
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
                    navigate.push("/map/restaurant");
                  }}
                >
                  <Flex
                    width="170px"
                    borderRadius="20px"
                    backgroundColor="#FFFFFF"
                    justifyContent="center"
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
            ))
        }
      </Map>
    </Flex>
  );
};

export default MapComponent;
