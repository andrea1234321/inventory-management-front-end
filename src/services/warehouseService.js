const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/warehouses`

async function index() {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(warehouseId){
  try{
    const res = await fetch(`${BASE_URL}/warehouse/${warehouseId}`)
    return res.json()
  }catch(error){
    console.log(error)
  }
}

async function create(warehouseFormData) {
  try {
    const res = await fetch(`${BASE_URL}/warehouse`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(warehouseFormData),
    })
    return res.json()
  } catch (error) {
    console.log("error")
  }
}

export {index, show, create}
