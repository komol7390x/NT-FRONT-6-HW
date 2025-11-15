import React from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../../data/product-data'
import shopSingle from '../../assets/img/product-banner.png'
import { ProductInfo } from './components/product-info'

export const ShopSingle = () => {
  const { slug } = useParams()
  const data = productData.find((item) => item.id == slug)

  return (
    <div >
      <div className='w-[1920px] mx-auto'>
        <img src={shopSingle} alt="shop single" />
      </div>
      <ProductInfo data={data} />
    </div>
  )
}
