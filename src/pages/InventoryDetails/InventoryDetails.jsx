import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as inventoryService from "../../services/inventoryService"

import styles from "./InventoryDetails.module.css"


const InventoryDetails = () => {
  const {inventoryId} = useParams()
  const [item, setItem] = useState([])

  useEffect(()=> {
    const fetchItem = async () => {
      const data = await inventoryService.show(inventoryId)
      if(data.warehouse !== null){
        data.warehouse = data.warehouse.id
      }
      return setItem(data)
    }
    fetchItem()
  }, [inventoryId])

  return ( 
    <>
      <main>
        <div className={styles.inventoryContainer}>
          <h1>Item: {item.id}</h1>
          <h2><span>SKU:</span> {item.sku}</h2>
          <p><span>Category: </span>{item.category}</p>
          <p><span>Size: </span>{item.size}</p>
          <p>Warehouse {item.warehouse}: section {item.location}</p>
        </div>
      </main>
    </>
   );
}
 
export default InventoryDetails;
