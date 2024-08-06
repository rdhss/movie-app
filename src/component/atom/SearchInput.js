import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
  const [searchName, setSearchName] = useState('')
  const navigate = useNavigate() 

  const onSearch = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      // Do something
      navigate(`/search/${e.target.value}`)
      navigate(0)
  } 
  }

  return (
    <div className='relative w-full my-10'>
      <input 
      onChange={(e) => setSearchName(e.target.value)}
      onKeyUp={onSearch}
      className='
      w-full
      bg-black
      text-slate-100 
      py-3 px-5 
      rounded-md
      outline-none
      ' 
      placeholder='Search Here...'
      />
      <FontAwesomeIcon onClick={() => {navigate(0); navigate(`/search/${searchName}`); window.location.reload()}}  className='text-slate-100 absolute right-10 top-3' icon={faSearch} size='xl' />
    </div>
  )
}

export default SearchInput