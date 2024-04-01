import WarehouseCard from "../../components/WarehouseCard/WarehouseCard"
import styles from './Warehouses.module.css'

const Warehouses = (props) => {
  if (props.warehouses.length === 0)
    return (
      <main>
        <h2>
          You have no warehouses
        </h2>
      </main>
    )
    return(
      <main>
        <div className={styles.warehouseContainer}>
          {props.warehouses.map((warehouse) => (
            <WarehouseCard key={warehouse.id} warehouse={warehouse} />
          ))}
        </div>
      </main>
  )
}

export default Warehouses
