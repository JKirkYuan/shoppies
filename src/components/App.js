import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Container } from 'components/globals'
import Layout from 'components/Layout/Layout'
import SearchBar from 'components/SearchBar/SearchBar'
import MovieList from 'components/MovieList/MovieList'
import MovieNominations from 'components/MovieNominations/MovieNominations'

function App() {
  const [search, handleSearch] = React.useState('')
  const [state, setState] = React.useState({ searchList: [], nominations: [] })
  const apiKey = process.env.REACT_APP_API_KEY

  const addNomination = (movie) => {
    setState((prevState) => ({
      ...prevState,
      nominations: [...prevState.nominations, movie],
    }))
  }

  const removeNomination = (movie) => {
    setState((prevState) => ({
      ...prevState,
      nominations: prevState.nominations.filter(
        (nominations) => nominations !== movie
      ),
    }))
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const apiLink = `https://www.omdbapi.com/?s=${search}&apikey=${apiKey}&movie`
      await axios
        .get(apiLink)
        .then((res) => {
          setState((prevState) => ({
            ...prevState,
            searchList: res.data.Search,
          }))
        })
        .catch((error) => {
          console.log(error)
        })
    }
    if (search !== '') {
      fetchData()
    }
  }, [search])

  return (
    <Layout>
      <h1>The Shoppies</h1>
      <Container>
        <SearchBar handleSearch={handleSearch} />
      </Container>
      <ResultsSection>
        <MovieList
          searchTerm={search}
          searchList={state.searchList}
          movieNominations={state.nominations}
          addNomination={addNomination}
        />
        <MovieNominations
          movieNominations={state.nominations}
          removeNomination={removeNomination}
        />
      </ResultsSection>
    </Layout>
  )
}

const ResultsSection = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  grid-gap: 50px;
  max-width: 100%;
`

export default App
