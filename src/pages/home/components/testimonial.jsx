import { Slide } from '../../../assets/icon/slide'
import { Stars } from '../../../assets/icon/stars'
import bg from '../../../assets/img/testimonial.png'
import girl from '../../../assets/svg/gitl-testimonial.svg'
import { testimonial } from '../../../data/testimonial'

export const Testimonial = () => {
    return (
        <div className='max-w-[1920px] mx-auto mt-50 relative'>
            <img src={bg} alt="bg" />
            <div className="mt-10 absolute container flex flex-col justify-between items-center text-center py-20 top-0 left-1/2 transform -translate-x-1/2">
                <div className='flex flex-col items-center justify-between gap-5'>
                    <p className='font-third-family text-primary-green-light text-[36px]'>Testimonial</p>
                    <h3 className='text-[50px] font-extrabold'>What Our Customer Saying?</h3>
                    <div className='mt-8'>
                        <img src={girl} alt="girl" />
                    </div>
                    <Stars />
                    <p className='w-[780px]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    <h4 className='text-[25px] font-semibold'>Sara Taylor</h4>
                    <p>Consumer</p>
                    <Slide />
                </div>
                <span className='mt-25'>
                    <svg width="900px" height="1" viewBox="0 0 1108 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="4.37114e-08" y1="0.5" x2="1108" y2="0.500097" stroke="#E0E0E0" />
                    </svg>
                </span>
                <div className='mt-25 flex gap-16'>
                    {testimonial.map((item) => (
                        <div className='w-55 h-55 rounded-full border-4 border-primary-green-light bg-gray-100 flex flex-col items-center justify-center'>
                            <h3 className='font-extrabold text-[50px]'>{item.procent}</h3>
                            <p className='font-semibold'>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
