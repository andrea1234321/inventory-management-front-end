import { Link } from 'react-router-dom';

import styles from './WarehouseCard.module.css';

const WarehouseCard = (props) => {
  return (
    <Link to={`/warehouses/warehouse/${props.warehouse.id}`} className={styles.warehouseContainer}>
      <p>{props.warehouse.id}</p>
      <p>{props.warehouse.city}, {props.warehouse.state}</p>
      <p>Capacity: {props.warehouse.capacity}</p>
    </Link>

  );
}
 
export default WarehouseCard;
