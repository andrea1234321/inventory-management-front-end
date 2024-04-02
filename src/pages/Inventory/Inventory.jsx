import { Link } from "react-router-dom";

import InventoryCard from "../../components/InventoryCard/InventoryCard";
import styles from './Inventory.module.css'


const Inventory = (props) => {
  if (props.inventory.length === 0)
    return (
      <main>
        <h2>
          There is no inventory
        </h2>
        <Link to="/warehouses/new" className={styles.linkTag}>Create new warehouse
        </Link>
      </main>
    )
  return ( 
    <>
      <main className={styles.inventoryMain}>
        <Link className="linkTag">+</Link>
        <table className={styles.inventoryTable}>
          <thead>
            <tr>
              <th>Id</th>
              <th>SKU</th>
              <th>Category</th>
              <th>Size</th>
              <th>Location</th>
              <th>Warehouse</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.inventory.map(item => (
              <InventoryCard key={item.id} item={item}/>
            ))}
          </tbody>
        </table>
      </main>
    </>
   );
}
 
export default Inventory;
