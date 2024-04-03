const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/inventory`

async function index() {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(itemFormData) {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemFormData),
    })
    return res.json()
  } catch (error) {
    console.log("error")
  }
}

async function update(itemFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${itemFormData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemFormData),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteItem(itemId){
  try {
    const res = await fetch(`${BASE_URL}/${itemId}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.log(error)
  }
}

export {index, create, update, deleteItem}
