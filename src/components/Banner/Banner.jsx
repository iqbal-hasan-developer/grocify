import React from 'react'

const Banner = ({title, bgImage}) => {
  return (
    <div className='bg-zinc-400 h-[50vh] mt-25 flex justify-center items-center relative' style={{backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <h2 className='text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10'>{title}</h2>
        <div className="bg-black/35 absolute inset-0"></div>
    </div>
  )
}

export default Banner