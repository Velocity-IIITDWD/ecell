import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function DrawerButtons({link,name}) {
  return (
    <Link className='links' to={link}>
        <div className='drawer-button'>{name}</div>
    </Link>
  )
}

export default DrawerButtons