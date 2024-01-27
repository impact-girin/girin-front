"use client";

import { instance } from "@/apis/axios";
import ListAtom from "@/components/campListAtom";
import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const lists = [
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

export default function Home() {
  const [list, setList] = useState([{
    "mountainClubId": 0,
    "clubName": "",
    "zone": "",
    "maxPeople": 0,
    "introduce": "",
    "mountainClubImageUrl": "",
    "contactLink": ""
  }])
  const navigate = useRouter();
  const GetAllList = async e => {
    await instance.get('/mountainClub/list').then(e => {
      setList(e.data.mountainClubList)
    })
  }
  useEffect(e => {
    GetAllList()
  }, [])

  return <>
    <Box padding={'10px'}>
      <Text textAlign={'center'} fontWeight={'bold'} fontSize={'20px'}>산악회 정보</Text>
    </Box>
    <Box>
      <Flex onClick={e => navigate.push('/camp/selectRegion')} borderRadius={'20px'} padding={'2px 0 '} justifyContent={'center'} w={'90px'} fontSize={'14px'} color={'#2DD790'} margin={'16px'} marginBottom={'0'} style={{ border: '1px solid #2DD790' }}>
        <svg width="14" height="20" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.96295 14.559C9.41572 13.0226 11.9998 9.88522 11.9998 7.00649C11.9998 3.6892 9.76126 1 6.99984 1C4.23841 1 1.99984 3.6892 1.99984 7.00649C1.99984 9.88522 4.58396 13.0226 6.03673 14.559C6.59272 15.147 7.40696 15.147 7.96295 14.559ZM5.33317 7.00649C5.33317 5.90073 6.07936 5.00433 6.99984 5.00433C7.92031 5.00433 8.6665 5.90073 8.6665 7.00649C8.6665 8.11226 7.92031 9.00865 6.99984 9.00865C6.07936 9.00865 5.33317 8.11226 5.33317 7.00649Z" fill="#2DD790" />
        </svg>
        <Text>지역 선택</Text>
      </Flex>
      {list?.map((i, n) => <ListAtom key={n} src={i?.mountainClubImageUrl} title={i?.clubName} id={i?.mountainClubId} location={i?.contactLink} headcount={i?.maxPeople} />)}
    </Box >
  </>
}
