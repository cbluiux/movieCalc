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

const stringToNumber = (str) => {
  if (!str) {
    return ''
  }
  return parseInt(str.replace(/\D/g, ''))
}

export const boxOfficeMeanCalc = (moviesArr) => {
  if (!moviesArr.length) {
    return 0
  }

  const total = moviesArr.reduce((acc, curr) => {
    return acc + stringToNumber(curr.BoxOffice)
  }, 0)

  return total / moviesArr.length
}

export const currencyFormatter = (num) => {
  return new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(num)
}
