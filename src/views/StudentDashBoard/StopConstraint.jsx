// import React from 'react'

function StopConstraint() {
  return (
    <>
        <div className="flex flex-col gap-10 items-center justify-center bg-white mt-10 p-6 shadow-lg sm:p-8 md:p-10 lg:p-12 xl:p-14  rounded-lg w-auto h-auto">
        <textarea
  className="w-96 text-right px-4 py-2 mb-4 border-2 border-orange-500 rounded-lg focus:outline-none focus:border-orange-600"
  placeholder="سببك لإيقاف القيد"
/>


      <div className="w-96 text-center">
        <p> سيتم النظر في طلبك والرد عليك في أقرب وقت</p>
      </div>
      
        <div className="flex items-center justify-center ">
      <input 
        type="input" 
        placeholder=" رقم القيد" 
        className="px-4 py-2 border-2 border-orange-500 rounded-full text-center text-gray-700 focus:outline-none focus:border-orange-600"/>
       </div>
      <button
        className="w-38 px-8 py-2 font-semibold text-white transition rounded-lg duration-500  transform bg-orange-500  hover:bg-orange-600 "
        type="submit"
      >
         إيقاف القيد
      </button>
    </div>





    
    
    </>
   


        
   
  )
}

export default StopConstraint