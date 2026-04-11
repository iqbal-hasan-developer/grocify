import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section>
        <div className="max-w-350 md:min-h-200 min-h-screen mx-auto px-10 flex md:flex-row flex-col items-center md:pt-20 lg:pt-20 pt-35">
            {/* Hero content */}
            <div className='flex-1'>
                <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
                <h1 className='lg:text-7xl/20 text-5xl/14 font-bold mt-4'>
                    Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span><br /> In Your City
                </h1>
                <p className='text-zinc-600 text-lg max-w-132.5 mt-5 mb-6 md:mb-10'>
                Bred for a high content of beneficial substances. Our products are all fresh and healthy.
                </p>
                <Link to="allproducts"className='bg-gradient-to-b from-orange-400 to-orange-500 px-8 py-3 rounded-lg md:text-lg text-white hover:scale-105 cursor-pointer hover:to-orange-600 transition-all duration-300'>
                Shop Now
                </Link>
            </div>
            {/* hero image */}
            <div className='flex-1'>
                <img src={Grocery} alt="Hero image" />
            </div>
        </div>
    </section>
  )
}

export default Hero