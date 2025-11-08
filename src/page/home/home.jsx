import React from 'react'
import { Banner } from './components/banner'
import { SearchIcon } from './components/search'

export const Home = () => {
  return (
    <div className='border mobile:border-green-500 tablet:border-yellow-500 pc:border-red-500'>
      <div className='relative mb-[62px]'>
        <Banner />
        <div className='absolute -mt-[30px] px-1 w-full'>
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}
