import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <hr className="my-4 text-[#E5E5E5]" />
            <div className="container">
                <ul className="flex py-3 gap-6">
                    <li>
                        <NavLink to={'audio-book'}>
                            <p>Аудиокитоб</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'online-book'}>
                            <p>Электрон китоблар</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'printed-book'}>
                            <p>Босма китоблар</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'contact'}>
                            <p>Контакт</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'about-us'}>
                            <p>Биз хақимизда</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <hr className=" text-[#E5E5E5]" />
        </div>
    )
}
