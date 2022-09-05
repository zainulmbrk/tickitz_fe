import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link, useParams, useLocation } from 'react-router-dom'
import './MovieDetails.css'
import axios from 'axios'
import moment from 'moment'
const MovieDetails = () => {
  const { movies_id: movies_id } = useParams()
  const [details, setDetails] = useState([])
  // const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:9511/api/v5/movies/${movies_id}`,
    })
      .then((res) => {
        setDetails(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [details])
  return (
    <>
      <Navbar />
      {details?.map((item, index) => {
        return (
          <>
            <div className="container">
              <div className="row">
                <div className="row-movie-details">
                  <div className="card-left">
                    <div className="cover" key={index}>
                      <img
                        src={`http://localhost:9511/uploads/${item.cover}`}
                      />
                    </div>
                  </div>
                  <div className="card-right">
                    <div className="header">
                      <div className="title">
                        <p>{item.title}</p>
                      </div>
                      <div className="genres">
                        <p>{item.genre}</p>
                      </div>
                    </div>
                    <div className="info">
                      <div className="top">
                        <div className="release-date">
                          <span>Release Date</span>
                          <p>
                            {moment(`${item.release_date}`).format(
                              'MMMM DD, YYYY',
                            )}
                          </p>
                        </div>
                        <div className="director">
                          <span> Director</span>
                          <p>{item.director}</p>
                        </div>
                      </div>
                      <div className="bot">
                        <div className="duration">
                          <span>Duration</span>
                          <div className="lengthDuration">
                            <p>{item.hours} hours</p>
                            <p>{item.minutes} minutes</p>
                          </div>
                        </div>
                        <div className="casts">
                          <span>Casts</span>
                          <p>{item.casts}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: '#DEDEDE',
                      }}
                    />
                    <div className="synopsis">
                      <h3>Synopsis</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}
      <Footer />
    </>
  )
}

export default MovieDetails
