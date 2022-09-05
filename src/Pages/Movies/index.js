import React from 'react'
import Navbar from '../../components/Navbar'
// import MovieDetails from "./components/MovieDetails";
// import Showtimes from "./components/Showtimes";
import ListMovies from './components/ListMovies'
import Footer from '../../components/Footer'

const Movies = () => {
  return (
    <>
      <Navbar />
      {/* <MovieDetails/>
    <Showtimes/> */}
      {/* <AddMovies /> */}
      <ListMovies />
      <Footer />
    </>
  )
}

export default Movies
