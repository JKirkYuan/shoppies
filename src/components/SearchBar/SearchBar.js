import React from 'react'
import styled from 'styled-components'
import { IoIosSearch } from 'react-icons/io'

const SearchBar = ({ handleSearch }) => {
  const [searchUrl, searchUrlUpdated] = React.useState('')
  const debounce = (func, wait) => {
    let timeout

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }

      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSearch(searchUrl)
      }}
    >
      <StyledInputContainer>
        <SearchTitle>Movie title</SearchTitle>
        <StyledSpan>
          <StyledSearchIcon onClick={() => handleSearch(searchUrl)} />
        </StyledSpan>
        <StyledInput
          placeholder="Blade Runner 2049..."
          value={searchUrl}
          onChange={(e) => {
            searchUrlUpdated(e.target.value)
          }}
        />
      </StyledInputContainer>
    </form>
  )
}

const StyledInputContainer = styled.div`
  position: relative;
  padding: 25px;
`

const SearchTitle = styled.div`
  font-size: ${(props) => props.theme.font_size.regular};
`
const StyledInput = styled.input`
  width: 100%;
  font-size: 0.9em;
  padding: 0.8em 1.4em 0.8em 2.5em;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid grey;
  font-size: ${(props) => props.theme.font_size.small};
`

const StyledSpan = styled.span`
  position: absolute;
  left: 2em;
  top: 3.9em;
`

const StyledSearchIcon = styled(IoIosSearch)`
  fill: grey;
  padding-top: 2px;
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
`

export default SearchBar
