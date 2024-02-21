// import React from 'react'
import { Link } from 'react-router-dom' 


function sideBar() {
  return (
    <>
    <div>
        <div className="p-2 bg-orange-500 w-full md:w-60  flex-col h-full  " id="sideNav">
        <nav>
            <Link to="/student">
            <button className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-orange-700 w-full  " >
            الصفحة الرئيسية
            </button>
            </Link>
            
            
                <Link to="/renewal"> 
            <button className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-orange-700  w-full  " >
                تجديد القيد
            </button>
            </Link>
            
            <Link to="/stop-Constraint">
            <button className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-orange-700  w-full  " >
              إيقاف القيد
            </button>
            </Link>
            
            
                <Link to="/student-Affairs">
            <button className="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-orange-700 w-full  " >
            <p>شؤون الطلبة</p>
                  
                </button>
                    </Link>
               
              
        </nav>
        <div className="bg-white h-px mt-2"></div>
        
        

        </div>
        

    </div>
    </>
  )
}

export default sideBar
