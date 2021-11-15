export const paramFormatter = (term) => {
  return term.split().join('+')
}

export const duplicateCheck = (movies, movieId) => {
  const duplicateArr = movies.filter((movie) => movie.imdbID === movieId)
  if (duplicateArr.length) {
    return true
  }
  return false
}

export const filterMovies = (movies, movieId, setMovies) => {
  const updatedMovies = movies.filter((movie) => movie.imdbID !== movieId)
  setMovies(updatedMovies)
}
