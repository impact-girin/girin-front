"use client";

import ListAtom from "@/components/campListAtom";
import VisitAtom from "@/components/visitAtom";
import { Box, Button, Flex, Grid, Input, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const visit_lists = [
];

const food_lists = [
];

export default function Home() {
  const [visit_list, setVisitList] = useState(visit_lists);
  const [food_list, setFoodList] = useState(food_lists);
  const [mt_infos, setMt_infos] = useState({
    mountainId: 0,
    latitude: 0,
    longitude: 0,
    name: "북한산",
    height: "",
    detailInfo: "",
    mountainImageUrl: "",
  });
  const [mode, setMode] = useState("visit_list"); //mt_info, visit_list, food
  const navigate = useRouter();

  useEffect(() => {
    function handleEvent(message) {
      setMode(JSON.parse(message.data).type);
    }
    window.addEventListener("message", handleEvent);

    return () => window.removeEventListener("message", handleEvent);
  }, []);

  return (
    <>
      {/* <Box margin={'auto'} borderRadius={'300px'} style={{ border: '12px solid white' }} height={'30px'} width={'80px'} backgroundColor={'lightgray'}></Box>
    <Flex justifyContent={'space-around'} padding={'0 10px'} style={{ boxShadow: '0 3px 0 1px lightgray' }}>
      <Box onClick={e => setMode('mt_info')} padding={'10px'} style={{ borderBottom: mode === 'mt_info' ? '3px solid #2DD790' : 'none' }}>
        <Text textAlign={'center'} fontWeight={'bold'} color={mode === 'mt_info' ? '#2DD790' : 'black'} >산정보</Text>
      </Box>
      <Box onClick={e => setMode('visit_list')} padding={'10px'} style={{ borderBottom: mode === 'visit_list' ? '3px solid #2DD790' : 'none' }}>
        <Text textAlign={'center'} fontWeight={'bold'} color={mode === 'visit_list' ? '#2DD790' : 'black'} >방명록</Text>
      </Box>
      <Box onClick={e => setMode('food')} padding={'10px'} style={{ borderBottom: mode === 'food' ? '3px solid #2DD790' : 'none' }}>
        <Text textAlign={'center'} fontWeight={'bold'} color={mode === 'food' ? '#2DD790' : 'black'} >식&nbsp;&nbsp;&nbsp;당</Text>
      </Box>
    </Flex> */}
      {mode === "visit_list" && (visit_list.length === 0 ?
        <Teong />
        :
        <Grid
          gridTemplateColumns={"165px 165px"}
          margin={"20px 19px"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {visit_list.map((i, n) => (
            <VisitAtom key={n} src={i?.src} user={i?.user} mt_name={mt_infos?.name} />
          ))}
        </Grid>
      )}
      {mode === "food" && (
        <Box>
          {food_list?.map((i, n) => (food_list.length === 0 ?
            <Teong /> :
            <ListAtom
              onClick={(e) => {
                navigate.push(`https://map.naver.com/p/search/${i?.title}`);
              }}
              key={n}
              src={i?.img}
              title={i?.title}
              location={i?.location}
              headcount={i?.headcount}
            />
          ))}
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