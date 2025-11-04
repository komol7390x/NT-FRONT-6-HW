import { Stars5 } from "../../../assets/icons/stars-5"

export const BooksInfo = ({ img, title, ganre, coments, desc, author, publisher, year }) => {
    return (
        <div className="flex gap-7 bg-[#FFFFFF] rounded-2xl p-6">
            <img src={img} alt={title} width={'218px'} />
            <div className="flex flex-col justify-around">

                <div className="w-full flex justify-between">
                    <div>
                        <h3 className="font-bold text-3xl">{title}</h3>
                        <p className="mt-4 text-primary_color font-normal">{ganre}</p>
                    </div>

                    <div>
                        <Stars5 />
                        <div className="flex justify-between items-baseline">
                            <p className="text-black font-bold text-2xl">4.2</p>
                            <p className="text-[#9A9A9A] mt-6">{coments} Фикрлар</p>
                        </div>
                    </div>
                </div>

                <p className="mt-3">{desc}</p>
                <div className="flex gap-15">
                    <div>
                        <h4 className="text-[#9A9A9A] text-[14px]">Муаллиф</h4>
                        <p className="font-semibold">{author}</p>
                    </div>
                    <div>
                        <h4 className="text-[#9A9A9A] text-[14px]">Нашриёт</h4>
                        <p className="font-semibold">{publisher}</p>
                    </div>
                    <div>
                        <h4 className="text-[#9A9A9A] text-[14px]">Йил</h4>
                        <p className="font-semibold">{year}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
