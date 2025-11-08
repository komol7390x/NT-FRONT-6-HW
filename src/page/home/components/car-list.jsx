import { carData } from "../data/car-data"
import { ButtonIcon } from "./button-icon"
import { Cars } from "./cars"

const buttonData = ['Compact', 'Sports cars', 'Vans']

export const CarList = () => {
    return (
        <div className='mt-[92px] border'>
            {/* Title */}
            <div className='text-center max-w-[585px] mx-auto px-5'>
                <h3 className='text-[24px] font-semibold tablet:text-[36px]'>Choose the car of your dreams</h3>
                <p className='text-[12px] text-[#555] font-normal tablet:text-[16px]'>We provide our customers with the most incredible driving emotions.That is why there are only world-class cars in our fleet</p>
            </div>

            {/* button */}
            <div className="flex justify-between px-4 mt-8 max-w-[476px] mx-auto">
                <ButtonIcon buttonData={buttonData} />
            </div>

            {/* Cars */}
            <div className="mt-6">
                <Cars cars={carData} />
            </div>

            <div className="flex justify-center w-full">
                <ButtonIcon buttonData={['View all cars']} />
            </div>
        </div>
    )
}
