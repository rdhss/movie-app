import React from 'react'
import test from './test.json'
import { useNavigate, useParams } from 'react-router-dom'

const Card = (props) => {
    const { id, name, year, type, image } = props
    const navigate = useNavigate()
    const params = useParams()

    return (
        <div onClick={() => navigate(`/detail/${id}`)} className='text-white flex justify-center cursor-pointer hover:text-blue-500 transition-all overflow-hidden flex-col items-center w-[120px] lg:w-[170px]'>
            <div className='rounded-3xl overflow-hidden relative'>
                <img src={image} alt='poster' width={200}/>
                <div className='bg-red-700 absolute text-white px-3 py-1 font-semibold top-0 left-0'>
                    {type}
                </div>
            </div>
            <div className='w-full flex flex-col mt-1'>
                <p className='text-lg font-medium text-ellipsis whitespace-nowrap overflow-hidden'>{name}</p>
                <p className='text-sm text-slate-400'>{year}</p>
            </div>

        </div>
    )
}

export default Card