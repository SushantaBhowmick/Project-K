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
import { MdAndroid } from "react-icons/md";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/hooks'
import { HStack, VStack } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { LogoutUser } from '../../redux/actions/userAction';

const Header = ({ isAuthenticated = false, user }) => {

    const LinkButton = ({ url = "/", title = "Home", onClose }) => (
        <Link onClick={onClose} to={url}>
            <Button variant={'ghost'}>{title}</Button>
        </Link>
    )
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useDispatch();


    const logoutHandler = ()=>{
        dispatch(LogoutUser())
    }

    return (
        <>
            <ColorModeSwitcher />
            <Button
                onClick={onOpen}
                colorScheme='purple'
                width={["10", "12"]}
                height={["10", "12"]}
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
                <DrawerOverlay backdropFilter={'blur(5px)'} />
                <DrawerContent >
                    <DrawerHeader borderBottomWidth={"1px"} children={'PROJECT-K'} />
                    <DrawerBody>
                        <VStack spacing={'4'} alignItems={'flex-start'}>
                            <LinkButton onClose={onClose} url={'/'} title='Home' />
                            <LinkButton onClose={onClose} url={'/products'} title='Products' />
                            <LinkButton onClose={onClose} url={'/cart'} title='Cart' />
                            <LinkButton onClose={onClose} url={'/orders'} title='Orders' />
                            <HStack
                                justifyContent={'space-evently'}
                                position={'absolute'}
                                bottom={'2rem'}
                                right={'2rem'}
                                width={"80%"}
                            >
                                {
                                    isAuthenticated ? (
                                        <>
                                            <VStack>
                                                <HStack>
                                                    <Link to={'/profile'} onClick={onClose}>
                                                        <Button colorScheme='yellow' variant={'ghost'}>
                                                            <RiProfileLine />
                                                            Profile</Button>
                                                    </Link>
                                                    <Button 
                                                    colorScheme='yellow'
                                                     variant={'ghost'}
                                                     onClick={logoutHandler}
                                                     >
                                                        <RiLogoutBoxLine />
                                                        Logout</Button>
                                                </HStack>
                                                {
                                                    user && user.role === 'admin' ?
                                                        <Link to={'/profile'} onClick={onClose}>
                                                            <Button colorScheme='purple' width={'full'} variant={'ghost'}>
                                                                <RiDashboardFill />
                                                                Dashboard</Button>
                                                        </Link> : ""
                                                }
                                            </VStack>
                                        </>
                                    ) : (<>
                                        <Link to={'/login'} onClick={onClose}>
                                            <Button colorScheme='yellow'>
                                                <RiLoginBoxLine />
                                                Login</Button>
                                        </Link>
                                        <p>OR</p>
                                        <Link to={'register'} onClick={onClose}>
                                            <Button colorScheme='yellow'>
                                                <MdAndroid />
                                                Sign Up</Button>
                                        </Link>
                                    </>)
                                }
                            </HStack>

                        </VStack>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header