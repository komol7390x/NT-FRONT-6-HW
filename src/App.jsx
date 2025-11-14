import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { Home } from "./pages/home/home"
import { About } from "./pages/about/about"
import { Shop } from "./pages/shop/shop"
import { ShopSingle } from "./pages/shop-single/shop-single"
import { NotFound } from "./pages/not-found"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:slug" element={<ShopSingle />} />
          <Route path={'*'} element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
