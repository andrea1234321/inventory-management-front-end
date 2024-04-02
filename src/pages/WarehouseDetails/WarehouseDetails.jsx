import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as warehouseService from '../../services/warehouseService'

const WarehouseDetails = () => {
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
      <div>
        {/* apparel info */}
      </div>
    </main>
   );
}
 
export default WarehouseDetails;
