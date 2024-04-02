import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import * as warehouseService from '../../services/warehouseService'

const WarehouseDetails = ({handleDeleteWarehouse}) => {
  const {warehouseId} = useParams()
  const [warehouse, setWarehouse] = useState({})

  useEffect(()=> {
    const fetchWarehouse = async () => {
      const data = await warehouseService.show(warehouseId)
      setWarehouse(data)
    }
    fetchWarehouse()
  }, [warehouseId])

  return ( 
    <main>
      <h1>{warehouse.city}, {warehouse.state}</h1>
      <p>Capacity: {warehouse.capacity}</p>
      <Link to={`/warehouses/warehouse/${warehouse.id}/edit`} state={warehouse}>Edit</Link>
      <Link to={`/warehouses`} onClick={() => handleDeleteWarehouse(warehouseId)}>Delete</Link>
      <div> 
        {/* apparel info */}
      </div>
    </main>
   );
}
 
export default WarehouseDetails;
