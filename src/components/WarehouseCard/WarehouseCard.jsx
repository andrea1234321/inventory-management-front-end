import { Link } from 'react-router-dom';

import styles from './WarehouseCard.module.css';
import { useEffect, useState } from 'react';

const WarehouseCard = ({warehouse, inventory}) => {
  // const [currCapacity, setCurrCapacity] = useState(0)

  // useEffect(() => {
  //   const setCurrentCapacity = () => {
  //     inventory.map((item) => {
  //       console.log("ITEM: ", item)
  //       if(item.warehouse === parseInt(warehouse.id)){
  //         setCurrCapacity(currCapacity +1)
  //         console.log("CURR CAPACITY: ", currCapacity, warehouse.id)
  //       }
  //     })
  //   }
  //   setCurrentCapacity()
  // }, [inventory])


  return (
    <>
        {/* <table>
          <thead>
            <tr>
              <th>Warehouse ID:</th>
              <th>City</th>
              <th>State</th>
              <th>Capacity</th>
              <th></th>
            </tr>
          </thead>
          <tbody> */}
            {/* <Link to={`/warehouses/${warehouse.id}`} className={styles.warehouseContainer}> */}
            <tr>
              <td><Link to={`/warehouses/${warehouse.id}`} className={styles.warehouseContainer}>{warehouse.id}</Link></td>
              <td><Link to={`/warehouses/${warehouse.id}`} className={styles.warehouseContainer}>{warehouse.city}</Link></td>
              <td><Link to={`/warehouses/${warehouse.id}`} className={styles.warehouseContainer}>{warehouse.state}</Link></td>
              <td><Link to={`/warehouses/${warehouse.id}`} className={styles.warehouseContainer}>{warehouse.capacity}</Link></td>
            </tr>
              {/* </Link> */}
          {/* </tbody>
        </table> */}
        {/* <p>{warehouse.city}, {warehouse.state}</p>
        <p>Capacity: {warehouse.capacity}</p> */}
    </>
  );
}
 
export default WarehouseCard;
