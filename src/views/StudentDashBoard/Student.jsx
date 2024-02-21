// import React from 'react'

function Student() {
  return (
    <>
     
    
    <div className="flex flex-col items-center justify-center bg-white mt-10 p-6 shadow-md rounded-lg w-auto h-auto">
      <textarea
        className="w-full h-32 px-4 py-2 text-right mb-4 text-base text-black transition duration-500 "
        placeholder="  ......اكتب رسالتك "
      />
      <button
        className="w-32 px-8 py-2 font-semibold text-white transition rounded-lg duration-500 ease-in-out transform bg-orange-500  hover:bg-orange-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
        type="submit"
      >
        إرسال
      </button>
    </div>


        </>
  )
}

export default Student