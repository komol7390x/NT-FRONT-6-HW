import { ComentIcon } from "../../../assets/icons/coment-icon"
import { Headphone } from "../../../assets/icons/headphone"
import { SaveIcon } from "../../../assets/icons/save-icon"
import { Stars5 } from "../../../assets/icons/stars-5"
import { BuyBook } from "./buy-book"

export const booksFilter = (items) => {
    return items.filter((_, index) => index < 3)
}

export const BookPage = ({
    img, title, genre, desc, star, comment, author, publisher, year, bookPrice, audioPrice, onlineBookPrice
}) => {
    return (
        <div>
            {/* main */}
            <div className="gap-6 flex">
                <img src={img} alt={title} width={'330px'} height={'420px'} style={{ borderRadius: '14px' }} />

                {/* about */}
                <div className="flex flex-col justify-between ">

                    {/* title qatori */}
                    <div>

                        <div className="flex items-center  gap-20">
                            <h2 className="font-bold text-[30px] text-[#11142d]">{title}</h2>
                            <div className="flex gap-4 text-[#9A9A9A]">
                                <Headphone />
                                <SaveIcon />
                            </div>
                            <div className="flex gap-[22px] items-center justify-between">
                                <Stars5 />
                                <p className="font-bold text-2xl">{star}</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-primary_color">
                                    <ComentIcon />
                                </div>
                                <p>{comment} Фикрлар </p>
                            </div>
                        </div>

                    </div>

                    {/* genre */}
                    <h3 className="my-4 text-[14px] text-primary_color">{genre}</h3>

                    {/* description */}
                    <p className="text-[14px] font-normal w-[900px]">
                        {desc}
                    </p>

                    {/* author */}
                    <div className="my-4 flex gap-[70px]">

                        <div>
                            <h3 className="font-normal text-[14px] text-[#aaa]" >Муаллиф</h3>
                            <p className="mt-2 font-semibold text-[#11142d]">{author}</p>
                        </div>

                        <div>
                            <h3 className="font-normal text-[14px] text-[#aaa]">Нашриёт</h3>
                            <p className="mt-2 font-semibold text-[#11142d]">{publisher}</p>
                        </div>

                        <div>
                            <h3 className="font-normal text-[14px] text-[#aaa]">Йил</h3>
                            <p className="mt-2 font-semibold text-[#11142d]">{year}</p>
                        </div>

                    </div>

                    <BuyBook audioPrice={audioPrice} bookPrice={bookPrice} onlineBookPrice={onlineBookPrice} />
                </div>
            </div>
        </div>
    )
}
