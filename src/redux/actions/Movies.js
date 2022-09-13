import axios from 'axios'

//GET
const GetMoviesRequest = () => {
  return {
    type: 'GET_MOVIES_REQUEST',
  }
}

const GetMoviesSuccess = (data) => {
  return {
    type: 'GET_MOVIES_SUCCESS',
    payload: data,
  }
}

const GetMoviesError = (error) => {
  return {
    type: 'GET_MOVIES_ERROR',
    payload: error,
  }
}

//GET MOVIES BY ID
const GetSortMoviesRequest = () => {
  return {
    type: 'GET_SORTMOVIES_REQUEST',
  }
}

const GetSortMoviesSuccess = (data) => {
  return {
    type: 'GET_SORTMOVIES_SUCCESS',
    payload: data,
  }
}

const GetSortMoviesError = (error) => {
  return {
    type: 'GET_SORTMOVIES_ERROR',
    payload: error,
  }
}

//MOVIESHOWING
const GetMovieShowingRequest = () => {
  return {
    type: 'GET_GETMOVIESHOWING_REQUEST',
  }
}

const GetMovieShowingSuccess = (data) => {
  return {
    type: 'GET_GETMOVIESHOWING_SUCCESS',
    payload: data,
  }
}

const GetMovieShowingError = (error) => {
  return {
    type: 'GET_GETMOVIESHOWING_ERROR',
    payload: error,
  }
}

//POST
const PostMoviesRequest = () => {
  return {
    type: 'POST_MOVIES_REQUEST',
  }
}

const PostMoviesSuccess = (data) => {
  return {
    type: 'POST_MOVIES_SUCCESS',
    payload: data,
  }
}

const PostMoviesError = (error) => {
  return {
    type: 'POST_MOVIES_ERROR',
    payload: error,
  }
}

export const GetMovies = () => {
  return (dispatch) => {
    dispatch(GetMoviesRequest())
    axios({
      method: 'GET',
      url: `https://tickitzz.herokuapp.com/api/v5/movies`,
    })
      .then((res) => {
        dispatch(GetMoviesSuccess(res.data.data))
        // console.log(res.data.data)
      })
      .catch((err) => {
        dispatch(GetMoviesError(err))
      })
  }
}

//movieshowing
export const GetMovieShowing = () => {
  return (dispatch) => {
    dispatch(GetMovieShowingRequest())
    axios({
      method: 'GET',
      url: `https://tickitzz.herokuapp.com/api/v5/schedule`,
    })
      .then((res) => {
        dispatch(GetMovieShowingSuccess(res.data.data))
        // console.log(res.data.data)
      })
      .catch((err) => {
        dispatch(GetMovieShowingError(err))
      })
  }
}

//sort
export const GetSortMovies = (sortby) => {
  return (dispatch) => {
    dispatch(GetSortMoviesRequest())
    axios({
      method: 'GET',
      url: `https://tickitzz.herokuapp.com/api/v5/movies/?sortby=${sortby}`,
    })
      .then((res) => {
        dispatch(GetSortMoviesSuccess(res.data.data))
        // console.log(res.data.data)
      })
      .catch((err) => {
        dispatch(GetSortMoviesError(err))
      })
  }
}

export const PostMovies = (formAddData, token) => {
  return (dispatch) => {
    dispatch(PostMoviesRequest())
    axios({
      method: 'POST',
      url: 'https://tickitzz.herokuapp.com/api/v5/movies',
      data: formAddData,
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        dispatch(PostMoviesSuccess(res.data.data))
      })
      .catch((err) => {
        dispatch(PostMoviesError(err))
      })
  }
}
