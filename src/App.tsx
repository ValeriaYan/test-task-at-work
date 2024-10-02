import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage'
import ProfilePage from './pages/profile/ProfilePage'
import Layout from './components/layout/Layout'
import ErrorPage from './pages/error/ErrorPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="/profile/:id" element={<ProfilePage />}/>
          <Route path='*' element={<ErrorPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
