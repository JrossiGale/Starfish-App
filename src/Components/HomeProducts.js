import React from 'react'
import { ScrollView, Text, Pressable, Box, Heading, Image, Flex } from 'native-base'
import products from "../data/Products"
import  Colors  from '../color'
import Rating from './Rating'
import { useNavigation } from "@react-navigation/native"

function HomeProducts() {
  const navigation = useNavigation()
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Flex bg= {Colors.backgroundPurple} flexWrap="wrap" direction = "row" justifyContent="space-between" px={6}>
            {
                products.map((product)=> (
                    
                    <Pressable 
                    onPress ={()=> navigation.navigate("Single", product)}
                    key={product._id} 
                    w="47%" 
                    bg= {Colors.white} 
                    rounded="md" 
                    shadow={2} 
                    pt={0.3} 
                    my={3} 
                    pb = {3}
                    shadow={10}

                    overflow="hidden"
                    >
                        <Image 
                        source={{uri:product.image}}
                        alt={product.name} 
                        w="full" 
                        my={3}
                        
                        h={24} 
                        resizeMode="contain" />

                        <Box px={4} pt={1}>
                            <Heading size="sm" bold>${product.price}</Heading> 
                            <Text fontSize = {13} mt={1} isTruncated w="full">{product.name}</Text>
                            <Text fontSize = {10} mt={1} isTruncated w="full">{product.handle}</Text>
                            <Text fontSize = {7} mt={1} isTruncated w="full">{product.followers} Followers</Text>
                            <Rating value={product.rating}/>
                        </Box>
                    </Pressable>
                    
                    ))
            }


        </Flex>
    </ScrollView>
  )
}

export default HomeProducts