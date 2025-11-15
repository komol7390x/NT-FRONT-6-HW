import React from 'react'
import { Banner } from './components/banner'
import { AboutUs } from './components/about-us'
import { ChooseUs } from './components/choose-us'
import { Team } from './components/team'
import { Product } from './components/product'

export const About = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <ChooseUs />
      <Team />
      <Product />
    </div>
  )
}
