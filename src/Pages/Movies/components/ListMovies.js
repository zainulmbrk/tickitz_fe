import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Link, Routes, useParams } from 'react-router-dom'
import './ListMovies.css'
import { FaSort } from 'react-icons/fa'
const Loading = () => {
  return <div>Loading .....</div>
}
const ListMovies = () => {
  const [listMovies, setListMovies] = useState({ data: {} })
  const [query, setQuery] = useState('')
  const [sortMovies, setSortMovies] = useState({ sortby: 'title' })
  console.log(sortMovies)
  useEffect(() => {
    // const { title = '', sortby = '' } = sortMovies
    // setListMovies((prevState) => ({
    //   ...prevState,
    // }))
    axios({
      method: 'GET',
      url: `http://localhost:9511/api/v5/movies/?title=${query}&sortby=${sortMovies.sortby}`,
    })
      .then((res) => {
        setListMovies(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [sortMovies, query])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row-list-movies">
            <div className="header">
              <div className="list">
                <p>List Movie</p>
              </div>
              <div className="sort-search">
                <div className="search">
                  <input
                    type="text"
                    placeholder="Search Movie Name..."
                    onChange={(event) => {
                      setQuery(event.target.value)
                    }}
                  />
                </div>
                <div className="sort">
                  <div className="btn-group " style={{ borderRadius: '5px' }}>
                    <button
                      type="button"
                      className="btnSort dropdown d-flex justify-content-between align-items-center gap-1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FaSort />
                      sort
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() =>
                            setSortMovies((prevState) => ({
                              ...prevState,
                              sortby: 'release_date',
                            }))
                          }
                        >
                          Release Date
                        </button>
                      </li>
                      <div
                        style={{
                          width: '100%',
                          height: '1px',
                          backgroundColor: '#DEDEDE',
                        }}
                      />
                      <li>
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={() =>
                            setSortMovies((prevState) => ({
                              ...prevState,
                              sortby: 'title',
                            }))
                          }
                        >
                          Title
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="results">
              <p>Search results for: {query}</p>
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
            <div className="list-movies-show">
              {!listMovies?.results?.length ? (
                <Loading />
              ) : (
                listMovies?.results?.map((movies, index) => (
                  <div className="cover" key={index}>
                    <img
                      src={`http://localhost:9511/uploads/${movies.cover}`}
                      alt={movies.title}
                      title={movies.title}
                    />
                    <div className="text-info">
                      <p className="title" alt={movies.title}>
                        {movies.title}
                      </p>
                      <p className="genre" alt={movies.gen_name}>
                        {movies.gen_name}
                      </p>
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
export default ListMovies
