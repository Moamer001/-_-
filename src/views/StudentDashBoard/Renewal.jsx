// import React from 'react'
import { Checkbox, Stack } from "@chakra-ui/react";

function Renewal () {
  return (
    <>
    <div className="flex flex-col gap-10 items-center justify-center bg-white mt-10 p-6 shadow-lg sm:p-8 md:p-10 lg:p-12 xl:p-14  rounded-lg w-auto h-auto">
      <div className="w-96 text-center">
        <p>سوف يتم تجديد قيدك للفصل الدراسي خريف 2023-2024 وستصبح مقيدًا في فصلك الدراسي السادس</p>
      </div>
      <Stack spacing={5} direction='row'>
  
       <Checkbox colorScheme='green' defaultChecked>
       أوافق
        </Checkbox>
        </Stack>
        <div className="flex items-center justify-center ">
      <input 
        type="input" 
        placeholder=" رقم القيد" 
        className="px-4 py-2 border-2 border-orange-500 rounded-full text-center text-gray-700 focus:outline-none focus:border-orange-700"/>
       </div>
      <button
        className="w-38 px-8 py-2 font-semibold text-white transition rounded-lg duration-500  transform bg-orange-500  hover:bg-orange-600 "
        type="submit"
      >
        تجديد القيد
      </button>
    </div>


    </>
  )
}

export default Renewal 