import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import WarehouseInventoryCard from "../../components/WarehouseInventoryCard/WarehouseInventoryCard";
import InventoryCard from "../../components/InventoryCard/InventoryCard";

import * as warehouseService from '../../services/warehouseService'


const WarehouseDetails = ({handleDeleteWarehouse, inventory, handleDeleteItem}) => {
  const {warehouseId} = useParams()
  const [warehouse, setWarehouse] = useState({})
  // const [currCapacity, setCurrCapacity] = useState(0)

  useEffect(()=> {
    const fetchWarehouse = async () => {
      const data = await warehouseService.show(warehouseId)
      setWarehouse(data)
    }
    fetchWarehouse()
  }, [warehouseId])
  
  return ( 
    <main>
      <h1>Warehouse: {warehouse.id}</h1>
      <h1>{warehouse.city}, {warehouse.state}</h1>
      <p>Capacity: {warehouse.capacity}</p>
      <Link to={`/warehouses/${warehouse.id}/edit`} state={warehouse}>Edit</Link>
      <Link to={`/warehouses`} onClick={() => handleDeleteWarehouse(warehouseId)}>Delete</Link>
      <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Size</th>
              <th>Location</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => {
              if(item.warehouse === parseInt(warehouseId)) return <WarehouseInventoryCard key={item.id} item={item} handleDeleteItem={handleDeleteItem}/>  
            }     
            )}
          </tbody>
        </table>
    </main>
   );
}
 
export default WarehouseDetails;
