import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
  return (
    <div className='bg-[#091b18] h-screen flex flex-col items-center justify-center'>
      <div className='flex items-center space-x-2 mb-10'>
        <h1 className='text-lg text-white font-bold'>Loading the Crypto Lottery</h1>
      </div>
      <PropagateLoader color='#ffffff' size={30} />
    </div>
  )
}

export default Loading