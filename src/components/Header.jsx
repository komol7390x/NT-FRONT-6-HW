import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Logo } from '../assets/icon/logo';
import {Location} from './components/location'
import { Search } from './components/search';

const Header = () => {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <>
      <div className="container">

        {/* Location */}
        <div className='py-3' >
          <Location />
        </div>

        <div className='w-full h-0.5 text-black'></div>

        {/* Search */}
        <div>
          <Search/>
        </div>

        {/* Navi */}
        <div>

        </div>

      </div>
    </>
    // <div className=' bg-emerald-700'>
    //   <div className="container">
    //     <div className='p-5 flex justify-between'>
    //       <div onClick={handleLogoClick}>
    //         <Logo />
    //       </div>
    //       <div className='flex gap-10'>
    //         <NavLink className={"active:text-red-600"} to="/">Home</NavLink>
    //         <NavLink className={"active:text-red-600"} to="/about">About</NavLink>
    //         <NavLink className={"active:text-red-600"} to="/blog">Blog</NavLink>
    //         <NavLink className={"active:text-red-600"} to="/news">News</NavLink>
    //       </div>
    //     </div>

    //   </div>
    // </div>
  )
}

export default Header
