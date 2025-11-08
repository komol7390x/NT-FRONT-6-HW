import React from 'react'

export const ButtonIcon = ({ buttonData }) => {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div className='w-full gap-1 flex tablet:gap-5 justify-center items-center'>
            {buttonData.map((title, index) => (
                <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`px-4 text-[16px] font-medium py-3.5 rounded-full border cursor-pointer
                         border-[#E5E7EA] transition-colors duration-500 ${activeIndex == index ? 'bg-primary-color text-white ' : ''}`}
                >{title}</button>
            ))}
        </div>
    )
}
