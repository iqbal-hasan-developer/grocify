import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled, TbTruckDelivery } from "react-icons/tb";
import { PiFactory, PiPlantLight } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";

const Process = () => {

    const renderSteps = steps.map(item => {
        return (
            <div className={`flex-1 basis-75 ${item.id % 2 === 0 ? 'md:-mt-100 mt-10' : 'mt-10'}`} key={item.id}>
                <span className='flex justify-center items-center w-18 h-18 text-8xl rounded-full bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed mx-auto'>{item.number}</span>

                <div className="flex items-center gap-x-5 mt-10">
                        <span className='flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full'>{item.icon}</span>
                    

                    <div className="flex-1">
                        <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
                        <p className='text-zinc-600 mt-2'>{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })

  return (
    <section>
        <div className="max-w-350 mx-auto px-10 py-20">
            <div className="mr-auto w-fit">
            <Heading highlight="Our" heading="Process" />
            </div>

            <div className="flex flex-wrap md:mt-20 mt-10 md:pt-50 items-center justify-center">
                {renderSteps}
            </div>
        </div>
    </section>
  )
}

export default Process


const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: "Sourcing",
        para: "Fresh produce sourced directly from local farmers",
        icon: <PiPlantLight />
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: "Manufacturing",
        para: "State-of-the-art facilities ensuring quality and safety",
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: "Quality Control",
        para: "Rigorous testing and inspection for premium products",
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: "Logistics",
        para: "Efficient delivery network for fast and reliable service",
        icon: <TbTruckDelivery />
    },

]