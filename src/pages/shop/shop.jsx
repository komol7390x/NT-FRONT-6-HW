import React from 'react'
import { productData } from '../../data/product-data'
import { Link } from 'react-router-dom'
import { ProductCart } from '../../components/product-cart'
import shop from '../../assets/img/shop-banner.png'

export const Shop = () => {
  return (
    <div className='bg-[#f9f8f8]'>
      <div className='w-[1920px] h-[450px] mx-auto'>
        <img src={shop} alt="shop" />
      </div>
      <div className='container py-[120px]'>
        <div className='flex flex-wrap gap-5 justify-between'>
          {productData.slice(0, 12).map((item) => (
            <div className='bg-white]'>
              <Link to={`/product/${item.id}`}>
                <ProductCart name={item.name} img={item.img} price={item.price} type={item.type} key={item.id} bg='#fff'/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
