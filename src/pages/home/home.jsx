import React from 'react'
import { BestFood } from './components/best-food'
import { NaturalOffer } from './components/natural-offer'
import { AboutUs } from './components/about-us'
import { Category } from './components/category'
import { Testimonial } from './components/testimonial'

export const Home = () => {
  return (
    <div className=''>
      <BestFood />

      <NaturalOffer />

      <AboutUs />

      <Category />

      <Testimonial />
    </div>
  )
}
