'use client'

import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import HanOk from '../../../assets/han_ok.png'
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { instance } from "@/apis/axios";

export default function Home({ params }) {
  const [info, setInfo] = useState({
    mountainClubId: 0,
    clubName: '한사랑 산악회',
    zone: '서울특별시/까치산',
    currentPeople: 0,
    introduce: '',
    mountainClubImageUrl: '',
    contactLink: '',
    mountainInfo: {
      height: '',
      detailInfo: ''
    }
  })
  const Getinfo = async e => {
    await instance.get(`/mountainClub/${params.id[0]}`).then(e => {
      setInfo(e.data)
    })
  }
  useEffect(e => {
    Getinfo()
  }, [])
  const naviagate = useRouter()
  return (
    <Box height={'100vh'}>
      <Image style={{ width: '100%' }} width={500} height={500} alt="" src={info?.mountainClubImageUrl ? info?.mountainClubImageUrl : HanOk} />
      <Flex flexDir='column' padding={'19px'} justifyContent={'space-around'}>
        <Box >
          <Text fontSize={'26px'} lineHeight={'26px'} fontWeight={'bolder'} marginBottom={'28px'}>{info?.introduce}</Text>
          <Grid gridTemplateColumns={"20px calc(100% - 20px)"}>
            <svg style={{ marginTop: '5px' }} width="15" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00003 7.49189C4.05248 7.49189 3.28138 6.67781 3.28138 5.67664C3.28138 4.67546 4.05248 3.86072 5.00003 3.86072C5.94759 3.86072 6.71806 4.67546 6.71806 5.67664C6.71806 6.67781 5.94759 7.49189 5.00003 7.49189ZM8.52526 1.62483C7.56389 0.577217 6.31179 0 5.00003 0C3.68702 0 2.43492 0.577218 1.47293 1.6255C0.496487 2.6897 -0.0397695 4.11948 0.00230213 5.54859C0.120982 9.5984 4.63583 12.7519 4.82861 12.8839L4.99752 13L5.16832 12.8859C5.36047 12.7572 9.87846 9.68001 9.99777 5.54792C10.0392 4.11948 9.50233 2.68904 8.52526 1.62483Z" fill="#141416" />
            </svg>
            <Box>
              <Text lineHeight={'26px'} fontWeight={'bold'}>주최: {info?.clubName}</Text>
              <Text lineHeight={'26px'} fontWeight={'bold'}>지역: {info?.zone}</Text>
            </Box>
          </Grid>
          <Grid gridTemplateColumns={"20px calc(100% - 100px)"} marginTop={'10px'}>
            <svg style={{ marginTop: '5px' }} width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00053 4.15389C9.19006 4.15389 10.1544 3.22401 10.1544 2.07695C10.1544 0.929881 9.19006 0 8.00053 0C6.81099 0 5.84668 0.929881 5.84668 2.07695C5.84668 3.22401 6.81099 4.15389 8.00053 4.15389Z" fill="black" />
              <path d="M14.9615 4.74733H1.03846C0.763044 4.74733 0.498908 4.85283 0.304158 5.04063C0.109409 5.22842 0 5.48313 0 5.74871C0 6.0143 0.109409 6.269 0.304158 6.4568C0.498908 6.6446 0.763044 6.7501 1.03846 6.7501H4.95692C5.22269 6.7501 5.53385 6.8647 5.71 7.30642C5.91577 7.81936 5.815 8.80999 5.68808 9.57734L5.52192 10.4842C5.52223 10.4865 5.52198 10.4889 5.52118 10.4912C5.52038 10.4934 5.51905 10.4955 5.51731 10.4971L4.18654 17.7965C4.13828 18.0615 4.20082 18.3341 4.36047 18.5547C4.52013 18.7753 4.76391 18.9259 5.03846 18.9737C5.1742 18.9968 5.31336 18.9937 5.44785 18.9646C5.58235 18.9355 5.7095 18.8809 5.82193 18.804C5.93436 18.727 6.02982 18.6294 6.10278 18.5166C6.17573 18.4038 6.22473 18.2782 6.24692 18.147L7.16654 13.0733C7.16654 13.0733 7.46154 11.8683 8 11.8683C8.54731 11.8683 8.83615 13.0733 8.83615 13.0733L9.75577 18.1514C9.77801 18.2838 9.82735 18.4105 9.90091 18.5243C9.97447 18.6381 10.0708 18.7366 10.1842 18.8141C10.2977 18.8916 10.426 18.9466 10.5617 18.9758C10.6974 19.005 10.8377 19.0079 10.9746 18.9843C11.1115 18.9606 11.2421 18.911 11.3588 18.8382C11.4756 18.7654 11.5762 18.6709 11.6547 18.5602C11.7332 18.4496 11.7881 18.325 11.8161 18.1937C11.8442 18.0623 11.8448 17.9269 11.8181 17.7954L10.4869 10.496C10.4872 10.4937 10.487 10.4913 10.4862 10.4891C10.4855 10.4869 10.4843 10.4848 10.4827 10.483L10.3162 9.57623C10.1892 8.80887 10.0885 7.81824 10.2942 7.30531C10.4696 6.8647 10.7908 6.74899 11.0358 6.74899H14.9615C15.237 6.74899 15.5011 6.64348 15.6958 6.45569C15.8906 6.26789 16 6.01319 16 5.7476C16 5.48202 15.8906 5.22731 15.6958 5.03951C15.5011 4.85172 15.237 4.74622 14.9615 4.74622V4.74733Z" fill="black" />
            </svg>

            <Box>
              {/* <Text lineHeight={'26px'} fontWeight={'bold'}>연령: {info?.age}세 이상</Text> */}
              <Text lineHeight={'26px'} fontWeight={'bold'}>인원: {info?.currentPeople}명이 참가했어요.</Text>
            </Box>
          </Grid>
        </Box>

        <Button onClick={e => naviagate.push(`${info?.contactLink}`)} position={'absolute'} bottom={'19px'} height={'50px'} background={'#2DD790'} color={'white'} width={'calc(100% - 38px)'}>참가하기</Button>
      </Flex>
    </Box >
  );
}
