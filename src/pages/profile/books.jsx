import { Link } from 'react-router-dom'
import { audioBookData } from '../home/data/audioBook'
import { BooksInfo } from './components/books-info'

export const Books = () => {
  return (
    <div>

      {/* books category */}
      <div className='w-[870px] flex py-8 pl-8 gap-8 items-center'>
        <h3 className='font-bold text-[30px]'>Китобларим</h3>
        <div>
          <ul className='flex gap-7 items-baseline'>
            <li>
              <Link to={'audio-book'}>Аудиокитоб</Link>
            </li>
            <li>
              <Link to={'e-book'} >Электрон китоб</Link>
            </li>
            <li>
              <Link to={'print-book'}>Босма китоб</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* books */}
      <div className='mt-6'>
        {audioBookData.map((item) => {
          return (
            <div className='p-6'>
              <BooksInfo title={item.title} img={item.img} ganre={item.ganre} coments={item.comment}
                rating={item.rating} desc={item.desc} author={item.author} publisher={item.publisher}
                year={item.year} />
            </div>
          )
        })}
      </div>
    </div>
  )
}