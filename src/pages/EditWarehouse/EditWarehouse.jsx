import { useLocation } from 'react-router-dom'
import { useState } from "react";

const EditWarehouse = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    const {name, value} = evt.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateWarehouse(formData)
  }

  return ( 
    <main>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Edit Warehouse</h1>
          <fieldset>
            <legend>City</legend>
            <input
              required
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              // className={styles.input}
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
              // className={styles.input}
              autoComplete="off"
              placeholder="Two-letter State"
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
              // className={styles.input}
              autoComplete="off"
            />
          </fieldset>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </main>
  );
}
 
export default EditWarehouse;
