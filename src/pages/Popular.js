import React, { useState } from 'react'
import Header from '../component/molecule/Header'
import Card from '../component/atom/Card'
import SearchInput from '../component/atom/SearchInput'
import ContainerCard from '../component/molecule/ContainerCard'
import { useParams } from 'react-router-dom'
import most from './most.json'
import Button from '../component/atom/Button'


const Search = () => {
    const params = useParams()
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
            <section className='pt-32 px-10'>
                <SearchInput />
                <ContainerCard title="Popular Movie 2024" data={most} />
            </section>
            <div className='py-6 flex justify-center'>
                <Button />
            </div>
        </main>
    )
}

export default Search