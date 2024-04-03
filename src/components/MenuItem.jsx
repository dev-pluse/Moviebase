import React from 'react'
import Link from 'next/link'
const MenuItem = ({title,path,Icon}) => {
  return (
    <div>
        <Link href={path}>
           <Icon className='sm:hidden text-2xl hover:text-amber-500'/>      
          <h3 className='hidden sm:inline-flex uppercase text-sm'> {title} </h3> 
        </Link>
    </div>
  )
}

export default MenuItem