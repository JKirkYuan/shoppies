import React from 'react'
import styled from 'styled-components'

const Layout = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
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
