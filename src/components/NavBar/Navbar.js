import React, { useState } from 'react'
import Link from 'next/link'
import { FaFirstdraft, FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <>
      <nav className='navbar'>
        <Link href='/'>
          <a className='navbar-logo' onClick={closeMobileMenu}>
            EPIC
            <FaFirstdraft className='fa-firstdraft' />
          </a>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? (
            <FaTimes className='fas fa-times' color='#FFFFFF' />
          ) : (
            <FaBars className='fas fa-bars' color='#FFFFFF' />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link href='#projects'>
              <a className='nav-links' onClick={closeMobileMenu}>
                Projects
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='#tech'>
              <a className='nav-links' onClick={closeMobileMenu}>
                Technologies
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='#experiences'>
              <a className='nav-links' onClick={closeMobileMenu}>
                Experiences
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
