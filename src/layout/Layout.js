import React from 'react'

import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavBar/NavigationBar'

import styled from 'styled-components'

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`
export const Layout = ({ children }) => {
  return (
    <Container>
      <NavigationBar />
      <main>
        <div style={{ marginTop: 69 }}>{children}</div>
      </main>
      <Footer />
    </Container>
  )
}
