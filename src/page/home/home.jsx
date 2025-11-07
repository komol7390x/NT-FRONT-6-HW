import React from 'react'
import { Banner } from './components/banner'

export const Home = () => {
  return (
    <div className='container border mobile:border-green-500 tablet:border-yellow-500 pc:border-red-500'>
      <Banner />
    </div>
  )
}
