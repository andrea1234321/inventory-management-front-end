import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Warehouses from './pages/Warehouses/warehouses'
import NavBar from './components/NavBar/NavBar'

import * as warehouseService from './services/warehouseService'

import './App.css'

function App() {
  const [warehouses, setWarehouses] = useState([])
  
  useEffect(() => {
    const fetchAllWarehouses = async () => {
      const data = await warehouseService.index()
      console.log('Warehouse Data from useeffect:', data)
      setWarehouses(data)
    }
    fetchAllWarehouses()
  }, [])

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/warehouses" element={<Warehouses warehouses={warehouses}/>}/>
      </Routes>
    </>
  )
}

export default App
