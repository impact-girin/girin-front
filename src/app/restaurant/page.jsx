"use client"
import { useSearchParams } from "next/navigation";
import { Box, Button, Flex, Grid, Input, Link, Text } from "@chakra-ui/react";
import HanOk from '../../assets/han_ok.png'
import { instance } from "@/apis/axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import FoodSection from "./food_section";

export default function Restaurnat() {
  const searchparams = useSearchParams();
  const id = searchparams.get('id');
  const [info, setInfo] = useState();

  const GetInfo = async e => {
    await instance.get(`/restaurant/detail/${id}`).then(e => {
      console.log(e.data);
      setInfo(e.data)
    })
  }
  useEffect(e => {
    GetInfo();
  }, [])
  return <Box height={'100vh'} overflowY={'visible'}>
    <Image style={{ width: '100%' }} width={500} height={500} alt="" src={info?.restaurantImageUrl ? info?.restaurantImageUrl : HanOk} />
    <Box padding={'20px'} style={{ borderBottom: '7px solid #F2F2F2' }}>
      <Text fontWeight={'bold'} fontSize={'30px'}>{info?.name}</Text>
      <Flex alignItems={'center'}>
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.121 11.82C14.8749 12.071 14.7619 12.434 14.8179 12.79L15.6624 17.71C15.7336 18.127 15.5664 18.549 15.2349 18.79C14.9101 19.04 14.4779 19.07 14.1236 18.87L9.91659 16.56C9.77031 16.478 9.60788 16.434 9.44165 16.429H9.18423C9.09494 16.443 9.00756 16.473 8.92777 16.519L4.71982 18.84C4.51179 18.95 4.27622 18.989 4.0454 18.95C3.48308 18.838 3.10788 18.274 3.20001 17.679L4.0454 12.759C4.10145 12.4 3.98841 12.035 3.74239 11.78L0.312391 8.28C0.0255287 7.987 -0.0742083 7.547 0.0568746 7.15C0.184158 6.754 0.509016 6.465 0.901314 6.4L5.6222 5.679C5.98125 5.64 6.29661 5.41 6.45809 5.07L8.53832 0.58C8.58771 0.48 8.65135 0.388 8.72829 0.31L8.81378 0.24C8.85842 0.188 8.90972 0.145 8.96671 0.11L9.07025 0.07L9.23173 0H9.63162C9.98878 0.039 10.3032 0.264 10.4675 0.6L12.5753 5.07C12.7273 5.397 13.0227 5.624 13.3637 5.679L18.0846 6.4C18.4835 6.46 18.8169 6.75 18.949 7.15C19.0734 7.551 18.9661 7.991 18.6735 8.28L15.121 11.82Z" fill="#FEE60F" />
        </svg>
        <Text fontWeight={'bold'} marginLeft={'5px'}>{info?.reviewScore} - 리뷰 {info?.reviewCount}개</Text>
      </Flex>
      <Flex alignItems={'center'}>
        <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50005 10.9497C6.07872 10.9497 4.92207 9.75988 4.92207 8.29662C4.92207 6.83337 6.07872 5.64259 7.50005 5.64259C8.92138 5.64259 10.0771 6.83337 10.0771 8.29662C10.0771 9.75988 8.92138 10.9497 7.50005 10.9497ZM12.7879 2.37476C11.3458 0.843625 9.46768 0 7.50005 0C5.53053 0 3.65238 0.843626 2.20939 2.37573C0.74473 3.9311 -0.0596542 6.02077 0.0034532 8.10947C0.181473 14.0284 6.95375 18.6373 7.24291 18.8303L7.49628 19L7.75248 18.8332C8.0407 18.6451 14.8177 14.1477 14.9966 8.1085C15.0588 6.02077 14.2535 3.93013 12.7879 2.37476Z" fill="#141416" />
        </svg>
        <Text fontWeight={'bold'} marginLeft={'5px'}>주소: {info?.restaurantAddress}</Text>
      </Flex>
      <Flex alignItems={'center'}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C3.584 16 0 12.424 0 8C0 3.584 3.584 0 8 0C12.424 0 16 3.584 16 8C16 12.424 12.424 16 8 16ZM10.5519 10.9679C10.6479 11.0239 10.7519 11.0559 10.8639 11.0559C11.0639 11.0559 11.2639 10.9519 11.3759 10.7599C11.5439 10.4799 11.4559 10.1119 11.1679 9.93595L8.31992 8.23995V4.54395C8.31992 4.20795 8.04792 3.94395 7.71992 3.94395C7.39192 3.94395 7.11992 4.20795 7.11992 4.54395V8.58395C7.11992 8.79195 7.23192 8.98395 7.41592 9.09595L10.5519 10.9679Z" fill="#141416" />
        </svg>
        <Text fontWeight={'bold'} marginLeft={'5px'}>영업 시간: {info?.startTime.substr(0, 5)}부터 {info?.endTime.substr(0, 5)}까지</Text>
      </Flex>
    </Box>
    <Box>
      {info?.menuList?.map((i, n) => <FoodSection key={n} id={i?.menuId} src={i?.menuImageUrl} eng={i?.menuEngName} name={i?.menuName} price={i?.menuPrice} />)}
    </Box>
  </Box >;
}