import { Button } from '../../../assets/icon/button'
import img from '../../../assets/img/banner-1.png'

export const BestFood = () => {
    return (
        <div className='relative'>
            <img src={img} alt="banner" className='mx-auto h-[898px]' />

            <div className='container'>
                <div className="absolute top-1/2 -translate-y-1/2">
                    <h3 className='text-[36px] text-primary-green-light font-third-family'>100% Natural Food</h3>
                    <h3 className='mt-4 text-[70px] font-extrabold w-[530px] leading-20'>Choose the best
                        healthier way
                        of life</h3>
                    <div className='mt-10 inline-block'>
                        <Button title='Explore Now' icon={true} bg='#EFD372' />
                    </div>
                </div>
            </div>
        </div>
    )
}
