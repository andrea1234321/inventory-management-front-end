import { useState } from "react";
import styles from "./NewInventory.module.css"

const NewInventory = (props) => {
  const [formData, setFormData] = useState({
    sku: '',
    category: 'Sweatshirt',
    size: 'S',
    location: '',
    warehouse: 0,
  });


  const handleChange = (evt) => {
    const {name, value} = evt.target
    setFormData({...formData, [name]: value})
  }
  console.log(formData)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddItem(formData)
  }

  return ( 
    <>
      <main >
      <div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <h1>New item</h1>
          <fieldset>
            <legend>SKU</legend>
            <input
              required
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              autoComplete="off"
            />
          </fieldset>
          <fieldset>
            <legend>Category</legend>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="Sweatshirt">Sweatshirt</option>
              <option value="Shirt">Shirt</option>
              <option value="Shorts">Shorts</option>
              <option value="Sweatpants">Sweatpants</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>size</legend>
            <select name="size" value={formData.size} onChange={handleChange} >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </fieldset>
            <fieldset>
              <legend>location</legend>
              <input
                required
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                autoComplete="off"
              />
            </fieldset>
            <fieldset>
              <legend>warehouse Id</legend>
              <select name="warehouse" onChange={handleChange}>
                {props.warehouses.map(warehouse => (
                  <option key={warehouse.id} value={formData.id} onChange={handleChange}>{warehouse.id}</option>
                ))}
              </select>
            </fieldset>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </main>
    </>
   );
}
 
export default NewInventory;
