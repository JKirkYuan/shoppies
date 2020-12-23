import React from 'react'
import styled from 'styled-components'
import { Container, Button } from 'components/globals'
import {
  IoChevronForwardCircleOutline,
  IoChevronBackCircleOutline,
} from 'react-icons/io5'

const MovieList = ({
  searchTerm,
  searchList,
  addNomination,
  movieNominations,
  hasError,
  updatePage,
}) => {
  if (hasError) {
    return (
      <StyledContainer>
        <h3>{hasError}</h3>
      </StyledContainer>
    )
  }

  const includes = (movie) => {
    for (let i = 0; i < movieNominations.length; i++) {
      if (movieNominations[i].imdbID === movie.imdbID) {
        return true
      }
    }
  }

  return (
    <StyledContainer>
      <TitleContainer>
        <div>
          {searchTerm === '' ? (
            <h3>Enter a movie to see results</h3>
          ) : (
            <h3>Results for "{searchTerm}"</h3>
          )}
        </div>
        <PageButtonContainer>
          <BackButton onClick={() => updatePage(-1)} />
          <ForwardButton onClick={() => updatePage(1)} />
        </PageButtonContainer>
      </TitleContainer>
      <MovieListContainer>
        {searchList.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year}){' '}
            <Button
              onClick={() => addNomination(movie)}
              disabled={includes(movie)}
            >
              Nominate
            </Button>
          </li>
        ))}
      </MovieListContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  padding: 10px 20px 10px 20px;
`

const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const MovieListContainer = styled.ul`
  li {
    padding-bottom: 10px;
  }
`
const PageButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  margin: 0;
  width: 30%;
`

const BackButton = styled(IoChevronBackCircleOutline)`
  height: 30px;
  width: 30px;
  cursor: pointer;
`

const ForwardButton = styled(IoChevronForwardCircleOutline)`
  height: 30px;
  width: 30px;
  cursor: pointer;
`

export default MovieList
