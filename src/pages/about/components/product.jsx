import React from 'react'
import { productData } from '../../../data/product-data'

export const Product = () => {
    return (
        <div className='bg-[#274C5B]'>
            <div className='container'>
                <div className='flex flex-col items-center justify-center py-[188px]'>
                    <h3 className='text-primary-green-light font-third-family text-[36px]'>About Us</h3>
                    <h2 className='text-[50px] font-font-1 text-white font-extrabold'>What We Offer for You</h2>
                    <div className='flex justify-between w-full mt-8'>
                        {productData.slice(9, 13).map((item) => (
                            <div className='flex flex-col items-center gap-5'>
                                <img src={item.img} alt={item.name} className='w-[334px] h-[314px] rounded-3xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl' />
                                <p className='text-white font-font-1 text-[22px]'>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
