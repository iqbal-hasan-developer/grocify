import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling } from 'react-icons/fa'
import { FaShield } from 'react-icons/fa6'
import basket from '../../assets/basket-full-vegetables.png'

const Values = () => {


    const LeftValues = value.slice(0, 2).map(item => {
        return (
            <div className='flex md:flex-row-reverse items-center gap-7' key={item.id}>
                <div>
                    <span className='flex justify-center md:text-2xl lg:text-3xl text-3xl text-white items-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.description}</p>
                </div>
            </div>
        )
    })

    const RightValues = value.slice(2).map(item => {
        return (
            <div className='flex items-center gap-7' key={item.id}>
                <div>
                    <span className='flex justify-center text-3xl text-white items-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.description}</p>
                </div>
            </div>
        )
    })

  return (
    <section>
        <div className="max-w-350 mx-auto px-10 py-20">
            <Heading highlight="Our" heading="Values" />

            <div className="flex md:flex-row flex-col gap-15 md:gap-5 mt-15">
                {/* Left Values */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                    {LeftValues}
                </div>
                <div className="md:flex w-1/2 hidden">
                    <img src={basket} alt="" />
                </div>

                {/* Right Values */}
                <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                    {RightValues}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values


const value = [
    {
        id: 1,
        title: 'Trust',
        description: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart/>
    },
    {
        id: 2,
        title: 'Always Fresh',
        description: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf/>
    },
    {
        id: 3,
        title: 'Food Safety',
        description: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaShield/>
    },
    {
        id: 4,
        title: '100% Organic',
        description: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaSeedling/>
    }
]