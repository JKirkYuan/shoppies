import React from 'react'
import styled from 'styled-components'
import { Container } from 'components/globals'

const MovieList = ({
  searchTerm,
  searchList,
  addNomination,
  movieNominations,
}) => {
  const includes = (movie) => {
    console.log(searchList)
    for (let i = 0; i < movieNominations.length; i++) {
      if (
        movieNominations[i].Title === movie.Title &&
        movieNominations[i].Year === movie.Year
      ) {
        return true
      }
    }
  }

  const validSearchList = searchList.map((movie) => {
    return {
      ...movie,
      canNominate: includes(movie),
    }
  })

  return (
    <StyledContainer>
      {searchTerm === '' ? (
        <h3>Enter a movie to see results</h3>
      ) : (
        <h3>Results for "{searchTerm}"</h3>
      )}
      <MovieListContainer>
        {validSearchList.map((movie) => (
          <li key={movie.Title + movie.Year}>
            {movie.Title} ({movie.Year}){' '}
            <button
              onClick={() => addNomination(movie)}
              disabled={movie.canNominate}
            >
              Nominate
            </button>
          </li>
        ))}
      </MovieListContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  padding: 10px 20px 10px 20px;
`

const MovieListContainer = styled.ul`
  li {
    padding-bottom: 10px;
  }
`

export default MovieList
