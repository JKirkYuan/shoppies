import React from 'react'
import styled from 'styled-components'
import { Container, Button } from 'components/globals'

const MovieNominations = ({ movieNominations, removeNomination }) => {
  return (
    <StyledContainer>
      <h3>Nominations</h3>
      <NominationsContainer>
        {movieNominations.map((movie, i) => {
          if (i <= 4)
            return (
              <li key={movie.Title + movie.Year}>
                {movie.Title} ({movie.Year}){' '}
                <Button onClick={() => removeNomination(movie)}>Remove</Button>
              </li>
            )
        })}
      </NominationsContainer>
      {movieNominations.length > 5 && (
        <>
          <h3>The Extras</h3>
          <NominationsContainer>
            {movieNominations.map((movie, i) => {
              if (i > 4)
                return (
                  <li key={movie.Title + movie.Year}>
                    {movie.Title} ({movie.Year}){' '}
                    <Button onClick={() => removeNomination(movie)}>
                      Remove
                    </Button>
                  </li>
                )
            })}
          </NominationsContainer>
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
