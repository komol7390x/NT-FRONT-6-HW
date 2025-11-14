import { Button } from '../../assets/icon/button'
import footer from '../../assets/img/footer-img.png'
export const Footer = () => {
    return (
        <div className='container'>
            {/* banner */}
            <div className='relative '>
                <div className='bg-cover bg-center h-[323px] rounded-3xl' style={{ backgroundImage: `url(${footer})` }}></div>
                <div className='absolute flex w-full top-0 items-center translate-y-1/2 justify-between px-[100px]'>
                    <h2 className='w-[400px] font-extrabold text-[50px] text-white'>Subscribe to
                        our Newsletter
                    </h2>
                    <div className='border flex gap-2'>
                        <div className='bg-white py-7 w-[350px] rounded-2xl pl-6 italic text-[#ababab]'><input type="text" placeholder='Your Email Address' /></div>
                        <Button title='Subscribe' textColor='white' bg='#274C5B'/>
                    </div>
                </div>
            </div>

            {/* info */}
            <div>

            </div>
        </div>
    )
}

{/* <div className="relative w-[424px] h-[536px] bg-cover bg-center" style={{ backgroundImage: `url('${left}')` }}> */ }
