import food from '../../../assets/img/food.png'

import cart from '../../../assets/svg/cart.svg'
import fresh from '../../../assets/svg/fresh.svg'
import support from '../../../assets/svg/support.svg'
import payment from '../../../assets/svg/payment.svg'

const data = [
    {
        img: cart,
        title: 'Return Policy',
        desc: 'Simply dummy text of the printintypesetting industry.'
    },
    {
        img: fresh,
        title: '100% Fresh',
        desc: 'Simply dummy text of the printintypesetting industry.'
    },
    {
        img: support,
        title: 'Support 24/7',
        desc: 'Simply dummy text of the printintypesetting industry.'
    },
    {
        img: payment,
        title: 'Secured Payment',
        desc: 'Simply dummy text of the printintypesetting industry.'
    },
]

export const ChooseUs = () => {
    return (
        <div className=' bg-[#F9F8F8] py-[189px]'>

            <div className='container'>
                <div className='flex justify-between'>
                    <div className='w-[675px]'>
                        <h3 className='text-[36px] font-third-family text-primary-green-light'>Why Choose us?</h3>
                        <h2 className='text-[50px] leading-15 my-5 font-font-1 font-extrabold'>We do not buy from the open market & traders.</h2>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>

                        <div className='inline-flex gap-3 items-center py-7 pl-7 pr-[97px] rounded-[48px] bg-[#ececec] mt-9'>
                            <span>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#7EB693" />
                                    <circle cx="9.5" cy="9.5" r="5.5" fill="#ECECEC" />
                                </svg>
                            </span>
                            <p>100% Natural Product</p>
                        </div>

                        <p className='py-5 pl-15 pr-40'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>

                        <div className='inline-flex gap-3 items-center py-7 pl-7 pr-[97px] rounded-[48px] bg-[#ececec]'>
                            <span>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#7EB693" />
                                    <circle cx="9.5" cy="9.5" r="5.5" fill="#ECECEC" />
                                </svg>
                            </span>
                            <p> Increases resistance</p>
                        </div>

                        <p className='py-5 pl-15 pr-40'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>


                    </div>

                    <div className='w-[678px] h-[579px]'>
                        <img src={food} alt="food" className='rounded-4xl' />
                    </div>
                </div>

                <div className='w-full flex justify-center  gap-8  mt-[90px]'>
                    {data.map((item) => (
                        <div className='rounded-4xl bg-white  py-[50px] w-[257px] flex flex-col justify-center items-center text-center gap-6'>
                            <img src={item.img} alt={item.title} className='' />
                            <h4 className='text-[24px] font-font-1 font-semibold'>{item.title}</h4>
                            <p className='w-[184px]'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    )
}
