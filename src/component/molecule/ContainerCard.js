import React from 'react'
import Card from '../atom/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const ContainerCard = (props) => {
    const { title, data, loading } = props
    return (
        <>
            <div className='border-red-600 text-white text-3xl mb-10 border-0 !border-l-8 pl-5 '>
                {title == "Popular Movie 2024" ?
                    <div className='flex gap-5 items-end'>
                        <p>{title}</p>
                        <a href='https://www.imdb.com/search/title/?title_type=feature&release_date=2024-01-01,2024-12-31' className='text-xs underline' target="_blank">IMDB reference</a>
                    </div>
                    :
                    title
                }
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-10 place-items-center">
                {
                    loading ?
                <div className='p-6 bg-black rounded-xl absolute z-30'>
                    <FontAwesomeIcon icon={faSpinner} className='text-red-500 text-4xl animate-spin'/>
                </div>
                :
                null
                }
                {data?.map(item =>
                    <Card id={item.imdbID} name={item.Title} year={item.Year} image={item.Poster} type={item.Type} />
                )}
            </div>
        </>
    )
}

export default ContainerCard