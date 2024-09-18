import React from 'react'
import prime from '../assets/Prime.jpg'
const Home = () => {
  return (
    <div >
        <div className='relative w-full h-auto '>
        <img  src={prime} alt="background" />
        <div className='absolute top-[30%] text-white flex-col right-[70%]'>
            <h1 className='text-5xl font-[Poppins] font-bold text-green-400 hover:text-white duration-200 cursor-pointer'>DRINK PRIME</h1>
            <p className='mt-5 hidden md:flex'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Necessitatibus iste quam at enim dolorem odit maxime,<br />numquam eveniet exercitationem dicta.</p>
            <button className='bg-gradient-to-r from-white to black py-2 px-5 mt-5 hover:bg-gray-500 duration-200 ease-in-out text-black font-semibold uppercase'>Join the Hunt</button>
        </div>
        </div>
      
    </div>
  )
}

export default Home