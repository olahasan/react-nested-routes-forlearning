import React from 'react'
import { Link } from 'react-router-dom'

function Sheader() {
  return (
    <div>
        <Link to="/Menu/Meals">Meals</Link>
        <Link to="/Menu/Dessets">Dessets</Link>
        <Link to="/Menu/Healthy">Healthy</Link>
        <Link to="/Menu/Drinks">Drinks</Link>
    </div>
  )
}

export default Sheader