"use client";

import { Button } from "@chakra-ui/react";

export default function HeadCountAtom({ selected, counts, setSelected }) {
  return <Button w={'40px'} h={'40px'} color={selected === counts ? 'white' : 'black'} borderRadius={'200px'} onClick={e => setSelected(counts)} backgroundColor={selected === counts ? '#2DD790' : 'white'}>
    {counts}명
  </Button>
}