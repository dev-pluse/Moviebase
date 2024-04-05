'use client'
import { useEffect } from "react"


const error = ({error,reset}) => {
    useEffect(()=>{console.log(error)},[error])
  return (
    <div className=" text-center mt-16">
<h1>something went wrong  </h1>
<button className="h-52 hover:text-blue-600" onClick={()=>reset()}>Try again</button>

    </div>
  )
}

export default error