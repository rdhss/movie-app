import React, { useEffect, useState } from 'react'
import { useRoutes, useParams, useNavigate } from 'react-router-dom'
import Header from '../component/molecule/Header';
import SearchInput from '../component/atom/SearchInput';
import ContainerCard from '../component/molecule/ContainerCard';
import Rating from '../component/atom/Rating';
import Button from '../component/atom/Button';
import axiosInstance from '../axios/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { fethingDetail } from '../redux/action';

const Detail = () => {
    const [dataDetail, setDataDetail] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const detailMovie = useSelector((state) => state.detail)
    const { id } = useParams()

    useEffect(() => {
        dispatch(fethingDetail({ id: id }))
    }, [])

    return (
        <div className={`bg-black/95 ${detailMovie?.data?.length == 0 ? 'h-screen' : ''}`}>
            <Header />
            <section className='pt-32 px-10'>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <img src={detailMovie?.data?.Poster} alt='#' />
                    <div className='text-white'>
                        <h1 className='text-5xl font-semibold'>{detailMovie?.data?.Title}</h1>
                        <p className='py-3 text-xl font-thin text-white/90'>{detailMovie?.data?.Director}</p>
                        <div className='flex gap-10 text-slate-600'>
                            <p>{detailMovie?.data?.Released}</p>
                            <p>{detailMovie?.data?.Runtime}</p>
                            <p>{detailMovie?.data?.Rated}</p>
                        </div>
                        <div className='flex gap-10 text-xl mt-5'>
                            {detailMovie?.data?.Genre?.split(",").map(item =>
                                <p>{item}</p>
                            )}
                        </div>
                        <div className='grid grid-cols-3 gap-5 mt-7'>
                            {
                                detailMovie?.data?.Ratings?.length ?
                                    <>
                                        {[...detailMovie?.data?.Ratings, { Source: "IMDB", Value: detailMovie?.data?.imdbRating }].map(item =>
                                            <Rating rating={item.Value} name={item.Source} />
                                        )}
                                    </>
                                    :
                                    null
                            }
                        </div>
                        <div className='grid grid-cols-2 lg:flex gap-10 mt-10'>
                            {detailMovie?.data?.Country?.split(",").map(item =>
                                <p>{item}</p>
                            )}
                        </div>

                    </div>
                </div>


            </section>
            <section className="px-10 grid lg:grid-cols-2 grid-cols-1 gap-4 pb-10">
                <div className='mt-10'>
                    <div className='border-red-600 text-white text-3xl mb-10 border-0 !border-l-8 pl-5 '>
                        sinopsis
                    </div>
                    <p className='text-white'>{detailMovie?.data?.Plot}</p>
                </div>
                <div className='mt-10'>
                    <div className='border-red-600 text-white text-3xl mb-10 border-0 !border-l-8 pl-5 '>
                        Actor
                    </div>
                    <ul className="list-inside list-disc">
                        {detailMovie?.data?.Actors?.split(",").map(item =>
                            <li className='text-white'>{item}</li>
                        )}
                    </ul>
                </div>
            </section>
            <div className='flex justify-center pb-10'>
                <Button click={() => navigate('/')} />
            </div>
        </div>
    )
}

export default Detail