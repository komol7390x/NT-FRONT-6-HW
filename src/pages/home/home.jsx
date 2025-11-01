import { Banner } from './components/banner'
import { Hero } from './components/hero'
import { BookCard } from './components/book-card'
import { RuknCard } from './components/rukn-card'
import { infoData } from './data/infoData'
import { newAdd } from './data/newAdd'
import { ruknData } from './data/rukn'
import { LeftRightArrow } from '../../assets/icons/left-right-arrow'
import { audioBookData } from './data/audioBook'

export const Home = () => {
    return (
        <>
            <Banner />
            <section>
                <div className='container'>
                    { /* tezkor yetkazish */}
                    <div className='mt-[82px] flex'>
                        {infoData.map((item) => (
                            <Hero title={item.title} img={item.img} desc={item.desc} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Ruknlar */}
            <section>
                <div className="container">
                    <div className='mt-16 '>
                        <h3 className='font-bold text-[32px] text-[#242424] mb-8'>Рукнлар</h3>
                        <div className='flex gap-4'>
                            {ruknData.map((item) => (
                                <RuknCard title={item.title} img={item.img} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Yangi qo'shilganlar */}
            <section>
                <div className="container mt-16 mb-16">
                    <div className=''>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-semibold text-black text-[32px]'>Янги қўшилганлар</h3>
                            <LeftRightArrow />
                        </div>
                        <div className='flex gap-6 mt-8'>
                            {newAdd.map((item) => (
                                <BookCard title={item.title} img={item.img} ganre={item.ganre} star={item.star} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Audio kitoblar */}
            <section>
                <div className="container mb-[93px]">
                    <div className='flex items-center justify-between'>
                        <h3 className='font-semibold text-black text-[32px]'>Аудио китоблар</h3>
                        <LeftRightArrow />
                    </div>
                    <div className='flex gap-6 mt-8'>
                        {audioBookData.map((item) => (
                            <BookCard title={item.title} img={item.img} ganre={item.ganre} star={item.star} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
