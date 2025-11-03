import { Outlet } from "react-router-dom"
import { MainProfile } from "./profile/main-profile"
import { useScrollTop } from "../hooks/top-scroll"

export const ProfileLayout = () => {
    useScrollTop()
    return (
        <>
            <div className="container">
                <MainProfile />
                <main><Outlet /></main>
            </div>
        </>
    )
}
