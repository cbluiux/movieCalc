import React from 'react'
import { ScrollView, View, StyleSheet, Image, Button } from 'react-native'

const MovieList = ({ movies, filterMovies, onFilterSubmit }) => {
  return (
    <ScrollView
      style={styles.rootList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
    >
      {movies.map((movie) => (
        <View key={movie.imdbID} style={styles.singleMovieML}>
          <Button
            onPress={() => filterMovies(movies, movie.imdbID, onFilterSubmit)}
            title={'X'}
          />
          <Image
            style={styles.tinyPoster}
            key={movie.imdbID}
            source={{ uri: movie.Poster }}
          />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  tinyPoster: {
    width: 100,
    height: 180,
  },
  singleMovieML: {
    paddingHorizontal: 16,
    width: '30%',
    flex: 1,
  },
  rootList: {
    flexDirection: 'row',
    marginVertical: 15,
  },
})

export default MovieList
