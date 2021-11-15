import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { duplicateCheck } from '../util'

const MoviePreview = ({ movie = {}, movies, onAddSubmit }) => {
  if (!movie) {
    return null
  }

  const rtRating =
    movie?.Ratings[1]?.Value ??
    'There is no Rotten Tomato rating for this movie!'

  return (
    <View style={styles.mainViewStyle}>
      <View style={{ width: '30%' }}>
        {!duplicateCheck(movies, movie.imdbID) ? (
          <Button
            onPress={() => onAddSubmit([...movies, movie])}
            title={'+'}
            style={styles.button}
          />
        ) : (
          <Text>{movie.Title} has been added!</Text>
        )}

        <Image
          style={styles.tinyPoster}
          key={movie.imdbID}
          source={{ uri: movie.Poster }}
        />
      </View>
      <View style={{ marginTop: 35, width: '65%' }}>
        <Text>Movie title: {movie.Title}</Text>
        <Text>Storyline: {movie.Plot}</Text>
        <Text>Total boxoffice sales: {movie.BoxOffice}</Text>
        <Text>Rotten Tomato rating: {rtRating}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tinyPoster: {
    width: 100,
    height: 180,
  },
  mainViewStyle: {
    paddingLeft: 16,
    flexDirection: 'row',
  },
  button: {
    alignSelf: 'flex-start',
  },
})

export default MoviePreview
