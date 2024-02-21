import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Heading, Text, IconButton, Avatar, Image, Button } from "@chakra-ui/react";
import {BiShare } from "react-icons/bi";



const Complaints = () => (
  
<>
<div className="mt-8 bg-white  p-4 shadow rounded-lg"> 
            
            <div className='flex flex-row justify-center bg-orange-500 p-2 mr-56 ml-56 rounded-full '>
            <h2 className="text-white text-lg font-bold p-2 "> الشكاوى والاقتراحات</h2>
            </div>
            <div className="my-1"></div> 
            <div className="bg-orange-500 h-px mb-6"></div>

            <div className='flex justify-between items-center gap-6'>

            <Card maxW='md'className='w-96' >
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://via.placeholder.com/30' />

        <Box>
          <Heading size='sm'>Name</Heading>
          <Text>xxxxx@gmail.com</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quam dolore tempora, minus tenetur et impedit obcaecati eos fuga debitis eveniet consequuntur perspiciatis, delectus sunt velit repudiandae laborum sed enim!
    </Text>
  </CardBody>
 

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    
    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
      الرد
    </Button>
  </CardFooter>
</Card>

</div>
           


</div>  




   
</>
)

export default Complaints;
