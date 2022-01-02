import React from 'react'

import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

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
