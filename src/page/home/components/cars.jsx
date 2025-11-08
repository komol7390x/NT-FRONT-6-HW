import human from '../../../assets/svg/human.svg'
import year from '../../../assets/svg/year.svg'
import trans from '../../../assets/svg/trans.svg'
import fuel from '../../../assets/svg/fuel.svg'

export const Cars = ({ cars }) => {
    return (
        <div className='grid tablet:grid-cols-2 pc:grid-cols-3 gap-5'>
            {cars.map((item) => (
                <div className='pt-8 pl-6 bg-[#F5F5F5] rounded-2xl mb-5 w-full max-w-[347px] mx-auto'>
                    <h3 className='text-[20px] font-semibold tablet:text-2xl'>{item.model}</h3>
                    <p className='text-grey-color'>{item.type}</p>
                    <img src={item.img} alt={item.title} className='my-4' />

                    <div className='pb-8 grid grid-cols-2'>

                        <div className='flex gap-2 items-center'>
                            <img src={human} alt="human" />
                            <p>{item.seats}</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <img src={trans} alt="trans" />
                            <p>{item.transmission}</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <img src={year} alt="year" />
                            <p>{item.minAge}</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <img src={fuel} alt="fuel" />
                            <p>{item.fuel}</p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}
