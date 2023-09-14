import { Box, Container, Heading, VStack } from '@chakra-ui/layout'
import {Button,Input } from '@chakra-ui/react'
import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/actions/userAction'

const Login = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')

    const dispatch = useDispatch();

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(loginUser(email,password))
    }
   
  return (
    <Container h={'90vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
            <Heading children='LOGIN'/>
            <form onSubmit={submitHandler}>
                <Box>
                    <label htmlFor="email">Email Address</label>
                    <Input
                     id='email'
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     placeholder='abc@gmail.com'
                     type='email'
                     focusBorderColor='yellow.500'
                     />
                </Box>
                <Box my={'4'}>
            <label htmlFor='password' children={"Password"}/>
            <Input 
            required
            id='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Enter Your Password'
            type='password'
            focusBorderColor='yellow.500'
            />
            </Box>
            <Button my={'4'} colorScheme='purple' type='submit' >Login</Button>

            </form>
        </VStack>
    </Container>
  )
}

export default Login