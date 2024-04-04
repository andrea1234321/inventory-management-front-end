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

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddItem(formData)
  }

  return ( 
    <>
      <main >
        <h1>New item</h1>
        <div>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <fieldset>
              <legend>SKU</legend>
              <input
                required
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                placeholder="Enter the SKU"
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
              <legend>Size</legend>
              <select name="size" value={formData.size} onChange={handleChange} >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </fieldset>
              <fieldset>
                <legend>Location</legend>
                <input
                  required
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter the location"
                  autoComplete="off"
                />
              </fieldset>
              <fieldset>
                <legend>Warehouse ID</legend>
                <select name="warehouse" onChange={handleChange}>
                  <option value={formData.id}>--</option>
                  {props.warehouses.map(warehouse => (
                    <option key={warehouse.id} value={formData.id} onChange={handleChange}>{warehouse.id}</option>
                  ))}
                </select>
              </fieldset>
            <button type="submit" className="formButton">SUBMIT</button>
          </form>
        </div>
    </main>
    </>
   );
}
 
export default NewInventory;
