import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/main-layout.jsx'
import { Home } from './pages/home/home.jsx'
import { AudioBookDetail } from './pages/pruduct-detail/audio-book-detail.jsx'
import { NewBookDetail } from './pages/pruduct-detail/new-book-detail.jsx'
import { MostReadDetail } from './pages/pruduct-detail/most-read-book.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='audio-book/:id' element={<AudioBookDetail />} />
          <Route path='new-book/:id' element={<NewBookDetail />} />
          <Route path='most-read/:id' element={<MostReadDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
