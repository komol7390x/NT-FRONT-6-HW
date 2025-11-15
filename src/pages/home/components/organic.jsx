import juice from '../../../assets/img/juice.png'
import food from '../../../assets/img/food.png'
import cookies from '../../../assets/img/cookies.png'
import { Button } from '../../../assets/icon/button'

const data = [
    {
        img: juice,
        title: 'Organic Juice'
    },
    {
        img: food,
        title: 'Organic Food'
    },
    {
        img: cookies,
        title: 'Nuts Cookies'
    },
]

export const Organic = () => {
    return (
        <div className='w-[1920px] bg-[#F1F8F4] mt-2.5 mx-auto py-[187px]'>
            <div className='flex justify-between'>
                {data.map((item) => (
                    <div className='w-[612px] h-[583px] relative text-[25px] font-medium'>
                        <img src={item.img} alt={item.title} />
                        <div className=' absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>
                            <Button title={item.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
