import React from 'react'

const Rating = (props) => {
    const {rating, name} = props

    return (
        <div>
            <div className='flex flex-col items-center gap-1'>
            <div className='bg-slate-800 w-[70px] h-[70px] text-xl flex justify-center items-center'>
                {rating}
            </div>
            <p className='w-[70px] text-center'>{name}</p>
        </div>
        </div>
    )
}

export default Rating