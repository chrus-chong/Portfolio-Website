import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import styled from 'styled-components'

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`
export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
