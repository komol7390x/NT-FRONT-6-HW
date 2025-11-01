import { Link } from 'react-router-dom'
import { SearchBar } from './search-bar'
import { Logo } from '../../assets/icons/logo'
import { Category } from './category'
import { Lang } from './lang'
import { Signin } from './signin'
import { Navbar } from './navbar'


export const Header = () => {
    return (
        <header className='py-5' >
            <div className='container flex justify-between gap-5 items-center'>
                <div className='flex gap-11 grow'>
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                    <div className='flex gap-1'>
                        <Category />
                        <SearchBar />
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <Lang />
                    <Signin />
                </div>
            </div>
            <Navbar />
        </header >
    )
}
