
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/home/LandingPage'
import ContactPage from './pages/contact/ContactPage'

function App() {



  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='contactus' element={<ContactPage/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
