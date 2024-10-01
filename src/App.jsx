import './App.css'
import Navbar from './components/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './components/auth/Layout'
import AdminLayout from './components/admin-view/Layout.jsx'
import AdminDashboard from './pages/admin/dashboard.jsx'
import AdminProducts from './pages/admin/products.jsx'
import AdminOrders from './pages/admin/orders.jsx'
import ShoppingLayout from './components/shopping-view/Layout.jsx'
import NotFound from './pages/NotFound'
import Home from './components/Home.jsx'



function App() {

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Layout/>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='dashboard' element={<AdminDashboard/>}/>
          <Route path='products' element={<AdminProducts/>}/>
          <Route path='orders' element={<AdminOrders/>}/>
        </Route>
        <Route path='/shop' element={<ShoppingLayout/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route/>
      </Routes>
    </div>
  )
}

export default App
