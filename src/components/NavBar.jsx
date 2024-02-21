// import React from 'react'
import image from '../assets/collegeLogo.png'

function NavBar() {
  return (
    <div>
        <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between border-b-2  border-orange-500 ">
    
    <div className="flex items-center "> 
        <img src={image} alt="logo" className="w-20 h-20 ml-4"/>
        </div>

<div className='flex justify-center items-center mr-5'>
  <div className='text-black '>
    <p className="mb-2">admin@user</p>
    <p>admin@gmail.com</p>
    

  </div>
  <div className=" border-2 border-orange-500 rounded-full"><img src="https://via.placeholder.com/30" alt="Foto Perfil" className="rounded-full h-12 w-12 "/></div>
  </div>
  
</div>


    </div>
  )
}

export default NavBar