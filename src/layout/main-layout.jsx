import { Link, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'
export const MainLayout = () => {
    const token = Cookies.get('token')
    return (
        <div>
            <header className='text-3xl bg-green-300 flex items-center justify-center p-5 text-white gap-5  uppercase'>
                <Link to={'/'} className='hover:text-black'>
                    HEADER
                </Link>
                {token ? <Link to={"/profile"} className='hover:text-black'>Profile</Link> : <Link to={"/auth"} className='hover:text-black'>Sign Up</Link>}
            </header>
            <main><Outlet /></main>
            <footer className='text-3xl bg-green-300 flex items-center justify-center p-5 text-white'>FOOTER</footer>
        </div>
    )
}
