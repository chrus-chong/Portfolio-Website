import React from 'react'

import NavBar from '../components/NavBar/NavBar.js'
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
      <NavBar />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}
