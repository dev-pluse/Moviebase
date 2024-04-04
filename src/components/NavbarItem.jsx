'use client'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const NavbarItem = ({title,param}) => {
    const searchParams=useSearchParams()
    const genre=searchParams.get("genre")
  return (
    <div className=''>
        <Link className={genre===param?"underline underline-offset-8 decoration-slate-600 rounded-lg":""} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default NavbarItem 