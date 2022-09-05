import React from 'react'
import './Jumbotron.css'
const Jumbotron = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row-jumbotron">
            <div className="card-left">
              <p className="tagline-home">Nearest Cinema, Newest Movie</p>
              <p className="find">Find out now!</p>
            </div>
            <div className="card-right-jumbotron">
              <div className="images-one">
                <img src="spiderman.svg" />
              </div>
              <div className="images-two">
                <img src="lionking.svg" />
              </div>
              <div className="images-three">
                <img src="blackwidow.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jumbotron
