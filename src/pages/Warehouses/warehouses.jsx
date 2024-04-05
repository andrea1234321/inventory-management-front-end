import { Link } from "react-router-dom"

import WarehouseCard from "../../components/WarehouseCard/WarehouseCard"
import styles from './Warehouses.module.css'
import { useState,useEffect } from "react"

const Warehouses = ({warehouses, inventory, handleAddCurrWarehouseItem}) => {
  const [sortedWarehouses, setSortedWarehouses] = useState([]);

  useEffect(() => {
    setSortedWarehouses([...warehouses]);
  }, [warehouses]);

  const handleSort = (evt) => {
    const {value} = evt.target
    if(value === "warehouseId"){
      setSortedWarehouses([...sortedWarehouses].sort((a, b) => a.id - b.id));
    }if (value === "city"){
      setSortedWarehouses([...sortedWarehouses].sort((a, b) => a.city.localeCompare(b.city)));
    }if (value === "state"){
      setSortedWarehouses([...sortedWarehouses].sort((a, b) => a.state.localeCompare(b.state)));
    }
  }



  if (warehouses.length === 0)
    return (
      <main >
        <h2>
          You have no warehouses
        </h2>
        <Link to="/warehouses/new" className="linkTag">Create new warehouse
        </Link>
      </main>
    )
    return(
      <main >
        <div className="selectContainer">
          <Link to="/warehouses/new" className="linkTag">Add Warehouse</Link>
          <select name="sort" id="sort" onChange={handleSort} className={styles.select}>
            <option value="sortBy">Sort By:</option>
            <option value="warehouseId">Warehouse ID</option>
            <option value="city" >City</option>
            <option value="state">State</option>
          </select>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Warehouse ID </th>
              <th>City</th>
              <th>State</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            <>
              {sortedWarehouses.map((warehouse) => (
                  <WarehouseCard key={warehouse.id} warehouse={warehouse} inventory={inventory} handleAddCurrWarehouseItem={handleAddCurrWarehouseItem}/>
              ))}
            </>   
          </tbody>
        </table>
      </main>
  )
}

export default Warehouses
