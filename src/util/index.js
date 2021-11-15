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

// Did not create this function myself, found online.
// https://dustinpfister.github.io/2018/02/20/statistics-standard-deviation/
export const stdDeviation = (arr) => {
  if (!arr.length) {
    return 0
  }

  let m = boxOfficeMeanCalc(arr)
  return (
    Math.sqrt(
      arr.reduce(function (sq, n) {
        return sq + Math.pow(stringToNumber(n.BoxOffice) - m, 2)
      }, 0) /
        (arr.length - 1)
    ) || 0
  )
}
