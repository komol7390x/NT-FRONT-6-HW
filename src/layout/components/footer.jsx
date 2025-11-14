import { AllLogos } from '../../assets/icon/all-logos'
import { Button } from '../../assets/icon/button'
import { Logo } from '../../assets/icon/logo'
import footer from '../../assets/img/footer-img.png'
export const Footer = () => {
    return (
        <div className='container'>

            {/* banner */}
            <div className='relative mt-[141px]'>
                <div className='bg-cover bg-center h-[323px] rounded-3xl' style={{ backgroundImage: `url(${footer})` }}></div>
                <div className='absolute flex w-full top-0 items-center translate-y-1/2 justify-between px-[100px]'>
                    <h2 className='w-[400px] font-extrabold text-[50px] text-white'>Subscribe to
                        our Newsletter
                    </h2>
                    <div className='flex gap-2'>
                        <div className='bg-white py-5 w-[350px] rounded-2xl px-3'>
                            <input type="text"
                                className="outline-none focus:text-primary-green-dark focus:font-normal placeholder:italic text-primary-green-dark placeholder:text-gray-400 p-3 w-full"
                                placeholder='Your Email Address' />
                        </div>
                        <Button title='Subscribe' textColor='white' bg='#274C5B' />
                    </div>
                </div>
            </div>

            {/* info */}
            <div className='my-[120px] flex justify-center'>
                {/* up */}
                <div className='flex gap-12'>

                    {/* right */}
                    <div className='text-right flex flex-col gap-8'>
                        <h3 className='text-[30px] font-bold'>Contact Us</h3>
                        <div>
                            <h3 className='font-semibold'>Email</h3>
                            <p>needhelp@Organia.com</p>
                        </div>

                        <div>
                            <h3 className='font-semibold'>Phone</h3>
                            <p>+998 93 572-04-73</p>
                        </div>

                        <div>
                            <h3 className='font-semibold'>Address</h3>
                            <p>Toshkent shahar, Amir Temir shox a34</p>
                        </div>
                    </div>

                    <span>
                        <svg width="1" height="336" viewBox="0 0 1 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="336" x2="0.499974" y2="1.24744e-08" stroke="#D5D5D5" />
                        </svg>
                    </span>

                    {/* middle */}
                    <div className='flex flex-col gap-7 items-center w-[543px]'>
                        <Logo />
                        <p className='text-center'>Simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum simply dummy text of the printing </p>
                        <AllLogos />
                    </div>

                    <span>
                        <svg width="1" height="336" viewBox="0 0 1 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="336" x2="0.499974" y2="1.24744e-08" stroke="#D5D5D5" />
                        </svg>
                    </span>

                    {/* left*/}
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-[30px] font-bold'>Utility Pages</h3>
                        <p>Style Guide</p>
                        <p>404 Not Found</p>
                        <p>Password Protected</p>
                        <p>Licences</p>
                        <p>Changelog</p>
                    </div>

                </div>

                {/* down */}
            </div>
        </div>
    )
}

{/* <div className="relative w-[424px] h-[536px] bg-cover bg-center" style={{ backgroundImage: `url('${left}')` }}> */ }
