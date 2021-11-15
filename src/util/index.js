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

export const medianRating = (movies) => {
  if (!movies.length) {
    return -1
  }

  const arrOfRatings = movies.reduce((acc, curr) => {
    acc.push(stringToNumber(curr?.Ratings[1]?.Value))
    return acc
  }, [])

  if (!arrOfRatings.length) {
    return -1
  }

  arrOfRatings.sort((a, b) => {
    return a - b
  })

  if (!(arrOfRatings.length % 2)) {
    const left = arrOfRatings.length / 2 - 1
    const right = arrOfRatings.length / 2
    const total = arrOfRatings[left] + arrOfRatings[right]

    return total / 2
  }

  const mid = Math.ceil(arrOfRatings.length / 2 - 1)
  return arrOfRatings[mid]
}
