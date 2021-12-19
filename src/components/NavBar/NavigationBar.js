import React, { useState } from 'react'
import styled from 'styled-components'
import { Dropdown, Link, Logo, Menu, Nav } from './NavigationBarStyles'

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
      <Logo href=''>
        Chrus<span>Chong</span>
      </Logo>
      <Dropdown onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Dropdown>
      <Menu isOpen={isOpen}>
        <div className='linkDiv'>
          <Link href='#projects'> Projects </Link>
          <Link href='#experience'> Experience </Link>
          <Link href='#technologies'> Technologies </Link>
        </div>
      </Menu>
    </Nav>
  )
}

export default NavigationBar
