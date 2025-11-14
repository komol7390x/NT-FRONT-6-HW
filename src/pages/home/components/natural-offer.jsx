import natural from '../../../assets/img/natural.png'
import offer from '../../../assets/img/offer.png'

export const NaturalOffer = () => {
  return (
    <div className='flex container gap-10 justify-center my-[180px]'>
      
      {/* left */}
      <div className='relative text-white'>
        <img src={natural} alt="natural" className='rounded-3xl' />
        <div className='absolute top-1/2 -translate-y-1/2 pl-[60px]'>
          <h3 className='font-third-family text-[36px]'>Natural!!!</h3>
          <p className='text-[40px] font-extrabold w-[270px] leading-12'>Get Garden Fresh Fruits</p>
        </div>
      </div>

      {/* right */}
      <div className='relative'>
        <img src={offer} alt="offer" className='rounded-3xl' />
        <div className='absolute top-1/2 -translate-y-1/2 pl-[60px]'>
          <h3 className='font-third-family text-[36px] text-primary-green-light'>Offer!!!</h3>
          <p className='text-[40px] font-extrabold w-[270px] leading-12'>Get Garden Fresh Fruits</p>
        </div>
      </div>

    </div>
  )
}
