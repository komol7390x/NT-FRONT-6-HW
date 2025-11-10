import React from 'react'
import { Login } from '../components/login'
import { Register } from '../components/register'

export const Auth = () => {
    const [toggle, setToggle] = React.useState(true)

    return (
        <div>
            <div className='bg-cyan-100 p-5'>
                {toggle ? <Login /> : <Register />}
                <button
                    className='w-25px flex mx-auto rounded-full py-3 px-5 text-white hover:bg-blue-300 bg-amber-300'
                    onClick={() => setToggle(!toggle)}>CHANGE</button>
            </div>
        </div>
    )
}
