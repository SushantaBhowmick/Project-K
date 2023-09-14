import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/layout'
import React, { Fragment } from 'react'

const Profile = ({user}) => {
  const {isOpen, onClose,onOpen} =useDisclosure();

  return (
    <Fragment>
    <Container minH={'95vh'}  maxW='container.lg' py='8'>
    <Heading children='Profile' m='8' textTransform={'uppercase'} />

    <Stack 
      justifyContent={'flex-start'}
      alignItems={'center'}
      spacing={['8','16']}
      padding='8'
      direction={['column','row']}>
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} colorScheme='purple' variant={'ghost'}>
                Change Photo
            </Button>
        </VStack>
        <VStack
        spacing={'4'}
        alignItems={['center','flex-start']}
        >
 <HStack>
                <Text children='Name:' fontWeight={'bold'}/>
                <Text children={user.name} />
            </HStack>
            <HStack>
                <Text children='Email:' fontWeight={'bold'}/>
                <Text children={user.email} />
            </HStack>
            <HStack>
                <Text children='Join In:' fontWeight={'bold'}/>
                <Text children={user.createdAt.split("T")[0]} />
            </HStack>

        </VStack>
      </Stack>
    </Container>
    </Fragment>
  )
}

export default Profile