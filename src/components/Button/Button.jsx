import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-b from-orange-400 to-orange-500 px-8 py-3 rounded-lg md:text-lg text-white hover:scale-105 cursor-pointer hover:to-orange-600 transition-all duration-300'>{props.content}</button>
  )
}

export default Button