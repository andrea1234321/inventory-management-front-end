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
        <td>Edit</td>
        <td>Delete</td>
      </tr>
    </>
   );
}
 
export default InventoryCard;
