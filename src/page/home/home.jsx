import React from 'react'
import { Banner } from './components/banner'
import { SearchIcon } from './components/search'

export const Home = () => {
  return (
    <div className='container border mobile:border-green-500 tablet:border-yellow-500 pc:border-red-500'>
      <div className='relative mb-[62px]'>
        <Banner />
        <div className='absolute container -mt-[30px] flex justify-center items-center'>
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}
