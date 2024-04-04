import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Warehouses from './pages/Warehouses/Warehouses.jsx'
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails'
import NewWarehouse from './pages/NewWarehouse/NewWarehouse.jsx'
import EditWarehouse from './pages/EditWarehouse/EditWarehouse.jsx'
import Inventory from './pages/Inventory/Inventory.jsx'
import NewInventory from './pages/NewInventory/NewInventory.jsx'
import EditInventory from './pages/EditInventory/EditInventory.jsx'

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
      setWarehouses(data)
    }
    fetchAllWarehouses()
  }, [])

  //get inventory
  useEffect(() => {
    const fetchAllInventories = async () => {
      const data = await inventoryService.index()
      data.map(item => {
          if (item.warehouse !== null){
          return item.warehouse = item.warehouse.id
        }
        return item
      })
      setInventory(data)
    }
    fetchAllInventories()
  }, [])

  const handleAddWarehouse = async (warhouseFormData) => {
    const newWarehouse = await warehouseService.create(warhouseFormData)
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

  const handleAddItem = async (itemFormData) => {
    let warehouseId = parseInt(itemFormData.warehouse)
    const itemWarehouse = warehouses.filter(warehouse => warehouse.id === warehouseId)
    itemFormData.warehouse = itemWarehouse.reduce((prev, currVal) => Object.assign(prev, currVal), {})
    const newItem = await inventoryService.create(itemFormData)
    newItem.warehouse= newItem.warehouse.id
    const newInventory = [newItem, ...inventory]
    setInventory(newInventory)
    navigate('/inventory')
  }

  const handleUpdateInventory = async (itemFormData) => {
    let warehouseId = parseInt(itemFormData.warehouse)
    const itemWarehouse = warehouses.filter(warehouse => warehouse.id === warehouseId)
    itemFormData.warehouse = itemWarehouse.reduce((prev, currVal) => Object.assign(prev, currVal), {})
    const updatedItem = await inventoryService.update(itemFormData)
    updatedItem.warehouse= updatedItem.warehouse.id
    const updatedInventory = inventory.map((item) => (updatedItem.id === item.id ? updatedItem : item))
    setInventory(updatedInventory)
    navigate(`/inventory`)
  }

  const handleDeleteItem = async (itemId) => {
    await inventoryService.deleteItem(itemId)
    const updatedInventory= inventory.filter((item) => item.id !== parseInt(itemId))
    setInventory(updatedInventory)
  }

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/warehouses" element={<Warehouses warehouses={warehouses} inventory={inventory}/>}/>
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails handleDeleteWarehouse={handleDeleteWarehouse} handleDeleteItem={handleDeleteItem} inventory={inventory}/> } />
        <Route path="/warehouses/new" element={<NewWarehouse handleAddWarehouse={handleAddWarehouse}/>}/>
        <Route path="/warehouses/:warehouseId/edit" element={<EditWarehouse handleUpdateWarehouse={handleUpdateWarehouse}/>}/>
        <Route path="/inventory" element={<Inventory inventory={inventory} handleDeleteItem={handleDeleteItem}/>}/>
        <Route path="/inventory/new" element={<NewInventory handleAddItem={handleAddItem} warehouses={warehouses}/>}/>
        <Route path="/inventory/:inventoryId/edit" element={<EditInventory handleUpdateInventory={handleUpdateInventory} warehouses={warehouses}/>}/>
      </Routes>
    </>
  )
}

export default App
