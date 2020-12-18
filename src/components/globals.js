import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.background.light};
  border-radius: 4px;
  box-shadow: 0px 1px 2px 1px #ccc;
`

export const Button = styled.button`
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.color.white.regular},
    ${(props) => props.theme.color.white.darker}
  );
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.color.black.lightest};
  height: 30px;
`
