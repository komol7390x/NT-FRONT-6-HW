import React from 'react'
import notFound from '../assets/gif/404.gif'

export const NotFound = () => {
    return (
        <div className='container'>
            <div className='w-full mx-auto flex justify-center items-center'>
                <img src={notFound} alt="404" className="w-[900px] h-[500px]" />
            </div>
        </div>
    )
}
