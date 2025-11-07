import { Route, Routes } from "react-router-dom"
import { MainLyout } from "./layout/main-layout"
import { Home } from "./page/home/home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLyout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
