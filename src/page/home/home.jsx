import { Banner } from './components/banner'
import { CarList } from './components/car-list'
import { Search } from './components/search'
import { Slide } from './components/slide'

export const Home = () => {
  return (
    <div className='border mobile:border-green-500 tablet:border-yellow-500 pc:border-red-500 container'>
      <div className='relative mb-[62px]'>
        <Banner />
        <Slide />
        {/* search-icon */}
        <div className='absolute -mt-[30px] px-1 w-full'>
          <Search />
        </div>
        <CarList />
        
      </div>
    </div>
  )
}
