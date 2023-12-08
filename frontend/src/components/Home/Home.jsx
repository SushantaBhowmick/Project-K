import { Heading, Stack, VStack,Box } from '@chakra-ui/layout'
import React, { useEffect } from 'react'
import MetaData from '../Layout/MetaData'
import { CgMouse } from 'react-icons/cg'
import "./Home.css"
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/productAction'



const Home = ({weatherDetails}) => {

  const {products} = useSelector(state=>state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  

  return (
    <>
    <MetaData title={`Modern Ecommerce`}/>
   
 <div className='con'>
       <Box
                        sx={{
                            display: 'flex',
                            width: 0,
                            alignItems:"center",
                        }}>
                        {/* <IconButton size='large'>
                            <SearchIcon color="tertiary" fontSize='inherit' />
                        </IconButton> */}
                        {weatherDetails &&
                            <Box display='flex' alignItems='center' justifyContent='center' sx={{ pr: { xs: 0, md: 2 } }}>

                                <img src={weatherDetails.icon} alt="" style={{
                                    width: '30%'
                                }} />
                                <Box display='flex' flexDirection='column ' >
                                    <Heading variant="body2" fontSize={"1rem"} color="tertiary" fontFamily="Roboto" fontWeight='bold'>
                                        {weatherDetails.temp}
                                    </Heading>
                                    <Heading fontSize={"1rem"} variant="body2" color="tertiary" fontFamily="Roboto" fontWeight='bold' >
                                        {weatherDetails.description}
                                    </Heading>
                                </Box>
                            </Box>
                        }             
                        </Box>
    </div>
    
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