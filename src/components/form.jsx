import React from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from '../context/app-context/app-context'
import { nanoid } from 'nanoid'

export const Form = () => {
    const { handleSubmit, reset, register } = useForm()
    const { dispatch } = React.useContext(AppContext)

    const submit = (data) => {
        dispatch({ type: 'CREATE_USER', value: { ...data, id: nanoid() } })
        reset()
    }
    return (
        <form className='flex' onSubmit={handleSubmit(submit)}>
            <input type="text" className='bg-green-300 w-full text-2xl' {...register('username')} />
            <button className='p-3.5 bg-yellow-300 cursor-pointer' type='submit'>send</button>
        </form>
    )
}
