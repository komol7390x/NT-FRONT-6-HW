import about from '../../../assets/img/about-us.png'
import icon1 from '../../../assets/img/about-2-1.png'
import icon2 from '../../../assets/img/about-2-2.png'
import { Button } from '../../../assets/icon/button'

export const AboutUs = () => {
    return (
        <div className='container flex bg-[#f8f8f8] items-center'>
            <img src={about} alt="about" width={'911px'} />
            <div className='pr-5'>
                <h4 className='text-primary-green-light font-third-family text-[40px]'>About Us</h4>
                <h3 className='text-[50px] font-extrabold leading-15'>We Believe in Working
                    Accredited Farmers</h3>
                <p className='mt-4 font-second-family'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                <div className='flex gap-5 mt-8'>
                    <img src={icon1} alt="icon1" width={'101px'} />
                    <div className='w-[444px]'>
                        <h3 className=' text-[25px] font-extrabold'>Organic Foods Only</h3>
                        <p className='font-second-family'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>

                <div className='flex gap-5 mt-8'>
                    <img src={icon2} alt="icon2" width={'101px'} />
                    <div className='w-[444px]'>
                        <h3 className=' text-[25px] font-extrabold'>Quality Standards</h3>
                        <p className='font-second-family'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                    </div>
                </div>

                <div className='inline-block mt-8'>
                    <Button title='Shop Now' bg='#274C5B' textColor='white' icon={true} />
                </div>
            </div>
        </div>
    )
}
