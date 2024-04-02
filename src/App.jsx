import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Warehouses from './pages/Warehouses/Warehouses.jsx'
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails'
import NewWarehouse from './pages/NewWarehouse/NewWarehouse.jsx'

import * as warehouseService from './services/warehouseService'

import './App.css'

function App() {
  const [warehouses, setWarehouses] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllWarehouses = async () => {
      const data = await warehouseService.index()
      console.log('Warehouse Data from useeffect:', data)
      setWarehouses(data)
    }
    fetchAllWarehouses()
  }, [])

  const handleAddWarehouse = async (warhouseFormData) => {
    const newWarehouse = await warehouseService.create(warhouseFormData)
    console.log('New warehouse: ' + newWarehouse.id + newWarehouse.city)
    const newWarehouses = [newWarehouse, ...warehouses]
    setWarehouses(newWarehouses)
    navigate('/warehouses')
  }

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/warehouses" element={<Warehouses warehouses={warehouses}/>}/>
        <Route path="warehouses/warehouse/:warehouseId" element={<WarehouseDetails/>} />
        <Route path="warehouses/warehouse" element={<NewWarehouse handleAddWarehouse={handleAddWarehouse}/>}/>
      </Routes>
    </>
  )
}

export default App
