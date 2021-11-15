import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('')

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search Here"
        value={term}
        onChangeText={setTerm}
        onEndEditing={() => {
          onTermSubmit(term)
          setTerm('')
        }}
      />
    </View>
  )
}

export default SearchBar
