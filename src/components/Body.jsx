import React from 'react'
import Sidebar from './Sidebar'
import Wachpage from "./Wachpage"
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Outlet></Outlet>
     
    </div>
  )
}

export default Body
