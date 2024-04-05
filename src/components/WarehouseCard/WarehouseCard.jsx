import { Link } from 'react-router-dom';

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
        <td><Link to={`/warehouses/${warehouse.id}`} className="linkWord" onClick={handleAddCurrWarehouseItem}>{warehouse.id}</Link></td>
        <td>{warehouse.city}</td>
        <td>{warehouse.state.toUpperCase()}</td>
        <td>{currCapacity} / {warehouse.capacity}</td>
      </tr>
    </>
  );
}
 
export default WarehouseCard;
