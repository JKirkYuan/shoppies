import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.background.light};
  border-radius: 5px;
  box-shadow: 0px 1px 2px 1px #ccc;
`
