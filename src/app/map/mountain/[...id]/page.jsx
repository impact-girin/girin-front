"use client";

import ListAtom from "@/components/campListAtom";
import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import { useState } from "react";

const camp_lists = [
  {
    id: '1',
    location: '서울/영등포구',
    title: '같이 북한산 가실 분 구함',
    headcount: 10,
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  },
  {
    id: '2',
    location: '서울/영등포구',
    title: '같이 북한산 가실 분 구함',
    headcount: 10,
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  },
  {
    id: '3',
    location: '서울/영등포구',
    title: '같이 북한산 가실 분 구함',
    headcount: 10,
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  },
  {
    id: '4',
    location: '서울/영등포구',
    title: '같이 북한산 가실 분 구함',
    headcount: 10,
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  },
  {
    id: '5',
    location: '서울/영등포구',
    title: '같이 북한산 가실 분 구함',
    headcount: 10,
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  },
  {
    id: '6',
    location: '서울/영등포구',
    title: '같이 북한산 가실 분 구함',
    headcount: 10,
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  },
  {
    id: '7',
    location: '서울/영등포구',
    title: '같이 북한산 가실 분 구함',
    headcount: 10,
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  },
  {
    id: '8',
    location: '서울/영등포구',
    title: '같이 북한산 가실 분 구함',
    headcount: 10,
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  },
  {
    id: '9',
    location: '서울/영등포구',
    title: '같이 북한산 가실 분 구함',
    headcount: 10,
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  },
  {
    id: '10',
    location: '서울/영등포구',
    title: '같이 북한산 가실 분 구함',
    headcount: 10,
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  },
  {
    id: '1',
    location: '서울/영등포구',
    title: '같이 북한산 가실 분 구함',
    headcount: 10,
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  },
]

const food_lists = [
  {
    title: '최강 돼지',
    location: '서울',
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  }, {
    title: '최강 돼지',
    location: '서울',
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  }, {
    title: '최강 돼지',
    location: '서울',
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  }, {
    title: '최강 돼지',
    location: '서울',
    img: 'https://velog.velcdn.com/images/kimgh06/profile/8dcc0c72-4a46-407a-8a8b-2bfd7c38d29a/image.png'
  },
]

export default function Home() {
  const [camp_list, setCampList] = useState(camp_lists);
  const [food_list, setFoodList] = useState(food_lists);
  const [mode, setMode] = useState('visit_list');//mt_info, visit_list, food
  const navigate = useRouter();

  return <>
    <Box margin={'auto'} borderRadius={'300px'} style={{ border: '12px solid white' }} height={'30px'} width={'80px'} backgroundColor={'lightgray'}></Box>
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
    </Flex>
    {mode === 'visit_list' && <Box>
      {camp_list?.map((i, n) => <ListAtom key={n} src={i?.img} title={i?.title} id={i?.id} location={i?.location} headcount={i?.headcount} />)}
    </Box>}
    {mode === 'food' && <Box>
      {food_list?.map((i, n) => <ListAtom onClick={e => { navigate.push(`https://map.naver.com/p/search/${i?.title}`) }} key={n} src={i?.img} title={i?.title} location={i?.location} headcount={i?.headcount} />)}
    </Box>}
  </>
}
