import React from 'react'

const Navbar = () => {
  return (
    <div className='row'>
    <img className='nav-logo' alt='Logo' href='#' />
    <ul className='nav-ul'>
      <li><a href='#Home'>Home</a></li>
      <li><a href='#AboutMe'>About Me</a></li>
      <li><a href='#Projects'>Projects</a></li>
      <li><a href='#ContactMe'>Contact Me</a></li>
    </ul>
  </div>
  )
}

export default Navbar
