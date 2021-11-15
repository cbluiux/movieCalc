import React, { useState } from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'
import axios from 'axios'
import SearchBar from '../components/SearchBar'

const HomeScreen = () => {
  const [searchResult, setSearchResult] = useState({})
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const paramFormatter = (term) => {
    return term.split().join('+')
  }

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
    <ScrollView style={{ padding: 100 }}>
      <Text>This is my Home Screen</Text>
      <SearchBar onTermSubmit={searchApi} />
      {loading ? <Text>{loading}</Text> : null}
      {error ? <Text>{error}</Text> : null}
    </ScrollView>
  )
}

export default HomeScreen
