import { Box, Heading, Text, VStack } from '@chakra-ui/layout'
import {Link} from 'react-router-dom'
import { Image} from '@chakra-ui/react'
import React from 'react'
import tshirt from "../../assets/ts.webp"

const ProductCard = ({product}) => {
  return (
    <Box>
        <VStack  alignItems={['center', 'flex-start']}>
            <Link to={`/product/${product._id}`}>
            <Image src={tshirt} alt=""  boxSize={'60'} objectFit={'contain'}/>
            <Heading children={product.name} />
            <Text>{product.description}</Text>
            <span>₹{product.price}</span>
            </Link>
            
        </VStack>
    </Box>
  )
}

export default ProductCard