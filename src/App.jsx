import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import DashBoard from './pages/DashBoard'
import ExpenseList from './pages/ExpenseList'
import ExpenseAdd from './pages/ExpenseAdd'

function App() {
  return (
   <BrowserRouter>
   <NavBar></NavBar>
   
    <Routes>
      <Route path='/expense-add' element={<ExpenseAdd></ExpenseAdd>}></Route>
      <Route path='/expense-all' element={<ExpenseList></ExpenseList>}></Route>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='' element={<Landing></Landing>}></Route>

    </Routes>
   </BrowserRouter>
  )
}

export default App
