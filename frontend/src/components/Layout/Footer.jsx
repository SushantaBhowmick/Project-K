import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/layout'
import React from 'react'
import {
    TiSocialYoutubeCircular,
    TiSocialInstagramCircular,
    TiSocialTwitterCircular,
    TiSocialGithubCircular,
} from 'react-icons/ti'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <Box minH={'10vh'} bg={'blackAlpha.900'}padding={'4'}>
     <Stack direction={['column','row']} >
        <VStack alignItems={['center','flex-start']} width={'full'}>
        <Heading children='All Right Reserved' color={'white'}/>
        <Heading size={'sm'} children='@Sushanta Bhowmick' color={'yellow.500'}/>
        </VStack>
        <HStack color={'white'} spacing={['2','10']} justifyContent={'center'} fontSize={['40','50']}>
            <Link to={'https://youtube.com'} target='black'>
                <TiSocialYoutubeCircular/>
            </Link>
            <Link to={'https://www.instagram.com/sushanta8514/'} target='black'>
                <TiSocialInstagramCircular/>
            </Link>
            <Link to={'https://github.com/SushantaBhowmick'} target='black'>
                <TiSocialGithubCircular/>
            </Link>
            <Link to={'https://twitter.com/Sushant31147320'} target='black'>
                <TiSocialTwitterCircular/>
            </Link>
        </HStack>
    </Stack>
   </Box>
  )
}

export default Footer