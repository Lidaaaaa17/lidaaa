import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[70px] bg-black text-white flex justify-around px-10 hover:bg-white hover:text-black duration-200 ease-in-out'>
      <h1 className='text-5xl font-bold text-green-400 hover:text-black duration-200 ease-in-out mt-2 font-[Poppins] cursor-pointer'>PRIME</h1>
      <div className='flex-row items-center justify-center gap-6  hidden md:flex font-[Poppins]'>
      <Link className=' hover:text-green-400 duration-200 ease-out uppercase ' to='/'>Home</Link>
          <Link className=' hover:text-green-400 duration-200 ease-out uppercase' to='/Shop'>Products</Link>
          <Link className=' hover:text-green-400 duration-200 ease-out uppercase' to='/About'>About Prime</Link>
        <Link className='mt-1 hover:text-green-400 duration-200 ease-out' to='/Cart'><i class="fa-solid fa-cart-shopping"></i></Link>
       </div>
    </div>
  )
}

export default Navbar