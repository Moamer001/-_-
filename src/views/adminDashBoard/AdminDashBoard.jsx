import React from 'react'
import SideBar from '../../components/SideBar'
import NavBar from '../../components/NavBar'
import Statistics from '../../components/Statistics'



const AdminDashBoard = (props) => {
  return (
    <>
   
<div className="flex flex-col h-screen">
    <NavBar/>

<div className="flex-1 flex flex-wrap">
    
    <SideBar/>
    <div className="flex-1 p-4 w-full md:w-1/2">
    <Statistics/>
        
        {props.view}
    </div>
</div> 
</div>
      
    </>
  )
}

export default AdminDashBoard

