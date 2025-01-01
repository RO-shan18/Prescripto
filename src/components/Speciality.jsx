import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div className='flex flex-col items-center mt-20 gap-16 w-4/5 m-auto' id="speciality">
       <div className='flex flex-col items-center gap-3'>
         <h1 className='text-3xl font-semibold'>Find by Speciality </h1>
         <p className='text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        </div>

         <div className='flex gap-6'>
            {
                specialityData.map((data, index)=>{
                    return (
                    <Link to={"/Doctor/" + data.speciality} className="flex flex-col items-center gap-3 hover:translate-y-[-10px] transition-all duration-500" key={index}>
                        <img className="w-32" src={data.image}/>
                        <p className='text-sm'>{data.speciality}</p>
                    </Link>
                    )
                })
            }
         </div>
    </div>
  )
}

export default Speciality