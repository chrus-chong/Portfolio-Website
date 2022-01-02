import React from 'react'

import Navbar from '../components/NavBar/Navbar.js'
import Footer from '../components/Footer/Footer.js'

import styled from 'styled-components'

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}
