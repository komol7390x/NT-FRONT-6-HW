import left from '../../../assets/img/team-1.png'
import middle from '../../../assets/img/team-2.png'
import right from '../../../assets/img/team-3.png'
import social from '../../../assets/svg/social-logo.svg'

const data = [
    {
        img: left,
        name: 'Giovani Bacardo',
        job: 'Farmer'
    },
    {
        img: middle,
        name: 'Marianne Loreno',
        job: 'Designer'
    },
    {
        img: right,
        name: 'Riga Pelore',
        job: 'Farmer'
    },
]


export const Team = () => {
    return (
        <div className='container'>
            <div className='flex flex-col items-center text-center my-[180px]  gap-5'>
                <h4 className='text-[36px] font-third-family text-primary-green-light'>Team</h4>
                <h3 className='text-[50px] font-font-1 font-extrabold'>Our Organic Experts</h3>
                <p className='w-[852px] text-[22px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                <div className='flex gap-7 text-left mt-10'>
                    {data.map((item) => (
                        <div className='w-[449px] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xs'>
                            <img src={item.img} alt="" />
                            <div className='bg-white p-9  rounded-b-3xl shadow-xl'>
                                <h4 className='text-[25px] font-extrabold font-font-1'>{item.name}</h4>
                                <div className='flex justify-between'>
                                    <p className='text-[26px] text-primary-green-light font-third-family'>{item.job}</p>
                                    <img src={social} alt="social" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
