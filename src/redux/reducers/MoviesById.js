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

const Fetch = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_MOVIESBYID_REQUEST':
      return { ...state, loading: true }
    case 'GET_MOVIESBYID_ERROR':
      return { ...state, loading: false, error: action.payload }
    case 'GET_MOVIESBYID_SUCCESS':
      return { ...state, loading: false, data: action.payload, error: null }
    default:
      return state
  }
}
export default Fetch
