import girl from '../../../assets/girl_img.svg'
import { StrelkaRight, StrelkaLeft } from './strelka'
export const MostRead = () => {
    return (
        <div className='flex'>
            <div className='mt-10'>
                <p className='pl-8 text-2xl'>Кўп ўқилаётганлар</p>
                <img src={girl} alt="girl" className='text-2xl' />
            </div>
            <div className='flex'>
                <StrelkaLeft />
                <StrelkaRight />
            </div>
        </div>
    )
}
