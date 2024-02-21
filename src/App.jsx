// import { useState } from 'react'
import './App.css'
import HomePage from './views/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminDashBoard from './views/adminDashBoard/AdminDashBoard'
import Students from './views/adminDashBoard/Students'
import Requests from './views/adminDashBoard/Requests'
import Complaints from './views/adminDashBoard/Complaints'
import Renewal from './views/adminDashBoard/RenewalRequests'
import LogIn from './views/LogIn';
import StudentDashBoard from './views/StudentDashBoard/StudentDashboard'
import Student from './views/StudentDashBoard/Student'
import StopConstraint from './views/StudentDashBoard/StopConstraint'
import Affairs from './views/StudentDashBoard/Affairs'
import SignUp from './views/SignUp'
function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/adminDashBoard' element={<AdminDashBoard view={<Students />} />} />
          <Route path='/students' element={<AdminDashBoard view={<Students />} />} />
          <Route path='/registration-requqsts' element={<AdminDashBoard view={<Requests />} />} />
          <Route path='/Complaints' element={<AdminDashBoard view={<Complaints />} />} />
          <Route path='/Renewal-requests' element={<AdminDashBoard view={<Renewal />} />} />

          <Route path='/studentDashBoard' element={<StudentDashBoard view={<Student />} />} />
          <Route path='/student' element={<StudentDashBoard view={<Student />} />} />
          <Route path='/Renewal' element={<StudentDashBoard view={<Renewal />} />} />

          <Route path='/Stop-Constraint' element={<StudentDashBoard view={<StopConstraint />} />} />
          <Route path='/student-Affairs' element={<StudentDashBoard view={<Affairs />} />} />


        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
