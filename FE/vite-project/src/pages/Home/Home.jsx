import React, { useEffect, useState } from 'react'
import './Home.scss'
function Home() {
  const [products, setproducts] = useState([])
  useEffect(() => {
    showProducts()
  }, [])

async  function showProducts() {
      const res = await fetch("http://localhost:5000/fidan")  
      const data =await res.json()
      setproducts(data)
  }
  
  return (
    <>
<div className="cards">
  {products.map((x)=>(
    <div className="card" key={x._id}>
      <img src={x.image} alt="" />
      <h3>{x.name}</h3>
      <p>${x.price}</p>
      <button >Add Basket</button>
      <button>Detail</button>

    </div>
  ))}
</div>
    </>
  )
}

export default Home