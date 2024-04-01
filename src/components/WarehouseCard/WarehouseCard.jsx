import { Link } from 'react-router-dom';

import styles from './WarehouseCard.module.css';

const WarehouseCard = (props) => {
  return (
    <div className={styles.warehouseContainer}>
      <Link to={`/warehouses/warehouse/${props.warehouse.id}`}>
        <p>{props.warehouse.city}, {props.warehouse.state}</p>
        <p>Capacity: {props.warehouse.capacity}</p>
      </Link>
    </div>
  );
}
 
export default WarehouseCard;
