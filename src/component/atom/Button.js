import React from 'react'

const Button = (props) => {
    const { click } = props
    return (
        <button onClick={click} className='p-3 transition-all text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white'>Back To Home</button>
    )
}

export default Button