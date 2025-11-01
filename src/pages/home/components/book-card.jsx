import { Star } from "../../../assets/icons/star"
import { Headphone } from "../../../assets/icons/headphone"
import { SaveIcon } from '../../../assets/icons/save-icon'

export const BookCard = ({ img, title, ganre, star }) => {
    return (
        <div className=" rounded-2xl p-0.5">
            <img src={img} alt={title} width={'240px'} />
            <h3 className="mt-[18px] font-bold text-[18px]">{title}</h3>
            <p className="font-normal text-primary_color text-[14px]">{ganre}</p>
            <div className="mt-4 flex justify-between">
                <div className="flex gap-2.5 text-[#FF7F4D]">
                    <Star />
                    <p className="font-bold ">{star}</p>
                </div>
                <div className="flex gap-4">
                    <Headphone />
                    <SaveIcon />
                </div>
            </div>
        </div>
    )
}
