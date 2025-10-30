import { Header } from './header/header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <>
            <div className="border-2">
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}
