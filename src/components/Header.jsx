import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto p-5'>
                <div className='flex gap-4'>
                  <MenuItem title='Home' path='/' Icon={AiFillHome}/>
                  <MenuItem title='About' path='/about' Icon={BsFillInfoCircleFill}/>


                </div>
                <div className='flex gap-1 items-center'>
                         <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'><a href='/'>Movie  </a> </span>
                         <span className='text-xl hidden sm:inline'> <a href='/'>Base  </a></span>

                </div>

    </div>
  )
}

export default Header 