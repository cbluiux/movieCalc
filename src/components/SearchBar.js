import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('')

  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        style={styles.inputStyle}
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

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
  },
})

export default SearchBar
