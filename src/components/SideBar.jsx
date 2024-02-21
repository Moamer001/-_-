// import React from 'react'
import { Link } from 'react-router-dom' 
import {  Switch, Stack } from "@chakra-ui/react";

function sideBar() {
  return (
    <>
    <div>
        <div className="p-2 bg-orange-500 w-full md:w-60  flex-col h-full  " id="sideNav">
        <nav>
            <Link to="/students">
            <button className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-orange-700 w-full  " >
              الطلبة
            </button>
            </Link>
            
            
                <Link to="/registration-requqsts">
                <button className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-orange-700  w-full  " >
                      طلبات التسجيل
                </button>
                   </Link>
          
            <Link to="/Renewal-requests">  
            <button className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-orange-700  w-full  " >
            طلبات إيقاف القيد
            </button>
              </Link>
            
                <Link to="/Complaints"> 
            <button className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-orange-700 w-full  " >
الشكاوى والاقتراحات
            </button>

                </Link>
           
        </nav>
        <div className="bg-white h-px mt-2"></div>
        <div className='"block text-center text-white py-2.5 px-4 my-4 rounded transition duration-200  w-full  "'>
        <h1 className='mb-3 font-extrabold text-3xl '>السماح بالطلبات</h1>
        <Stack className='flex justify-center items-center' direction='row'>
        <Switch colorScheme='teal' size='lg' />
        </Stack>
        </div>

        </div>
        

    </div>
    </>
  )
}

export default sideBar
