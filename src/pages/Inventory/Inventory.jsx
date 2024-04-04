import { Link } from "react-router-dom";

import InventoryCard from "../../components/InventoryCard/InventoryCard";
import styles from './Inventory.module.css'


const Inventory = (props) => {
  if (props.inventory.length === 0)
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
        <Link to="/inventory/new" className="linkTag">Add Item</Link>
        <table>
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
            {props.inventory.map(item => (
              <InventoryCard key={item.id} item={item} handleDeleteItem={props.handleDeleteItem}/>
            ))}
          </tbody>
        </table>
      </main>
    </>
   );
}
 
export default Inventory;
