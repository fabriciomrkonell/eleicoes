import React from 'react'
import Menu from './menu'

const Header = ({ candidateType, handleMenu }) => {
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <div className='header-title'>
          <h1 className='header-logo'>Schroeder Eleições 2016</h1>
        </div>
        <div className='header-menu'>
          <Menu candidateType={candidateType} handleMenu={handleMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header
