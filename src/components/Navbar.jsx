import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>Navbar
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}
