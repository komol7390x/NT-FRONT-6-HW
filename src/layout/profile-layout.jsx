import { Route, Routes } from "react-router-dom"
import { MainProfile } from "./profile/main-profile"
import { useScrollTop } from "../hooks/top-scroll"
import { Follow } from "./profile/follow"
import { Books } from "./profile/books"
import { E_Balance } from "./profile/e-balance"
import { Save } from "./profile/save"
import { Settings } from "./profile/settings"
import { Dark_Light } from "./profile/dark-light"

export const ProfileLayout = () => {
    useScrollTop()
    return (
        <Routes>
            <Route path="/" element={<MainProfile />}>
                <Route index element={<Follow />} />
                <Route path="e-balance" element={<E_Balance />} />
                <Route path="books" element={<Books />} />
                <Route path="save" element={<Save />} />
                <Route path="settings" element={<Settings />} />
                <Route path="light-dark" element={<Dark_Light />} />
            </Route>
        </Routes>
    )
}
