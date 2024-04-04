import { useState } from "react";

import styles from './NewWarehouse.module.css'

const NewWarehouse = (props) => {
  const [formData, setFormData] = useState({
    city: '',
    state: '',
    capacity: '',
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setFormData({ ...formData, [name]: value })
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddWarehouse(formData)
  }

  return ( 
    <>
      <main >
        <h1>New Warehouse</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset >
              <legend >City</legend>
              <input
                required
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter city"
                autoComplete="off"
              />
            </fieldset>
            <fieldset>
              <legend>State</legend>
              <input
                required
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                maxLength={2}
                className={styles.input}
                autoComplete="off"
                placeholder="Enter two-letter state"
              />
            </fieldset>
            <fieldset>
              <legend>Capacity</legend>
              <input
                required
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter a number"
                autoComplete="off"
              />
            </fieldset>
            <button type="submit" className="formButton">SUBMIT</button>
          </form>
        </div>
      </main>
    </>
   );
}
 
export default NewWarehouse;
