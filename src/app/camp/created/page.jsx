'use client'

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Checked from "../../../assets/Checked.svg"
import Image from "next/image"

export default function Home() {
  return (
    <Box height={'100vh'}>
      <Flex flexDir='column' height={'100%'} padding={'19px'} justifyContent={'space-around'}>
        <Box marginTop={'60px'}>
          <Text fontSize={'26px'} lineHeight={'26px'} fontWeight={'bold'} marginBottom={'5px'} color={'#2DD790'}>산악회 생성 완료!</Text>
          <Text fontSize={'19px'} lineHeight={'26px'} fontWeight={'bold'} marginBottom={'130px'}>생성한 방은 방만들기에서 볼 수 있어요</Text>
        </Box>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Image width={142} height={142} alt="" src={Checked} />
        </Flex>

        <Button marginTop={'auto'} height={'50px'} background={'#2DD790'} color={'white'} width={'100%'}>확인</Button>
      </Flex>
    </Box>
  );
}
