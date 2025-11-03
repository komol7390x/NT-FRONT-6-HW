import { Outlet } from "react-router-dom"
import { useScrollTop } from "../hooks/top-scroll"
import { ProfileInfo } from "./profile/profile-info"
import { ProfileMenu } from "./profile/profile-menu"

export const ProfileLayout = () => {
    useScrollTop()
    return (
        <div className="container border">
            <ProfileInfo />
            <div className="flex mt-[60px] mb-25 gap-9" >
                <ProfileMenu />
                <Outlet />
            </div>
        </div>
    )
}
