import { Link } from "react-router-dom";

const InventoryCard = (props) => {
  return ( 
    <>
      <tr>
        <td>{props.item.id}</td>
        <td>{props.item.sku}</td>
        <td>{props.item.category}</td>
        <td>{props.item.size}</td>
        <td>{props.item.location}</td>
        <td>{props.item.warehouse}</td>
        <td><Link to={`/inventory/${props.item.id}/edit`} state={props.item} warehouse={props.item}>Edit</Link></td>
        <td><Link to={`/inventory`} onClick={() => props.handleDeleteItem(props.item.id)}>Delete</Link></td>
      </tr>
    </>
   );
}
 
export default InventoryCard;
