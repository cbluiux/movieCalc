import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('')

  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
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
    marginVertical: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
})

export default SearchBar
