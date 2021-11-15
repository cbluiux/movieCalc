import React from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'
import SearchBar from '../components/SearchBar'

const HomeScreen = () => {
  return (
    <ScrollView style={{ padding: 100 }}>
      <Text>This is my Home Screen</Text>
      <SearchBar />
    </ScrollView>
  )
}

export default HomeScreen
