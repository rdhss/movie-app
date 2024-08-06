import React, { useState } from 'react'
import Header from '../component/molecule/Header'
import Card from '../component/atom/Card'
import SearchInput from '../component/atom/SearchInput'
import ContainerCard from '../component/molecule/ContainerCard'
import featured from './featured.json'

const Home = () => {
  const [coba] = useState([{
    Title: "You Are So Not Invited to My Bat Mitzvah",
    Year: "2023",
    imdbID: "tt21276878",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BZWQ3ZDQ3MTYtZWUyOS00YmFhLTllOWItNzNmNjE0ZDI5YWE5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg"
}])
  return (
    <main className='bg-black/95 '>
      <Header />
      <section className='py-32 px-10'>
        <SearchInput />
        <ContainerCard title="Featured" data={featured}/>
      </section>
    </main>
  )
}

export default Home