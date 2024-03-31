import { useState, useEffect } from 'react'

import Warehouses from './pages/Warehouses/warehouses'

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
    // <Route 
    //   path='/warehouses'
    //   element={<Warehouses/>}/>
    <div>
      <Warehouses warehouses={warehouses}/>
    </div>
  )
}

export default App
