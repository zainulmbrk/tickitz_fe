import { combineReducers } from 'redux'
import { Fetch, FetchSort, FetchMovieShowing } from '../reducers/Movies'

import Auth from '../reducers/Auth'
import Register from '../reducers/Register'
import PostMovies from '../reducers/PostMovies'
const rootReducers = combineReducers({
  fetch: Fetch,
  fetchsort: FetchSort,
  post: PostMovies,
  auth: Auth,
  register: Register,
  show: FetchMovieShowing,
})
export default rootReducers
