import React from 'react'
import { BestFood } from './components/best-food'
import { NaturalOffer } from './components/natural-offer'
import { AboutUs } from './components/about-us'
import { Category } from './components/category'
import { Testimonial } from './components/testimonial'
import { Offer } from './components/offer'
import { Eco } from './components/eco'
import { Organic } from './components/organic'
import { News } from './components/news'

export const Home = () => {
  return (
    <div className=''>
      <BestFood />

      <NaturalOffer />

      <AboutUs />

      <Category />

      <Testimonial />

      <Offer />

      <Eco />

      <Organic />

      <News />
    </div>
  )
}
