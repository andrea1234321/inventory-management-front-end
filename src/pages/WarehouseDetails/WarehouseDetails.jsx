import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import WarehouseInventoryCard from "../../components/WarehouseInventoryCard/WarehouseInventoryCard";
import InventoryCard from "../../components/InventoryCard/InventoryCard";

import styles from "./WarehouseDetails.module.css"

import * as warehouseService from '../../services/warehouseService'


const WarehouseDetails = ({handleDeleteWarehouse, inventory, handleDeleteItem}) => {
  const {warehouseId} = useParams()
  const [warehouse, setWarehouse] = useState({})
  const [currCapacity, setCurrCapacity] = useState(0)
  const [sortedInventory, setSortedInventory] = useState([]);

  useEffect(() => {
    setSortedInventory([...inventory]);
  }, [inventory]);


  useEffect(()=> {
    const fetchWarehouse = async () => {
      const data = await warehouseService.show(warehouseId)
      setWarehouse(data)
    }
    fetchWarehouse()
  }, [warehouseId])
  
  useEffect(() => {
    let newCapacity = 0;
    inventory.forEach((item) => {
      if(item.warehouse === parseInt(warehouseId)) {
        newCapacity += 1;
      }
    });
    setCurrCapacity(newCapacity);
  }, [inventory, warehouseId]);
  
  const handleSort = (evt) => {
    const {value} = evt.target
    if(value === "itemId"){
      setSortedInventory([...sortedInventory].sort((a, b) => a.id - b.id))
    }if (value === "sku"){
      setSortedInventory([...sortedInventory].sort((a, b) => a.sku.localeCompare(b.sku)))
    }if (value === "category"){
      setSortedInventory([...sortedInventory].sort((a, b) => a.category.localeCompare(b.category)))
    }if (value === "size"){
      setSortedInventory([...sortedInventory].sort((a, b) => b.size.localeCompare(a.size)))
    }if (value === "location"){
      setSortedInventory([...sortedInventory].sort((a, b) => a.location.localeCompare(b.location)))
    }
  }
  if(currCapacity)
    return ( 
      <>
        <main>
          <h1 className={styles.h1}>Warehouse: {warehouse.id}</h1>
          <h2 className={styles.h2}>{warehouse.city}, {warehouse.state}</h2>
          <p>{currCapacity === warehouse.capacity ? <p>Warehouse is Full</p> : <p>Capacity: {currCapacity}/{warehouse.capacity}</p>  }</p>
          <div className={styles.buttonContainer}>
            <Link to={`/warehouses/${warehouse.id}/edit`} state={warehouse} className={styles.linkTag}>Edit</Link>
            <Link to={`/warehouses`} onClick={() => handleDeleteWarehouse(warehouseId)} className={styles.linkTag}>Delete</Link>
          </div>
          <div className="selectContainer">
            {currCapacity === warehouse.capacity ? <Link to="/inventory/new" className="disabledLinkTag">Add Item</Link> : <Link to="/inventory/new" className="linkTag">Add Item</Link>}
            <select name="sort" id="sort" onChange={handleSort} className={styles.select}>
              <option value="itemId">Item ID</option>
              <option value="sku" >SKU</option>
              <option value="category">Category</option>
              <option value="size">Size</option>
              <option value="location">Location</option>
            </select>
          </div>
          <table className={styles.table}>
              <thead>
                <tr>
                  <th>Item ID</th>
                  <th>SKU</th>
                  <th>Category</th>
                  <th>Size</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {sortedInventory.map((item) => {
                  if(item.warehouse === parseInt(warehouseId)) return <WarehouseInventoryCard key={item.id} item={item} handleDeleteItem={handleDeleteItem}/>  
                }     
                )}
              </tbody>
            </table>
        </main>
      </>
    )
    return(
      <>
        <main>
          <h1 className={styles.h1}>Warehouse: {warehouse.id}</h1>
          <h2 className={styles.h2}>{warehouse.city}, {warehouse.state}</h2>
          <p>Capacity: {currCapacity}/{warehouse.capacity}</p>
          <div className={styles.buttonContainer}>
            <Link to={`/warehouses/${warehouse.id}/edit`} state={warehouse} className={styles.linkTag}>Edit</Link>
            <Link to={`/warehouses`} onClick={() => handleDeleteWarehouse(warehouseId)} className={styles.linkTag}>Delete</Link>
          </div>
          <p>You do not have any current items in this warehouse!</p>
          <p>If you would like to add an item, click on the button below:</p>
          <Link to="/inventory/new" className="linkTag">Add Item</Link>
        </main>
      </>
    );
}
 
export default WarehouseDetails;
