import React from 'react'
import { Button } from '../../../assets/icon/button'
import { productData } from '../../../data/product-data'
import { Link } from 'react-router-dom'
import { ProductCart } from '../../../components/product-cart'

export const Offer = () => {
    return (
        <div className='bg-[#274C5B]'>
            <div className='container py-[200px]'>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <p className='text-primary-green-light font-third-family text-[36px]'>Offer</p>
                        <h3 className='text-[50px] font-bold text-white'>We Offer Organic For You</h3>
                    </div>
                    <Button title='View All Product' icon={true} bg='#EFD372' />
                </div>

                <div className='flex items-center justify-between'>
                    {productData.slice(12, 16).map((item) => (
                        <Link to={`product/${item.id}`}>
                            <ProductCart key={item.id} name={item.name} type={item.type} img={item.img} price={item.price} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
