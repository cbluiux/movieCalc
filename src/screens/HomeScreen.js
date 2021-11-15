import React, { useState } from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import MoviePreview from '../components/MoviePreview'
import MovieList from '../components/MovieList'
import StatRow from '../components/StatRow'
import { paramFormatter, filterMovies } from '../util'

const HomeScreen = () => {
  const [searchResult, setSearchResult] = useState({})
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const searchApi = async (term) => {
    setSearchResult({})

    if (error) {
      setError('')
    }

    setLoading('Loading...')

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=4464198b&t=${paramFormatter(term)}`
      )

      if (response.data.Error) {
        setLoading('')
        setError(response.data.Error)
        return
      }

      setLoading('')
      setSearchResult(response.data)
    } catch (e) {
      setLoading('')
      setError('Sorry, something went wrong! Please try your search again.')
      console.error(e)
    }
  }

  return (
    <ScrollView style={{ paddingTop: 100 }}>
      <Text style={styles.header}>Clair Movie Calculator</Text>

      <SearchBar onTermSubmit={searchApi} />

      {loading ? <Text>{loading}</Text> : null}

      {error ? <Text>{error}</Text> : null}

      {Object.keys(searchResult).length ? (
        <MoviePreview
          movie={searchResult}
          movies={movies}
          onAddSubmit={setMovies}
        />
      ) : null}

      <View>
        <StatRow message={'Box Office Mean:'} calc={}/>
        <StatRow message={'Box Office Standard Deviation:'} calc={}/>
        <StatRow message={'Median RT Score:'} calc={}/>
      </View>

      <MovieList
        movies={movies}
        filterMovies={filterMovies}
        onFilterSubmit={setMovies}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingLeft: 16,
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
})

export default HomeScreen
