import { Link } from "react-router-dom"

import WarehouseCard from "../../components/WarehouseCard/WarehouseCard"
import styles from './Warehouses.module.css'

const Warehouses = (props) => {
  if (props.warehouses.length === 0)
    return (
      <main>
        <h2>
          You have no warehouses
        </h2>
        <Link to="/warehouses/new" className="linkTag">Create new warehouse
        </Link>
      </main>
    )
    return(
      <main>
          <Link to="/warehouses/new" className="linkTag">+
          </Link>
        <div className={styles.warehouseContainer}>
          {props.warehouses.map((warehouse) => (
            <WarehouseCard key={warehouse.id} warehouse={warehouse} />
          ))}
        </div>
      </main>
  )
}

export default Warehouses
