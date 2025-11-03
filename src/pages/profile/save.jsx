import { Link } from "react-router-dom"
import { audioBookData } from "../home/data/audioBook"
import { LookLikeBook } from "../pruduct-detail/components/look-like-book"

const books = audioBookData.filter((_, index) => index < 4)
export const Save = () => {
  return (
    <div className='w-[870px] rounded-sm shadow-[0_4px_4px_0_rgba(0,0,0,0.06)] p-8 '>
      <h3 className='font-bold text-[30px] '>Сақланганлар</h3>
      <div className="grid grid-cols-2 mt-3">
        {books && (
          books.map((item) => (
            <div className="mt-8 relative">
              <LookLikeBook title={item.title} img={item.img} ganre={item.ganre} comment={item.comment} star={item.star} />
              <Link to={'delete'}>
                <h2 className="absolute translate-x-[230%] -mt-14 text-[#FF754C] font-bold">Ўчириш</h2>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
