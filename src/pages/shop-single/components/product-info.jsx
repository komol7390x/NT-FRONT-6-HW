import React from 'react'
import { Stars } from '../../../assets/icon/stars'
import { Button } from '../../../assets/icon/button'

export const ProductInfo = ({ data }) => {
    const [count, setCount] = React.useState(1)

    return (
        <div className='container py-[130px]'>
            <div className='flex gap-[88px] justify-center'>

                <div className='border border-[#f1ebeb] rounded-4xl shadow-xl relative'>
                    <img src={data.img} alt={data.name} className='w-[591px] h-[563px] rounded-4xl' />
                    <div className='absolute left-0 top-0 pt-10 pl-10'>
                        <p className='bg-primary-green-dark text-white py-2 px-10 rounded-[10px]'>{data.type}</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center w-[658px] gap-3'>
                    <h3 className='text-[40px] font-font-1 font-semibold'>{data.name}</h3>
                    <Stars />
                    <div className="flex gap-4 font-font-1 text-[22px]">
                        <p className="text-[#b8b8b8] line-through">${data.price}</p>
                        <p className="text-primary-green-dark font-bold">${(data.price * 0.7).toFixed(1)}</p>
                    </div>
                    <p className='mt-5'>Simply dummy text of the printing and typesetting industry.
                        Lorem had ceased to been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley.</p>

                    <div className='flex mt-8 gap-5'>
                        <h3 className='text-[20px] font-bold pt-4'>Quantity :</h3>
                        <div className='w-[260px]'>
                            <div className='grid grid-cols-3 gap-4 w-full  text-[22px]'>
                                <p
                                    onClick={() => count > 1 ? setCount(count - 1) : ''}
                                    className='border transform transition-transform duration-300 active:scale-80
                                     hover:shadow-xl py-4 px-7 rounded-[15px] text-white bg-primary-green-dark cursor-pointer'>-</p>
                                <p className='border py-4 px-7 rounded-[15px]'>{count}</p>
                                <p
                                    onClick={() => count <= 100 ? setCount(count + 1) : ''}
                                    className='border py-4 px-7 rounded-[15px] text-white bg-primary-green-dark 
                                     transform hover:shadow-xl transition-transform duration-300 active:scale-80 hover:shadow-x'>+</p>
                            </div>
                            <div className='text-[22px] mt-4 flex justify-center'>
                                <Button title='Add to Cart' icon={true} bg='#274C5B' textColor='white' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
