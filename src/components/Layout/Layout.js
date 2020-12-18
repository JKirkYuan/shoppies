import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import 'static/fonts/fonts.css'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>{children}</StyledContainer>
    </ThemeProvider>
  )
}

const StyledContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  padding: 20px;
  background-color: ${(props) => props.theme.color.background.main};

  @media (min-width: ${(props) => props.theme.screen.xs}) {
    padding: 20px;
  }
  @media (min-width: ${(props) => props.theme.screen.sm}) {
    padding: 50px;
  }
  @media (min-width: ${(props) => props.theme.screen.lg}) {
    padding: 100px 150px 100px 150px;
  }
`

export default Layout
