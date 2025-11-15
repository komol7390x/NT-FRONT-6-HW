import eco from '../../../assets/img/eco.png'
export const Eco = () => {
    return (
        <div className='w-[1920px] grow mx-auto relative'>
            <div className='w-[962px] h-[931px]'>
                <img src={eco} alt="eco" />
            </div>
            <div className='absolute w-[735px] right-[16%] py-[78px] px-25 top-1/2 -translate-y-1/2 rounded-[30px] bg-white'>

                <h4 className='font-third-family text-primary-green-light text-[36px]' >Eco Friendly</h4>
                <h3 className='w-[484px] text-[50px] font-extrabold leading-15 font-font-1'>Econis is a Friendly
                    Organic Store</h3>
                <div className='mt-9'>
                    <h3 className='text-[25px] font-bold'>Start with Our Company First</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                </div>
                <div className='mt-9'>
                    <h3 className='text-[25px] font-bold'>Learn How to Grow Yourself</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                </div>
                <div className='mt-9'>
                    <h3 className='text-[25px] font-bold'>Farming Strategies of Today</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                </div>
            </div>
        </div>
    )
}
