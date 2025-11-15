import { Link } from "react-router-dom"
import { Logo } from "../../assets/icon/logo"
import { Search } from "../../assets/icon/search"
import { Cart } from "../../assets/icon/cart"

export const Header = () => {
    return (
        <div className='container '>

            {/* LOGO */}
            <div className="flex justify-between items-center py-[50px] gap-100px">

                {/* logo img */}
                <Logo />
                    

                {/* Navi */}
                <ul className="text-[20px] text-primary-gray-dark font-bold flex gap-11">
                    <Link to={'/'}>
                        <li>
                            Home
                        </li>
                    </Link>

                    <Link to={'/about'}>
                        <li>
                            About
                        </li>
                    </Link>

                    <Link to={'/pages'}>
                        <li className="flex items-center gap-1.5 justify-center">
                            Pages
                            <span className="text-[50px]">
                                <svg width="10" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75 0.75L3.75 3.75L6.75 0.75" stroke="#274C5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </li>
                    </Link>

                    <Link to={'/shop'}>
                        <li>
                            Shop
                        </li>
                    </Link>

                    <Link to={'/project'}>
                        <li>
                            Projects
                        </li>
                    </Link>

                    <Link to="/news">
                        <li>
                            News
                        </li>
                    </Link>
                </ul>

                {/* search */}
                <div className="flex gap-4.5">
                    <div className="relative">
                        <div className="rounded-[36px]   border border-[#e0e0e0] bg-[#fafafa] py-5 pr-17 pl-6 w-[376px] grow">
                            <input type="text" className="w-full outline-none" placeholder="Search" />
                        </div>
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer -translate-x-2 p-4 rounded-full border border-primary-green-light bg-primary-green-light">
                            <Search />
                        </div>
                    </div>

                    <div className="border border-[#e0e0e0] bg-[#fafafa] flex items-center gap-3 pl-1.5 rounded-full">
                        <div className="bg-primary-green-dark p-3 rounded-full"><Cart /></div>
                        <h3 className="pr-6 font-semibold text-primary-green-dark">Cart(3)</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
