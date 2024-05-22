import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className="nav">
        <div className="nav_name">Navam men</div>
        <div className="nav_list">
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/add"}>Add</Link>
                <Link to={"/admin"}>Admin</Link>
                <Link to={"/basket"}>Basket</Link>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Nav