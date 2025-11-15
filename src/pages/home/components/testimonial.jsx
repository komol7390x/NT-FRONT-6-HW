import { Stars } from '../../../assets/icon/stars'
import bg from '../../../assets/img/testimonial.png'
import girl from '../../../assets/svg/gitl-testimonial.svg'

export const Testimonial = () => {
    return (
        <div className='max-w-[1920px] mx-auto mt-50 relative'>
            <img src={bg} alt="bg" />
            <div className="absolute container flex flex-col justify-between items-center text-center py-20 top-0 left-1/2 transform -translate-x-1/2 border">
                <div className='flex flex-col items-center justify-between gap-5'>
                    <p className='font-third-family text-primary-green-light text-[36px]'>Testimonial</p>
                    <h3>What Our Customer Saying?</h3>
                    <div className='mt-8'>
                        <img src={girl} alt="girl" />
                    </div>
                    <Stars />
                    <p className='w-[780px]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    <h4>Sara Taylor</h4>
                    <p>Consumer</p>
                    <span>
                        <svg width="35" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="4" r="4" fill="#7EB693" />
                            <circle cx="31" cy="4" r="4" fill="#C4C4C4" />
                            <circle cx="4" cy="4" r="4" fill="#C4C4C4" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}
