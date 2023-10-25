import React from 'react'
import { Link } from 'react-router-dom'

import { PiCatDuotone } from 'react-icons/pi'

const Logo = () => {
  return (
    <h1 className='header__logo'>
      <Link to='/'>
        <em><PiCatDuotone /></em>
        <span>anime<br /> youtube</span>
      </Link>
    </h1>
  )
}

export default Logo