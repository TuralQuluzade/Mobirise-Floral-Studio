import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import NotFound from '../components/NotFound'
import Layout from '../components/Layout'
import Basket from '../pages/Basket'
import Wish from '../pages/Wish'
import Admin from '../pages/Admin'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/wish' element={<Wish/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/admin'element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router