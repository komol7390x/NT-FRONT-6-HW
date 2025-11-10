import React from 'react'
import { Button } from '../assets/icon/button'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { request } from '../config/request'

export const Register = () => {
  const { handleSubmit, register, reset } = useForm()
  const navigate = useNavigate()

  const submit = async (data) => {
    try {
      
      const res = await request.post('/register', data)
      console.log(111);
      console.log(data);
      
      if (res?.data?.accessToken) {
        Cookies.set('token', res.data.accessToken)
        navigate('/profile')
      }
      reset()
    } catch (error) {
      console.error('Login xatosi:', error.message)
    }
  }
  return (
    <div className='w-100 h-100 mx-auto items-center justify-center flex bg-amber-50 rounded-2xl p-8 mb-5'>
      <div className=''>
        <h2 className='text-center mb-3 uppercase mt-5'>Register</h2>
        <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-6'>
          {/* email */}
          <div className='' >
            <p className='text-gray-600'>Email</p>
            <input
              placeholder='example@gmail.com'
              class="border border-gray-300 focus:border-amber-300 focus:ring-2 focus:ring-blue-200 rounded-lg px-3 py-2 outline-none transition"
              {...register('email', { required: true })}
              type="email" />
          </div>

          {/* username */}
          <div className='' >
            <p className='text-gray-600'>Username</p>
            <input
              placeholder='@username-01'
              class="border border-gray-300 focus:border-amber-300 focus:ring-2 focus:ring-blue-200 rounded-lg px-3 py-2 outline-none transition"
              {...register('username', { required: true })}
              type="text" />
          </div>

          {/* password */}
          <div className='' >
            <p className='text-gray-600'>Password</p>
            <input
              placeholder='**********'
              class="border border-gray-300 focus:border-amber-300 focus:ring-2 focus:ring-blue-200 rounded-lg px-3 py-2 outline-none transition"
              {...register('password', { required: true })}
              type="password" />
          </div>

          <button type='submit'>
            <Button />
          </button>
        </form>
      </div>
    </div>
  )
}
