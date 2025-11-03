import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/main-layout.jsx'
import { Home } from './pages/home/home.jsx'
import { AudioBookDetail } from './pages/pruduct-detail/audio-book-detail.jsx'
import { NewBookDetail } from './pages/pruduct-detail/new-book-detail.jsx'
import { MostReadDetail } from './pages/pruduct-detail/most-read-book.jsx'
import { ProfileLayout } from './layout/profile-layout.jsx'
import { Follow } from './pages/profile/follow.jsx'
import { E_Balance } from './pages/profile/e-balance.jsx'
import { Books } from './pages/profile/books.jsx'
import { Save } from './pages/profile/save.jsx'
import { Settings } from './pages/profile/settings.jsx'
import { Dark_Light } from './pages/profile/dark-light.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<ProfileLayout />} >
            <Route index element={<Follow />} />
            <Route path="e-balance" element={<E_Balance />} />
            <Route path="books" element={<Books />} />
            <Route path="save" element={<Save />} />
            <Route path="settings" element={<Settings />} />
            <Route path="dark-light" element={<Dark_Light />} />
          </Route>
          <Route path='audio-book/:id' element={<AudioBookDetail />} />
          <Route path='new-book/:id' element={<NewBookDetail />} />
          <Route path='most-read/:id' element={<MostReadDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
