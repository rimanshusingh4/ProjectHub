import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/admin/admin'
import AdminLogin from './pages/admin/adminLogin'
import AdminRegister from './pages/admin/adminRegister'
import AdminForm from './pages/admin/adminForm'
import NotFound from './pages/NotFound'
import Logout from './pages/Logout'
import axios from "axios";

// Configure axios to always send cookies in requests
axios.defaults.withCredentials = true;

function App() {

  return (
    <div className='flex flex-col h-full w-full overflow-hidden bg-white border'>
      <Navbar/>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='admin' element={<Admin/>}>
          <Route path='adminForm' element={<AdminForm/>} />
          <Route path='adminLogin' element={<AdminLogin/>}/>
          <Route path='adminRegister' element={<AdminRegister/>}/>
        </Route>
        <Route path='logout' element={<Logout/>}/>
      </Routes>
    </div>
  )
}

export default App
