import React from 'react'
import styled from 'styled-components'
import { Container, Button } from 'components/globals'

const MovieNominations = ({ movieNominations, removeNomination }) => {
  const subsetList = (start, end) => {
    const movieList = movieNominations.slice(start, end)
    return (
      <NominationsContainer>
        {movieList.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year}){' '}
            <Button onClick={() => removeNomination(movie)}>Remove</Button>
          </li>
        ))}
      </NominationsContainer>
    )
  }

  return (
    <StyledContainer>
      <h3>Nominations</h3>
      {subsetList(0, 5)}
      {movieNominations.length > 5 && (
        <>
          <h3>The Extras</h3>
          {subsetList(5, movieNominations.length)}
        </>
      )}
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  padding: 10px 20px 10px 20px;
`

const NominationsContainer = styled.ul`
  li {
    padding-bottom: 10px;
  }
`

export default MovieNominations
