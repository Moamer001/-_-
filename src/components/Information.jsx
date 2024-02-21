// import React from 'react'

function information() {
  return (
    <>
  

  <div className="bg-white rounded-lg p-6 shadow-lg sm:p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col justify-end items-end">

    <h1 className="font-bold  text-2xl ">
        بياناتك
    </h1>
    <div className=" grid grid-cols-2 justify-center items-center gap-40 text-right mt-6 mr-10">
    <div className="grid  justify-center items-center gap-10 text-xl ">
    <p> *******:رقم القيد</p>
    <p> مرات إيقاف القيد: 1</p>
    </div>
    <div className="grid  justify-center items-center gap-10 text-xl">
    <p>الفصل الدراسي: الخامس</p>
    <p>حالتك: مقيد</p>
    </div>
    </div>
     
    </div>
    </>
  )
}

export default information