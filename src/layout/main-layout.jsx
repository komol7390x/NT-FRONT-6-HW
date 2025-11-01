import { Header } from './header/header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <>
            <div className="">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}
