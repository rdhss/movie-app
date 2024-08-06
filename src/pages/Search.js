import React, { useEffect, useState } from 'react'
import Header from '../component/molecule/Header'
import Card from '../component/atom/Card'
import SearchInput from '../component/atom/SearchInput'
import ContainerCard from '../component/molecule/ContainerCard'
import { useParams } from 'react-router-dom'
import axiosInstance from '../axios/axiosInstance'
import ReactPaginate from 'react-paginate';
import { Pagination } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fethingSearching } from '../redux/action'

const Search = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const [dataSearch, setDataSearch] = useState([])
  const [totalSearch, setTotalSearch] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const data_search = useSelector((state) => state.searching)

  useEffect(() => {
    dispatch(fethingSearching({ name: params.name, page: currentPage }))
  }, [])

  useEffect(() => {
    dispatch(fethingSearching({ name: params.name, page: currentPage }))
  }, [currentPage])

  return (
    <main className={`bg-black/95 ${data_search?.data.Search?.length > 0 ? '' : 'h-screen'}`}>
      <Header />
      <section className='pt-32 px-10'>
        <SearchInput />
        <ContainerCard title={`result for "${params.name}"`} data={data_search?.data.Search} loading={data_search?.loading} />
        <p className='text-white'>
        </p>
        {data_search?.error &&
          <div className='flex justify-center'>
            <h1 className='text-white text-4xl'>There is no movie with "{params.name}". try new search </h1>
          </div>
        }
        <div className='py-7'>
          <div className='w-full flex justify-center'>
            <Pagination
              onChange={(event, value) => setCurrentPage(value)
              }
              count={Math.ceil(data_search?.data?.totalResults / 10)}
              color='secondary'
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Search