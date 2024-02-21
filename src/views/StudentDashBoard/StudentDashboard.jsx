// import React from 'react'
import StudentSideBar from '../../components/StudentSideBar'
import NavBar from '../../components/NavBar'
import Information from '../../components/Information'



const studentDashBoard = (props) => {
  return (
    <>
   
<div className="flex flex-col h-screen">
    <NavBar/>

<div className="flex-1 flex flex-wrap">
    
    <StudentSideBar/>
    <div className="flex-1 p-4 w-full md:w-1/2">
    <Information/>
        
        {props.view}
    </div>
</div> 
</div>
      
    </>
  )
}

export default studentDashBoard

