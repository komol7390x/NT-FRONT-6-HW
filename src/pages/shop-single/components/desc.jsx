import React from 'react'
import { Button } from '../../../assets/icon/button'

export const Desc = () => {
    const [toggle, setToggle] = React.useState(false)
    return (
        <div className='container'>
            <div className='flex flex-col  items-center h-[250px] '>
                <div className='text-[25px] flex gap-6 pb-[50px]'>
                    {toggle ? (<div className=' flex gap-6'>
                        <Button title='Product Description' bg='#274C5B' textColor='white' />
                        <div onClick={() => setToggle(!toggle)}>
                            <Button title='Additional Info' bg='#EFF6F1' textColor='#274C5B' />
                        </div>
                    </div>) : (<div className=' flex gap-6'>
                        <div onClick={() => setToggle(!toggle)}>
                            <Button title='Product Description' bg='#EFF6F1' textColor='#274C5B' />
                        </div>
                        <Button title='Additional Info' bg='#274C5B' textColor='white' />
                    </div>)}
                </div>
                {toggle ? (<p className='w-[1300px] text-[22px] text-center mt-5'>Welcome to the world
                    of natural and organic. Here you can discover the bounty
                    of nature. We have grown on the principles of health, ecology, and care.
                    We aim to give our customers a healthy chemical-free meal for perfect nutrition.
                    It offers about 8–10% carbs. Simple sugars — such as glucose and fructose —
                    make up 70% and 80% of the carbs in raw.</p>) : (<p className='w-[1300px] text-[22px] text-center mt-5'>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Debitis deserunt doloribus ipsam asperiores libero omnis minima iusto
                        corporis ducimus amet voluptates velit reiciendis possimus nihil, modi eum perferendis
                        recusandae natus fuga cum rem atque veniam delectus? Exercitationem, blanditiis sint?
                        Dolores labore explicabo, praesentium eos obcaecati nisi. Modi molestiae ad quo!</p>)}
            </div>
        </div>
    )
}
