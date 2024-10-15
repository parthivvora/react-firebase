import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './page/Register'
import Login from './page/Login'
import Home from './page/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
