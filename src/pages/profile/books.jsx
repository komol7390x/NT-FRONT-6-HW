import React from 'react'
import { Link } from 'react-router-dom'

export const Books = () => {
  return (
    <div>
      <div className='w-[870px] border flex py-8 pl-8 gap-8 items-center'>
        <h3 className='font-bold text-[30px]'>Китобларим</h3>
        <div>
          <ul className='flex gap-7 items-baseline'>
            <li>
              <Link>Аудиокитоб</Link>
            </li>
            <li>
              <Link>Электрон китоб</Link>
            </li>
            <li>
              <Link>Босма китоб</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
