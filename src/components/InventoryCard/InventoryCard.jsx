import { Link } from "react-router-dom";
import styles from './InventoryCard.module.css'

const InventoryCard = (props) => {
  return ( 
    <>
      <tr>
        <td><Link to={`/inventory/${props.item.id}`}>{props.item.id}</Link></td>
        <td>{props.item.sku}</td>
        <td>{props.item.category}</td>
        <td>{props.item.size}</td>
        <td>{props.item.location}</td>
        <td>{props.item.warehouse}</td>
        <td><Link to={`/inventory/${props.item.id}/edit`} state={props.item} warehouse={props.item} className={styles.linkTag}><i className="fa-regular fa-pen-to-square"></i></Link></td>
        <td><Link to={`/inventory`} onClick={() => props.handleDeleteItem(props.item.id)} className={styles.linkTag}><i className="fa-solid fa-trash-can"></i></Link></td>
      </tr>
    </>
   );
}
 
export default InventoryCard;
