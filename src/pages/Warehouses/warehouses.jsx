const Warehouses = (props) => {
  return(
    <>
      <div>{props.warehouses.map((warehouse) => (
        <li key={warehouse.id}>
          <p>{warehouse.city}</p>
          <p>{warehouse.state}</p>
          <p>{warehouse.capacity}</p>
        </li>
      ))}</div>
    </>
  )
}

export default Warehouses
