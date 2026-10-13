import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'

function App() {
  return (
   <BrowserRouter>
   <NavBar></NavBar>
   
    <Routes>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='' element={<Landing></Landing>}></Route>

    </Routes>
   </BrowserRouter>
  )
}

export default App
