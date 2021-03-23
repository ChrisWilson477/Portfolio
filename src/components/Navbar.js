import React from 'react'

const Navbar = () => {
  return (
    <div className='Row'>
    <img className='Nav-logo' alt='Logo' href='#' />
    <ul className='Nav-ul'>
      <li><a href='#Home'>Home</a></li>
      <li><a href='#About Me'>About Me</a></li>
      <li><a href='#Projects'>Projects</a></li>
      <li><a href='#ContactMe'>Contact Me</a></li>
    </ul>
  </div>
  )
}

export default Navbar
