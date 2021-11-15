import React, { useState } from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'
import axios from 'axios'
import SearchBar from '../components/SearchBar'

const HomeScreen = () => {
  const [searchResult, setSearchResult] = useState({})
  const [movies, setMovies] = useState([])

  const paramFormatter = (term) => {
    return term.split().join('+')
  }

  const searchApi = async (term) => {
    setSearchResult({})

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=4464198b&t=${paramFormatter(term)}`
      )
      console.log(response.data, 'THIS IS RESPONSE.DATA')
      setSearchResult(response.data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <ScrollView style={{ padding: 100 }}>
      <Text>This is my Home Screen</Text>
      <SearchBar onTermSubmit={searchApi} />
    </ScrollView>
  )
}

export default HomeScreen
