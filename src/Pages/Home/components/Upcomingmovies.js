import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Upcomingmovies.css'
import { useDispatch, useSelector } from 'react-redux'
import { GetMovies } from '../../../redux/actions/Movies'

const Loading = () => {
  return <div>Loading .....</div>
}

const Upcomingmovies = () => {
  // const [upcoming, setUpcoming] = useState([])
  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: 'http://localhost:9511/api/v5/movies',
  //   }).then((res) => {
  //     setUpcoming(res.data.data)
  //   })
  // }, [])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetMovies())
  }, [])

  const { data } = useSelector((state) => state.fetch)
  console.log(data, 'ini')
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row-upcoming-movies">
            <div className="header">
              <p>Upcoming Movies</p>
              <Link style={{ textDecoration: 'none' }} to="#">
                view all
              </Link>
            </div>
            <div className="slides-show-month">
              <button>September</button>
              <button>October</button>
              <button>November</button>
              <button>December</button>
              <button>January</button>
              <button>February</button>
              <button>March</button>
              <button>April</button>
              <button>May</button>
              <button>June</button>
              <button>July</button>
              <button>August</button>
            </div>
            <div className="upcoming-movies-show">
              {!data?.results?.length ? (
                <Loading />
              ) : (
                data?.results?.map((movies, index) => (
                  <div className="cover" key={index}>
                    <img
                      src={`http://localhost:9511/uploads/${movies.cover}`}
                      alt={movies.title}
                      title={movies.title}
                    />
                    <div className="text-info">
                      <div style={{ height: '70px' }}>
                        <h5 className="title" alt={movies.title}>
                          {movies.title}
                        </h5>
                      </div>
                      <div
                        style={{
                          width: '100%',
                          height: '50px',
                        }}
                      >
                        <p className="genre" alt={movies.genre}>
                          {movies.genre}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/movies/${movies.title.replaceAll(' ', '-')}/${
                        movies.movies_id
                      }`}
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <button className="btn-details">Details</button>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Upcomingmovies