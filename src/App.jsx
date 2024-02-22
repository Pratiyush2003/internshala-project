import React from 'react'
import {
        BrowserRouter as Router,
        Route,
        Routes,
        Navigate
      } from "react-router-dom"
import Navbar from './Products/Navbar'
import Products from './Products/Products.jsx'
import Cart from './Products/Cart.jsx'
import Login from './authentication/Login.jsx'
import Signup from './authentication/Signup.jsx'
import './App.css'

const App = () => {
  return (
     <Router>
      <Navbar/>
        <Routes>
            <Route path='/' element = {<Products/>}></Route>
            <Route path='/cart' element = {<Cart/>}></Route>
            <Route path='/login' element = {<Login/>}></Route>
            <Route path='/signup' element = {<Signup/>}></Route>
        </Routes>
     </Router>
  )
}

export default App

//this below is for protected route but using localstorage i am not able to store user-token so this would not work

// export const ProtectedRoute = ({children}) => {
//   const token = localStorage.getItem('token')
//   if(token){
//     return children
//   }else{
//     return <Navigate to = '/login'/>
//   }
// }