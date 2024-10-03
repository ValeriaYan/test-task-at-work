import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage'
import Layout from './components/layouts/Layout'
import ErrorPage from './pages/error/ErrorPage'
import ProfileLayout from './components/layouts/ProfileLayout'
import UserDataPage from './pages/profile/pages/user-data/UserDataPage'
import WorkSpacePage from './pages/profile/pages/work-space/WorkSpacePage'
import PrivacyPage from './pages/profile/pages/privacy/PrivacyPage'
import SecurityPage from './pages/profile/pages/security/SecurityPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="/profile/:id" element={<ProfileLayout />}>
            <Route index path="/profile/:id/data" element={<UserDataPage />}/>
            <Route path="/profile/:id/work-space" element={<WorkSpacePage />}/>
            <Route path="/profile/:id/privacy" element={<PrivacyPage />}/>
            <Route path="/profile/:id/security" element={<SecurityPage />}/>
          </Route>
          <Route path='*' element={<ErrorPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
