import React, { useEffect, useState } from 'react'
import "./Admin.scss"

function Admin() {
    const [adminshow, setadminshow] = useState([])
    useEffect(() => {
        showadmin()
    }, [])

  async function showadmin() {
    const res = await fetch("http://localhost:5000/fidan")
    const data = await res.json();
    setadminshow(data)
        
    }
  async  function deleteadmin(id) {
    const res = await fetch("http://localhost:5000/fidan/"+id,{method:"delete"})
    const data = await res.json();
        showadmin()
    }
    
  return (
    <>
     <table>
        <thead>
            <tr>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>options</th>
            </tr>
        </thead>
        <tbody>
            {adminshow.map((x)=>(
                <tr key={x._id}>
                    <td><img src={x.image} alt="" /></td>
                    <td><h3>{x.name}</h3></td>
                    <td><h3>{x.price}</h3></td>
                    <td><button onClick={()=>deleteadmin(x._id)}>x</button></td>
                    <td></td>
                </tr>
            ))}
        </tbody>
     </table>

    </>
  )
}

export default Admin