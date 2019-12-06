import React from 'react'

const ToggleMenu = ({ isMenuOpen }) => {
  return isMenuOpen ? <div className='menu-lit pa3 ph3-ns'>Menu</div> : null
}

export default ToggleMenu
