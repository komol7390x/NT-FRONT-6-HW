import { useState } from "react";
import { Link } from "react-router-dom";

export const PcNavbar = ({ items }) => {
    const [activeMenu, setActiveMenu] = useState(null);

    return (
        <nav className="hidden md:flex items-center gap-1">
            {items.map(({ label, href, submenu }) => (
                <div
                    key={label}
                    className="relative group"
                    onMouseEnter={() => setActiveMenu(label)}
                    onMouseLeave={() => setActiveMenu(null)}
                >
                    {submenu ? (
                        <>
                            <button
                                className={`flex items-center gap-1 px-3 py-2 rounded-md  duration-200 ${activeMenu === label
                                    ? "bg-primary-color text-white"
                                    : "text-foreground hover:bg-primary-color hover:text-white"
                                    }`}
                            >
                                {label}
                                <span className="transition-transform duration-200 group-hover:rotate-180">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1528 8.22212C15.4213 8.4906 15.4213 8.9259 15.1528 9.19439L11.4861 12.8611C11.2177 13.1295 10.7824 13.1295 10.5139 12.8611L6.84721 9.19439C6.57872 8.9259 6.57872 8.4906 6.84721 8.22212C7.11569 7.95363 7.55099 7.95363 7.81948 8.22212L11 11.4026L14.1805 8.22212C14.449 7.95363 14.8843 7.95363 15.1528 8.22212Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`absolute left-0 mt-1 w-48  bg-white rounded-md shadow-lg ring-1 ring-white ring-opacity-5 overflow-hidden transform transition-all duration-200 ${activeMenu === label
                                    ? "opacity-100 visible translate-y-0"
                                    : "opacity-0 invisible -translate-y-2"
                                    }`}
                            >
                                {submenu.map(({ label: subLabel, href: subHref }) => (
                                    <Link
                                        key={subLabel}
                                        to={subHref}
                                        className="block px-4  py-2  hover:bg-primary-color hover:text-white transition-colors"
                                    >
                                        {subLabel}
                                    </Link>
                                ))}
                            </div>
                        </>
                    ) : (
                        <Link
                            to={href}
                            className="px-3 py-2 rounded-md text-foreground  hover:bg-primary-color hover:text-white transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
};
