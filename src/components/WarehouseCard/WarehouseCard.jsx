import { Link } from 'react-router-dom';

import styles from './WarehouseCard.module.css';
import { useEffect, useState } from 'react';

const WarehouseCard = ({warehouse, inventory, handleAddCurrWarehouseItem}) => {
  const [currCapacity, setCurrCapacity] = useState(0)

  useEffect(() => {
    let newCapacity = 0;
    inventory.forEach((item) => {
      if(item.warehouse === parseInt(warehouse.id)) {
        newCapacity += 1;
      }
    });
    setCurrCapacity(newCapacity);
  }, [inventory, warehouse.id]);
  


  return (
    <>
      <tr>
        <td><Link to={`/warehouses/${warehouse.id}`} className={styles.warehouseContainer} onClick={handleAddCurrWarehouseItem}>{warehouse.id}</Link></td>
        <td><Link to={`/warehouses/${warehouse.id}`} className={styles.warehouseContainer}>{warehouse.city}</Link></td>
        <td><Link to={`/warehouses/${warehouse.id}`} className={styles.warehouseContainer}>{warehouse.state.toUpperCase()}</Link></td>
        <td><Link to={`/warehouses/${warehouse.id}`} className={styles.warehouseContainer}>{currCapacity} / {warehouse.capacity}</Link></td>
      </tr>
    </>
  );
}
 
export default WarehouseCard;
