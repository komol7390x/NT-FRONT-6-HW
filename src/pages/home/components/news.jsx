import { Button } from '../../../assets/icon/button'
import left from '../../../assets/img/news-1.png'
import right from '../../../assets/img/news-2.png'

const data = [
    {
        img: left,
        title: 'The Benefits of Vitamin D & How to Get It'
    },
    {
        img: right,
        title: 'Our Favourite Summertime Tommeto'
    },
]

export const News = () => {
    return (
        <div className='container mt-[177px] mb-[300px]'>
            <h3 className='text-[36px] font-third-family text-primary-green-light'>News</h3>
            <div className='flex justify-between items-center'>
                <h3 className='w-[702px] text-[50px] font-extrabold font-font-1'>Discover weekly content about organic food, & more</h3>
                <div className='rounded-2xl text-[25px] font-bold'>
                    <Button title='More News' icon={true} border='4' />
                </div>
            </div>
            <div className='flex justify-between mt-12'>
                {data.map((item) => (
                    <div className='w-[767px] relative'>
                        <img src={item.img} alt={item.title} className='rounded-[30px]' />

                        <div className='shadow-xl absolute rounded-[35px] w-[693px] left-1/2 -translate-x-1/2 bg-white px-[57px] pt-[46px] pb-[60px] -mt-50'>
                            <div className='flex gap-3'>
                                <span>
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3161 1.45446C11.4741 0.516515 10.298 0 9 0C7.69504 0 6.51512 0.51339 5.67701 1.44553C4.82983 2.38793 4.41705 3.66873 4.51397 5.05176C4.70608 7.78031 6.71848 9.99994 9 9.99994C11.2815 9.99994 13.2905 7.78076 13.4856 5.05265C13.5838 3.68212 13.1684 2.404 12.3161 1.45446ZM16.6152 19.9999H1.38482C1.18547 20.0026 0.988051 19.9594 0.806921 19.8734C0.625791 19.7874 0.46551 19.6609 0.337738 19.503C0.0564959 19.1561 -0.0568664 18.6825 0.0270736 18.2035C0.392256 16.1133 1.53194 14.3575 3.32323 13.1249C4.91463 12.0307 6.93049 11.4285 9 11.4285C11.0695 11.4285 13.0854 12.0312 14.6768 13.1249C16.4681 14.3571 17.6077 16.1129 17.9729 18.203C18.0569 18.682 17.9435 19.1557 17.6623 19.5026C17.5345 19.6606 17.3743 19.7872 17.1931 19.8732C17.012 19.9592 16.8146 20.0025 16.6152 19.9999Z" fill="#EFD372" />
                                    </svg>
                                </span>
                                <p>By Rachi Card</p>
                            </div>
                            <h3 className='text-[25px] font-font-1 font-extrabold mt-4'>{item.title}</h3>
                            <p className='text-[22px]'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            <div className='mt-6 text-[24px]'>
                                <Button bg='#EFD372' icon={true} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
