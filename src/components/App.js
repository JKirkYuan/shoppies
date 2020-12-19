import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Container } from 'components/globals'
import Layout from 'components/Layout/Layout'
import SearchBar from 'components/SearchBar/SearchBar'
import MovieList from 'components/MovieList/MovieList'
import MovieNominations from 'components/MovieNominations/MovieNominations'
import Banner from 'components/Banner/Banner'

function App() {
  const [search, handleSearch] = React.useState('')
  const [visible, handleVisible] = React.useState(false)
  const [easterEgg, handleEaster] = React.useState(false)
  const [state, setState] = React.useState({
    searchList: [],
    nominations: localStorage.getItem('nominations')
      ? JSON.parse(localStorage.getItem('nominations'))
      : [],
  })
  const [errorState, setErrorState] = React.useState(null)
  const apiKey = process.env.REACT_APP_API_KEY

  const addNomination = (movie) => {
    setState((prevState) => ({
      ...prevState,
      nominations: [...prevState.nominations, movie],
    }))

    if (state.nominations.length === 4) {
      handleVisible(true)
      setTimeout(() => handleVisible(false), 6000)
    }

    if (movie.Title === 'Blade Runner 2049') {
      handleEaster(true)
      setTimeout(() => handleEaster(false), 3000)
    }
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
      await axios.get(apiLink).then((res) => {
        if (!res.data.Error) {
          setState((prevState) => ({
            ...prevState,
            searchList: res.data.Search,
          }))
          setErrorState(null)
        } else {
          setErrorState(res.data.Error)
        }
      })
    }
    if (search !== '') {
      fetchData()
    }
  }, [search])

  React.useEffect(() => {
    localStorage.setItem('nominations', JSON.stringify(state.nominations))
  }, [state.nominations])

  return (
    <>
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
            hasError={errorState}
          />
          <MovieNominations
            movieNominations={state.nominations}
            removeNomination={removeNomination}
          />
        </ResultsSection>
      </Layout>
      <Banner visible={visible}>And that's 5! </Banner>
      <Banner visible={easterEgg}>
        My favorite movie! I wrote a paper on the ethics of replicants recently
      </Banner>
    </>
  )
}

const ResultsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  max-width: 100%;
`

export default App
