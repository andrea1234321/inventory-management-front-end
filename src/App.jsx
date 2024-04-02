import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Warehouses from './pages/Warehouses/Warehouses.jsx'
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails'
import NewWarehouse from './pages/NewWarehouse/NewWarehouse.jsx'
import EditWarehouse from './pages/EditWarehouse/EditWarehouse.jsx'
import Inventory from './pages/Inventory/Inventory.jsx'

import * as warehouseService from './services/warehouseService'
import * as inventoryService from './services/inventoryService.js'

import './App.css'

function App() {
  const [warehouses, setWarehouses] = useState([])
  const [inventory, setInventory] = useState([])
  const navigate = useNavigate()

  //get all warehouses
  useEffect(() => {
    const fetchAllWarehouses = async () => {
      const data = await warehouseService.index()
      console.log('Warehouse Data from useeffect:', data)
      setWarehouses(data)
    }
    fetchAllWarehouses()
  }, [])

  //get inventory
  useEffect(() => {
    const fetchAllInventories = async () => {
      const data = await inventoryService.index()
      console.log('Inventory Data from useeffect:', data)
      setInventory(data)
    }
    fetchAllInventories()
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
    navigate(`/warehouses/${warehouseFormData.id}`)
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
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails handleDeleteWarehouse={handleDeleteWarehouse}/> } />
        <Route path="/warehouses/new" element={<NewWarehouse handleAddWarehouse={handleAddWarehouse}/>}/>
        <Route path="/warehouses/:warehouseId/edit" element={<EditWarehouse handleUpdateWarehouse={handleUpdateWarehouse}/>}/>
        <Route path="/inventory" element={<Inventory inventory={inventory}/>}/>
      </Routes>
    </>
  )
}

export default App
