import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Root = () => {
  return (
    <div>
        <Navbar />
        <div className='content'>
            <Outlet />
        </div>
    </div>
  )

}

export default Root