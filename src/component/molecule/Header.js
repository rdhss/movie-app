import React from 'react'
import SearchInput from '../atom/SearchInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

    return (
        <header className='h-[80px] bg-black/95 overflow-hidden w-screen flex items-center justify-between fixed z-30 shadow-xl'>
            <nav className='flex'>
                <h1 className='text-2xl text-red-500 font-bold bg-slate-400/15 p-4 py-8 cursor-pointer' onClick={() => navigate('/')}>THE MOVIES</h1>
            </nav>
            <div className='pr-8 flex items-center'>
                <nav className='text-white flex lg:items-center pl-10 font-bold lg:pr-10'>
                    <div className='cursor-pointer flex items-center gap-2 lg:items-start  hover:text-blue-600 transition-all'>
                        <FontAwesomeIcon icon={faFilm} size='xl' />
                        <p className="lg:pl-4" onClick={() => navigate('/popular')}>
                            POPULAR MOVIE 2024
                        </p>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header