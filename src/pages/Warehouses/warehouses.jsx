import { Link } from "react-router-dom"

import WarehouseCard from "../../components/WarehouseCard/WarehouseCard"
import styles from './Warehouses.module.css'

const Warehouses = ({warehouses, inventory}) => {


  if (warehouses.length === 0)
    return (
      <main className={styles.main}>
        <h2>
          You have no warehouses
        </h2>
        <Link to="/warehouses/new" className="linkTag">Create new warehouse
        </Link>
      </main>
    )
    return(
      <main className={styles.main}>
          <Link to="/warehouses/new" className="linkTag">Create New Warehouse</Link>
          <table>
          <thead>
            <tr>
              <th>Warehouse ID</th>
              <th>City</th>
              <th>State</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            <>
              {warehouses.map((warehouse) => (
                  <WarehouseCard key={warehouse.id} warehouse={warehouse} inventory={inventory}/>
              ))}
            </>   
          </tbody>
        </table>
      </main>
  )
}

export default Warehouses
