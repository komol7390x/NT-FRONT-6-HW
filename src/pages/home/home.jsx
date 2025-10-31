import { Banner } from './components/banner'
import { infoData } from './data/infoData'

export const Home = () => {
    return (
        <>
            <Banner />
            <section>
                <div className='container'>
                    <div className=''>
                        {infoData.map((item) => (
                            <li className=''>
                                <img src={item.img} alt={item.title} />
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                            </li>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
