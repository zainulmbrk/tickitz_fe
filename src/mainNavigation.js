// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Movies, MovieDetails } from './Pages'
import Auth from './Pages/Auth'
import AuthSignup from './Pages/AuthSignup'
import PrivateRoute from './route/PrivateRoute'
import PublicRoute from './route/PublicRoute'

const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <PublicRoute>
              <Movies />
            </PublicRoute>
          }
        />
        <Route
          path="/movies/:title/:movies_id"
          component={MovieDetails}
          element={<MovieDetails />}
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Auth />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <AuthSignup />
            </PublicRoute>
          }
        ></Route>
        {/* <Route path='/movie-details' element=
          {<PrivateRoute><MovieDetails/></PrivateRoute>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation
