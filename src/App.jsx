import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Warehouses from './pages/Warehouses/Warehouses.jsx'
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails'
import NewWarehouse from './pages/NewWarehouse/NewWarehouse.jsx'
import EditWarehouse from './pages/EditWarehouse/EditWarehouse.jsx'

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

  const handleUpdateWarehouse = async (warehouseFormData) => {
    const updatedWarehouse = await warehouseService.update(warehouseFormData)
    const updatedWarehouses = warehouses.map((warehouse) => (warehouseFormData.id === warehouse.id ? updatedWarehouse : warehouse))
    setWarehouses(updatedWarehouses)
    navigate(`/warehouses/warehouse/${warehouseFormData.id}`)
  }

  const handleDeleteWarehouse = async (warehouseId) => {
    await warehouseService.deleteWarehouse(warehouseId)
    const updatedWarehouses= warehouses.filter((warehouse) => warehouse.id !== parseInt(warehouseId))
    setWarehouses(updatedWarehouses)
    navigate('/warehouses')
  }

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/warehouses" element={<Warehouses warehouses={warehouses}/>}/>
        <Route path="warehouses/warehouse/:warehouseId" element={<WarehouseDetails handleDeleteWarehouse={handleDeleteWarehouse}/> } />
        <Route path="warehouses/warehouse" element={<NewWarehouse handleAddWarehouse={handleAddWarehouse}/>}/>
        <Route path="warehouses/warehouse/:warehouseId/edit" element={<EditWarehouse handleUpdateWarehouse={handleUpdateWarehouse}/>}/>
      </Routes>
    </>
  )
}

export default App
