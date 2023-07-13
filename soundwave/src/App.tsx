import { Routes, Route } from 'react-router-dom'
import {Home } from './pages/Home.tsx'
import {Discover } from './pages/Discover.tsx'
import {Join } from './pages/Join.tsx'
import './App.less'
import { Navbar } from './components/Navbar.tsx'

export const App=()=> {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/join' element={<Join />} />
      </Routes> 
    </>
  )
}


