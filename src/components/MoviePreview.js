import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { duplicateCheck } from '../util'

const MoviePreview = ({ movie = {}, movies, onAddSubmit }) => {
  if (!movie) {
    return null
  }

  return (
    <View style={styles.viewStyle}>
      {!duplicateCheck(movies, movie.imdbID) ? (
        <Image
          style={styles.tinyPoster}
          key={movie.imdbID}
          source={{ uri: movie.Poster }}
        ></Image>
      ) : (
        <Text>{movie.Title} has been added!</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  tinyPoster: {
    width: 100,
    height: 180,
  },
  viewStyle: {
    paddingLeft: 16,
  },
})

export default MoviePreview
