import { Footer } from './header/footer'
import { Header } from './header/header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <>
            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}
