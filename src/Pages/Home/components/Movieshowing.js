import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetMovieShowing } from '../../../redux/actions/Movies'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import './Movieshowing.css'

const Loading = () => {
  return <div>Loading .....</div>
}
const Movieshowing = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.show)
  // console.log(data.data[0], 'movishowing')

  useEffect(() => {
    dispatch(GetMovieShowing())
  }, [dispatch])

  const config = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="container">
      <div className="row">
        <div className="row-movieshow">
          <div className="header">
            <p>Now Showing</p>
            <Link style={{ textDecoration: 'none' }} to="#">
              view all
            </Link>
          </div>
          {/* <div className="content"> */}
          <Slider {...config}>
            {!data?.data?.length ? (
              <Loading />
            ) : (
              data?.data?.map((movies, index) => {
                return (
                  <div className="cover" key={index}>
                    <img
                      src={`http://localhost:9511/uploads/${movies.cover}`}
                      alt={movies.title}
                      title={movies.title}
                    />
                  </div>
                )
              })
            )}
          </Slider>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Movieshowing
