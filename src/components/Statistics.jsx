import React from 'react'

function Statistics() {
  return (
    <div>
        <h1 className='flex justify-end text-4xl mr-2'>الإحصائيات</h1>
        <div className="mt-8 flex flex-wrap justify-end space-x-0 space-y-2 md:space-x-4 md:space-y-0"> 
            <div className=" bg-white p-4 shadow rounded-lg md:w-1/4">
                <h2 className="text-gray-500 text-lg font-semibold pb-1">المتخرجون</h2>
                <div className="my-1"></div> 
                <div className="bg-orange-500 h-px mb-6"></div> 
                <h1 className='text-3xl'>43</h1>   
            </div>
            <div className=" bg-white p-4 shadow rounded-lg md:w-1/4 h-32">
                <h2 className="text-gray-500  text-lg font-semibold pb-1 ">  الطلاب الجدد</h2>
                <div className="my-1"></div>
                <div className="bg-orange-500 h-px mb-6"></div>
                <h1 className='text-3xl'>250</h1>
               
            </div>
            <div className=" bg-white p-4 shadow rounded-lg md:w-1/4">
                <h2 className="text-gray-500 text-lg font-semibold pb-1">الطلاب</h2>
                <div className="my-1"></div>
                <div className="bg-orange-500 h-px mb-6"></div>
                <h1 className='text-3xl'>2000</h1>
                
            </div>
        </div>
    </div>
  )
}

export default Statistics