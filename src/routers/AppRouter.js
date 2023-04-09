import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Home from '../components/Home/Home'


const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="*" element={<Navigate to="/" />}/> */}
        </Routes>
    </Router>
  )
}

export default AppRouter