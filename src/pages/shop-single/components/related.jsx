import React from 'react'
import { Link } from 'react-router-dom'
import { ProductCart } from '../../../components/product-cart'

export const Related = ({ data }) => {
    console.log(data);

    return (
        <div className='container'>
            <div className='pt-[150px] flex flex-col justify-center items-center'>
                <h3 className='text-[50px] font-font-1 font-extrabold'>Related Products</h3>
                <div className='flex justify-between gap-5'>
                    {data.map((item) => (
                        <Link to={`/product/${item.id}`}>
                            <ProductCart name={item.name} img={item.img} price={item.price}
                                key={item.id} type={item.type} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
