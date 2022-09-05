const initialState = {
  loading: false,
  data: {
    // totalRow: null,
    // totalPage: null,
    results: [],
  },
  //   results: [],
  error: null,
}

export const Fetch = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_MOVIES_REQUEST':
      return { ...state, loading: true }
    case 'GET_MOVIES_ERROR':
      return { ...state, loading: false, error: action.payload }
    case 'GET_MOVIES_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null }
    default:
      return state
  }
}

const initialStates = {
  loading: false,
  data: {
    // totalRow: null,
    // totalPage: null,
    results: [],
  },
  //   results: [],
  error: null,
}

export const FetchSort = (state = initialStates, action = {}) => {
  switch (action.type) {
    case 'GET_SORTMOVIES_REQUEST':
      return { ...state, loading: true }
    case 'GET_SORTMOVIES_ERROR':
      return { ...state, loading: false, error: action.payload }
    case 'GET_SORTMOVIES_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null }
    default:
      return state
  }
}

const initialStatess = {
  loading: false,
  data: [
    // totalRow: null,
    // totalPage: null,
  ],
  //   results: [],
  error: null,
}

export const FetchMovieShowing = (state = initialStatess, action = {}) => {
  switch (action.type) {
    case 'GET_GETMOVIESHOWING_REQUEST':
      return { ...state, loading: true }
    case 'GET_GETMOVIESHOWING_ERROR':
      return { ...state, loading: false, error: action.payload }
    case 'GET_GETMOVIESHOWING_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null }
    default:
      return state
  }
}
