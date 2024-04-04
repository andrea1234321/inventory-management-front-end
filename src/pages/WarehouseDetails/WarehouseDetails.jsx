import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import WarehouseInventoryCard from "../../components/WarehouseInventoryCard/WarehouseInventoryCard";
import InventoryCard from "../../components/InventoryCard/InventoryCard";

import styles from "./WarehouseDetails.module.css"

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
    <>
      <main className={styles.main}>
        <h1 className={styles.h1}>Warehouse: {warehouse.id}</h1>
        <h2 className={styles.h2}>{warehouse.city}, {warehouse.state}</h2>
        <p>Capacity: {warehouse.capacity}</p>
        <div className={styles.buttonContainer}>
          <Link to={`/warehouses/${warehouse.id}/edit`} state={warehouse} className={styles.linkTag}>Edit</Link>
          <Link to={`/warehouses`} onClick={() => handleDeleteWarehouse(warehouseId)} className={styles.linkTag}>Delete</Link>
        </div>
        <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Size</th>
                <th>Location</th>
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
    </>
   );
}
 
export default WarehouseDetails;
