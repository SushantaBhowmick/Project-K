import { Heading, Stack, VStack } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import MetaData from '../Layout/MetaData'
import { CgMouse } from 'react-icons/cg'
import "./Home.css"
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/productAction'



const Home = () => {

  const {products} = useSelector(state=>state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  

  return (
    <>
    <MetaData title={`Modern Ecommerce`}/>
 <div className="banner">
  
  <a href="#container">
    <span></span>
    <button>
      Scroll 
    </button>
    <span><CgMouse/></span>
  </a>
      
     </div>
 <Stack>
 <VStack p={4}>
 <Heading 
 children='Fetured Products' 
 borderBottom={'1px solid black'}
 size={["md","lg"]}
 paddingY={'5'}
  />
 </VStack>
 
     <div className="container" id="container">
     {
      products && products.map((product)=>(
       <ProductCard
       key={product._id}
       product={product}
       />
      ))
     }
     </div>
 </Stack>
    </>
  )
}

export default Home