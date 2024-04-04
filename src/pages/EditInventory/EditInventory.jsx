import { useState } from "react";
import { useLocation } from "react-router-dom";

const EditItem = (props) => {
  const {state} = useLocation()
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
    props.handleUpdateInventory(formData)
  }

  return ( 
    <>
      <main >
        <h1>Edit item: {formData.id}</h1>
        <div>
          <form onSubmit={handleSubmit} >
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
                <option value={state.category}>{state.category}</option>
                <option value="Sweatshirt">Sweatshirt</option>
                <option value="Shirt">Shirt</option>
                <option value="Shorts">Shorts</option>
                <option value="Sweatpants">Sweatpants</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>Size</legend>
              <select name="size" value={formData.size} onChange={handleChange} >
                <option value={state.size}>{state.size}</option>
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
                  autoComplete="off"
                />
              </fieldset>
              <fieldset>
                <legend>Warehouse Id</legend>
                <select name="warehouse" onChange={handleChange}>
                <option value={state.warehouse}>{state.warehouse}</option>
                  {props.warehouses.map(warehouse => (
                    <option key={warehouse.id} value={warehouse.id}>{warehouse.id}</option>
                  ))}
                </select>
              </fieldset>
            <button type="submit" className="formButton">Update</button>
          </form>
        </div>
      </main>
    </>

   );
}
 
export default EditItem;
