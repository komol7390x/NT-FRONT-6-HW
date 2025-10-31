import { Banner } from './components/banner'
import {infoData} from './data/infoData'

export const Home = () => {
    return (
        <>
            <Banner />
            <section>
                <div className='container'>
                    <h1>Komol</h1>
                    <div className=''>
                        {infoData.map((item) => (
                            <li>
                                <h1>{item.title}</h1>
                            </li>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
