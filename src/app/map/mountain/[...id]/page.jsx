"use client";

import { instance } from "@/apis/axios";
import ListAtom from "@/components/campListAtom";
import VisitAtom from "@/components/visitAtom";
import { infoState, rewardState } from "@/store/atom";
import { Box, Button, Flex, Grid, Input, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const visit_lists = [];

const food_lists = [];

export default function Home({ params }) {
  const [visit_list, setVisitList] = useState([]);
  const [food_list, setFoodList] = useState(food_lists);
  const [state, setState] = useRecoilState(infoState);

  const [mt_infos, setMt_infos] = useState({
    mountainId: 0,
    latitude: 0,
    longitude: 0,
    name: "북한산",
    height: "",
    detailInfo: "",
    mountainImageUrl: "",
  });
  const [time, setTime] = useState(0); // 1200초는 20분
  const [mode, setMode] = useState("food"); //mt_info, visit_list, food
  const navigate = useRouter();
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [isReward, setIsReward] = useRecoilState(rewardState);

  useEffect(() => {
    function handleEvent(message) {
      try {
        setMode(JSON.parse(message.data).type);
      } catch (e) {
        console.log(e)
      }
    }
    window.addEventListener("message", handleEvent);

    return () => window.removeEventListener("message", handleEvent);
  }, []);

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
  }, [location.lat, location.lng, setIsReward, time]);

  useEffect(() => {
    instance.get(`/guestbook/list?mountain-name=${decodeURI(params.id[0])}`).then((res) => {
      setVisitList(res.data.guestBookList);
    });
    GetRestaurantList();
  }, []);

  const GetRestaurantList = async e => {
    await instance.get(`/restaurant/list?name=${decodeURI(params.id[0])}`).then(e => {
      setFoodList(e.data.restaurantList)
    })
  }

  return (
    <>
      {mode === "visit_list" &&
        (visit_list.length === 0 ? (
          <Teong />
        ) : (
          <Grid
            gridTemplateColumns={"165px 165px"}
            margin={"20px 19px"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            {visit_list.map((i, n) => (
              <VisitAtom
                key={n}
                src={i?.mountainImageUrl}
                user={i?.userName}
                mt_name={mt_infos?.mountainName}
              />
            ))}
          </Grid>
        ))}
      {mode === "food" && (
        <Box>
          {food_list?.map((i, n) =>
            food_list.length === 0 ? (
              <Teong key={n} />
            ) : (
              <ListAtom
                onClick={(e) => {
                  navigate.push(`/restaurant?id=${i?.restaurantId}`);
                }}
                key={n}
                src={i?.restaurantImageUrl}
                title={i?.name}
                location={i?.restaurantAddress}
              />
            )
          )}
        </Box>
      )}
    </>
  );
}

function Teong() {
  return <Flex direction='column' h={'100vh'} justifyContent={'center'} alignItems={'center'} >
    <Text fontSize={'100px'} fontWeight={'bold'} color={'#2DD790'}>텅</Text>
    <Text color={'gray'}>해당 지역에 만들어진 방명록이 없어요.</Text>
  </Flex >
}