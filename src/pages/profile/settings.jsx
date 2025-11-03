import React from 'react'
import avatar from '../../assets/png/avatar.png'

export const Settings = () => {
  return (
    <div className='w-[855px] rounded-sm shadow-[0_4px_4px_0_rgba(0,0,0,0.06)] p-8'>
      <h3 className='font-bold text-[30px]'>Созламалар</h3>
      <div className='flex mt-12 items-center gap-[22px]'>
        <div className='flex items-center gap-4'>
          <img src={avatar} alt="avatar" width={'70px'} />
          <p className='font-semibold text-primary_color'>Сурат юклаш</p>
        </div>
      </div>

      <div className='mt-8 w-[343px]' >
        <p className='font-medium mb-3'>Исмингиз</p>
        <input type="text"
          placeholder='Исмингиз'
          className='border border-[#EDEDED] py-3 w-full px-3 rounded-2xl'
        />
        <div className='mt-8 w-full py-3 bg-primary_color rounded-2xl'>
          <p className='text-center text-white'>Сақлаш</p>
        </div>
      </div>

    </div>
  )
}
