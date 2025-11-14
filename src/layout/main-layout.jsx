import { Outlet } from "react-router-dom"
import { Header } from "./components/header"
import { Footer } from "./components/footer"

export const MainLayout = () => {
    return (
        <div>
            <header><Header /></header>
            <main><Outlet /></main>
            <footer><Footer /></footer>
        </div>
    )
}
