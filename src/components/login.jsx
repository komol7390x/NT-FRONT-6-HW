import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { request } from '../config/request'
import Cookies from 'js-cookie'
import { Button } from '../assets/icon/button'

export const Login = () => {
    const { handleSubmit, register, reset } = useForm()
    const navigate = useNavigate()

    const submit = async (data) => {
        try {
            const res = await request.post('/login', data)
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
                <h2 className='text-center mb-3 uppercase mt-5'>Login</h2>
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
