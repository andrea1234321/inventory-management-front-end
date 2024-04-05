import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import InventoryCard from "../../components/InventoryCard/InventoryCard";
import styles from './Inventory.module.css'


const Inventory = ({inventory, handleDeleteItem}) => {
  const [sortedInventory, setSortedInventory] = useState([]);

  useEffect(() => {
    setSortedInventory([...inventory]);
  }, [inventory]);

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
    }if (value === "warehouseId"){
      setSortedInventory([...sortedInventory].sort((a, b) => a.warehouse - b.warehouse))
    }
  }



  if (inventory.length === 0)
    return (
      <main>
        <h2>
          There are currently no items
        </h2>
        <Link to="/inventory/new" className="linkTag">Create new item
        </Link>
      </main>
    )
  return ( 
    <>
      <main className={styles.inventoryMain}>
        <div className="selectContainer">
          <Link to="/inventory/new" className="linkTag">Add Item</Link>
          <select name="sort" id="sort" onChange={handleSort} className={styles.select}>
            <option value="itemId">Item ID</option>
            <option value="sku" >SKU</option>
            <option value="category">Category</option>
            <option value="size">Size</option>
            <option value="location">Location</option>
            <option value="warehouseId">Warehouse ID</option>
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
              <th>Warehouse ID</th>
            </tr>
          </thead>
          <tbody>
            {sortedInventory.map(item => (
              <InventoryCard key={item.id} item={item} handleDeleteItem={handleDeleteItem}/>
            ))}
          </tbody>
        </table>
      </main>
    </>
   );
}
 
export default Inventory;
