import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

const Banner = ({ visible, children }) => {
  const animate = useSpring({
    to: { opacity: visible ? 1 : 0 },
    from: { opacity: 0 },
    tension: 280,
    friction: 60,
  })

  return (
    <StyledContainer style={animate}>
      <Icon />
      <Textbox>{children}</Textbox>
    </StyledContainer>
  )
}

const StyledContainer = styled(animated.div)`
  background-color: ${(props) => props.theme.color.background.light};
  box-shadow: 0px 1px 2px 1px #ccc;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    width: 220px;
    height: 60px;
    border-radius: 5px;
    right: 10px;
    top: 92vh;
    justify-content: space-evenly;
  }
`

const Textbox = styled.div`
  margin-left: 5px;
  font-size: ${(props) => props.theme.font_size.regular};

  @media (min-width: ${(props) => props.theme.screen.md}) {
    margin-right: 5px;
  }
`

const Icon = styled(IoCheckmarkCircleOutline)`
  height: 25px;
  width: 25px;
  color: green;

  @media (min-width: ${(props) => props.theme.screen.md}) {
    height: 25px;
    width: 25px;
  }
`

export default Banner
