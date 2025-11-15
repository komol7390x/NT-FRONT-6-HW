import { Stars } from "../assets/icon/stars"

export const ProductCart = ({ name, img, type, price, bg = '#fff' }) => {
    return (
        <div className={`border hover:shadow-lg border-[#a0a0a052] inline-block bg-[${bg}] pt-[78px] 
        relative mt-8 rounded-[30px] transform transition-transform duration-300 hover:scale-105`}>
            <img src={img} alt={name} className="w-[360px] h-[360px]" />
            <div className="text-left flex flex-col gap-5">
                <p className="px-8 text-[20px] font-semibold text-primary-green-dark">{name}</p>
                <span className="flex items-center justify-center">
                    <svg width="275" height="1" viewBox="0 0 275 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.5L274.988 0.499976" stroke="#DEDDDD" />
                    </svg>
                </span>
                <div className="flex items-center justify-between px-8 pb-5">
                    <div className="flex gap-4">
                        <p className="text-[#b8b8b8] line-through">${price}</p>
                        <p className="text-primary-green-dark font-semibold">${(price * 0.7).toFixed(1)}</p>
                    </div>
                    <Stars />
                </div>
            </div>
            <div className="absolute top-0 pt-[30px] pl-5">
                <h1 className="bg-primary-green-dark px-3 py-1 text-white rounded-[11px]">{type}</h1>
            </div>
        </div>
    )
}
