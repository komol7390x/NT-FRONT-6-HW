import { ArrowIcon } from "../../../assets/icon/arrow-icon"
import { SearchIcon } from "../../../assets/icon/search-icon"
import { SlideIcon } from "../../../assets/icon/slide-icon"

export const Search = () => {
    return (
        <div>
            <div className="flex relative max-w-[600px] mx-auto">
                <input type="text" className="rounded-[100px] bg-white
             text-[#555] py-5 shadow-[0_4px_10px_rgba(0,0,0,0.15)]
            text-[16px] font-medium pl-5 w-full max-w-[600px] flex mx-auto overflow-hidden focus:outline-none" placeholder="Find the car of your dreams" />
                <div className="bg-primary-color inline absolute right-0 rounded-full p-4 mr-1 mt-1">
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}
