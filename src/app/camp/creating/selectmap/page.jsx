"use client";

import { Box, Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import maker from "../../../../assets/marker.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { instance } from "@/apis/axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { infoState } from "@/store/atom";


export default function MapPage() {
  const navigate = useRouter();
  const searchParams = useSearchParams();
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
  return <Flex height="100vh">
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
            onClick={async () => {
              const name = searchParams.get('name')
              const contact = searchParams.get('contact')
              const counts = searchParams.get('counts')
              const region = searchParams.get('region')
              const intro = searchParams.get('intro')
              const age = searchParams.get('age')
              const img = localStorage.getItem('img')
              await instance.get(`/mountain?name=${item.name}`).then(async e => {
                const form = new FormData();
                let list = [];
                list.push(dataURLtoFile(img, generateRandomString(60)))
                Array.from(list).forEach(e =>
                  form.append('images', e)
                )
                const moutId = e.data.mountainId

                await instance.post('/image', form, {
                  headers: { 'Content-Type': 'multipart/form-data' },
                  transformRequest: [
                    e => form
                  ]
                }).then(async e => {
                  await instance.post('/mountainClub', {
                    name: name,
                    zone: region,
                    age: age,
                    introduce: intro,
                    maxPeople: parseInt(counts),
                    mountainClubImageUrl: e.data.imageUrl[0],
                    contactLink: contact,
                    mountainId: parseInt(moutId)
                  }
                    , { headers: { 'Authorization': `Bearer ${localStorage.getItem('access')}` } }
                  ).then(e => {
                    localStorage.removeItem('img')
                    navigate.push(`/camp/`)
                  }).catch(e => {
                    console.log(e)
                  })
                }).catch(e => {
                  console.log(e)
                })

              }).catch(e => {
                console.log(e)
              })
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
}

const dataURLtoFile = (dataurl, fileName) => {

  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
}

const generateRandomString = (num) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}