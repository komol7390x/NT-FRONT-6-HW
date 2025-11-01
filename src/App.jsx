import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/main-layout'
import { Home } from './pages/home/home'
import { AudioBookDetail } from './pages/pruduct-detail/audio-book-detail.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<AudioBookDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
