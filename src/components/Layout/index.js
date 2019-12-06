import React from 'react'
import Nav from './Nav'
import ToggleMenu from './ToggleMenu'

const Layout = ({ children, isMenuOpen, handleMenuToggle }) => {
  return (
    <>
      <Nav handleMenuToggle={handleMenuToggle} />
      <main className=''>
        {isMenuOpen ? (
          <ToggleMenu isMenuOpen={isMenuOpen} />
        ) : (
          <div className='pa3 ph3-ns'>{children} </div>
        )}
      </main>
    </>
  )
}

export default Layout
