import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { Home } from "./pages/home"
import { Auth } from "./pages/auth"
import { Contact } from "./pages/contact"
import { Profile } from "./pages/profile"
import { ProfileLayout } from "./layout/profile-layout"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<ProfileLayout />} >
            <Route index element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
