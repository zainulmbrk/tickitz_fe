import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Jumbotron from '../Home/components/Jumbotron'
import Movieshowing from '../Home/components/Movieshowing'
import Upcomingmovies from '../Home/components/Upcomingmovies'
import Footer from '../../components/Footer'
import { useDispatch } from 'react-redux'
import { GetMovies } from '../../redux/actions/Movies'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetMovies())
  }, [])
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Movieshowing />
      <Upcomingmovies />
      <Footer />
    </>
  )
}

export default Home

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <Jumbotron />
//       <Movieshowing />
//       <Upcomingmovies />
//       <Footer />
//     </>
//   );
// };

// export default Home;
