import vegtables from '../../../assets/img/about-us2.png'
import tractor from '../../../assets/svg/tractor.svg'
import build from '../../../assets/svg/build.svg'
import { Button } from '../../../assets/icon/button'

export const AboutUs = () => {
    return (
        <div className='container '>
            <div className='flex justify-between'>
                <div className='w-[976px] h-[929px]'>
                    <img src={vegtables} alt="vegtables" className='' />
                </div>
                <div className='w-[671px] flex flex-col justify-center'>
                    <h4 className='text-[36px] font-third-family text-primary-green-light '>About Us</h4>
                    <h3 className='text-[50px] leading-14 my-5 font-extrabold font-font-1 w-[480px]'>We do Creative
                        Things for Success</h3>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                    <p className='mt-5'>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.

                    </p>

                    <div className='mt-10 flex gap-6'>
                        <div className='flex gap-3 '>
                            <img src={tractor} alt="tractor" />
                            <h4 className='w-[236px] font-font-1 leading-8 text-[25px] font-medium '>Modern Agriculture
                                Equipment
                            </h4>
                        </div>

                        <div className='flex gap-3 '>
                            <img src={build} alt="tractor" />
                            <h4 className='w-[236px] font-font-1 leading-8 text-[25px] font-medium '>No growth hormones are used
                            </h4>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <Button bg='#274C5B' title='Explore More' icon={true} textColor='white' />
                    </div>
                </div>
            </div>
        </div>
    )
}
