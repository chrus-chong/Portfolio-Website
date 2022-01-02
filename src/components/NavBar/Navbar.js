import React, { useState } from 'react'
import Link from 'next/link'
import { FaFirstdraft, FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import logo from '../../../public/images/ChrusLogo.png'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className='navbar'>
        <Link href='/'>
          <a className='navbar-logo' onClick={closeMobileMenu}>
            <Image
              src={logo}
              layout='intrinsic'
              alt='ChrusLogo'
              width={50}
              height={50}
            />
          </a>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? (
            <FaTimes className='fa-times' color='#000000' />
          ) : (
            <FaBars className='fa-bars' color='#000000' />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link href='#about'>
              <a className='nav-links' onClick={closeMobileMenu}>
                About
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='#projects'>
              <a className='nav-links' onClick={closeMobileMenu}>
                Projects
              </a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='#technologies'>
              <a className='nav-links' onClick={closeMobileMenu}>
                Technologies
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
