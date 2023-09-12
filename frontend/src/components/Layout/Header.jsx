import React from 'react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import { Button } from '@chakra-ui/button'
import {
    RiDashboardFill,
    RiLoginBoxLine,
    RiLogoutBoxLine,
    RiMenu5Fill,
    RiProfileLine
} from 'react-icons/ri'
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/hooks'
import { VStack } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'

const Header = () => {

    const LinkButton = ({url="/", title="Home", onClose})=>(
        <Link onClick={onClose} to={url}>
            <Button variant={'ghost'}>{title}</Button>
        </Link>
    )
    const {isOpen,onOpen,onClose} = useDisclosure()
  return (
   <>
    <ColorModeSwitcher />
    <Button 
    onClick={onOpen}
    colorScheme='purple'
    width={"12"}
    height={"12"}
    rounded={"full"}
    position={'fixed'}
    zIndex={'overlay'}
    top={"5px"}
    left={"5px"}
    >
        <RiMenu5Fill />
    </Button>
    <Drawer 
    placement='left'
    onClose={onClose} 
    isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(5px'} />
        <DrawerContent >
            <DrawerHeader borderBottomWidth={"1px"} children={'PROJECT-K'}/>
            <DrawerBody>
                <VStack spacing={'4'} alignItems={'flex-start'}>
                    <LinkButton onClose={onClose} url={'/'} title='Home' />
                    <LinkButton onClose={onClose} url={'/login'} title='Login' />
                    <LinkButton onClose={onClose} url={'/register'} title='Register' />
                </VStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
   </>
  )
}

export default Header