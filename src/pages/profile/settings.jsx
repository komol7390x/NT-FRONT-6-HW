import React from 'react'
import avatar from '../../assets/png/avatar.png'

export const Settings = () => {
  return (
    <div className='border w-[855px] rounded-sm shadow-[0_4px_4px_0_rgba(0,0,0,0.06)] p-8'>
      <h3 className='font-bold text-[30px]'>Созламалар</h3>
      <div className='flex mt-12 items-center gap-[22px]'>
        <div className=''>

        </div>
        <img src={avatar} alt="avatar" width={'70px'} />
        <p className='font-medium text-primary_color'>Сурат юклаш</p>
      </div>
    </div>
  )
}
