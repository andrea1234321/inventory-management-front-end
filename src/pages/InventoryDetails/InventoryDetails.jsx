import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as inventoryService from "../../services/inventoryService"

import styles from "./InventoryDetails.module.css"

import Sweatshirt from "../../assets/images/sweatshirt.png"

const InventoryDetails = () => {
  const {inventoryId} = useParams()
  const [item, setItem] = useState([])
  // const images= [Sweatshirt]

  useEffect(()=> {
    const fetchItem = async () => {
      const data = await inventoryService.show(inventoryId)
      console.log(data)
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
        {/* <div>
          {images.map(image=> {
            console.log('IMAGE: ', images)
            if(image === item.category){
              return <img src={item.category} alt="image" />
            }
          })}
        </div> */}
        <div className={styles.inventoryContainer}>
          <h1>Item: {item.id}</h1>
          <h2><span>SKU:</span> {item.sku}</h2>
          <p>In warehouse {item.warehouse} at section {item.location}</p>
          <p><span>Category: </span>{item.category}</p>
          <p><span>Size: </span>{item.size}</p>
        </div>
      </main>
    </>
   );
}
 
export default InventoryDetails;
