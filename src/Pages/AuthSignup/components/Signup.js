// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { AuthRegister } from '../../../redux/actions/Register'
import './Signup.css'

const Signup = () => {
  // const [userSignup, setUserSignup] = useState(JSON.parse(localStorage.getItem('userSignup'))??{})
  const { error, loading, isRegister } = useSelector((state) => state.register)
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [formRegister, setFormRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    phone_number: '',
  })
  const handleSignup = (event) => {
    event.preventDefault()
    dispatch(AuthRegister(formRegister))
    console.log(error, 'sdfghj')
  }

  useEffect(() => {
    if (isRegister === true) {
      navigation('/login', { replace: true })
    } else {
      // alert("Email Already in Use")
      navigation('/signup', { replace: true })
    }
  }, [isRegister, navigation])

  return (
    <>
      <div className="row row-register">
        <div className="col-md-7 left-side">
          <div className="left-content">
            <img src="logo-font.svg" alt="logo-font" />
            <p>wait, watch, wow!</p>
          </div>
        </div>
        <div className="col-md-5 right-side">
          <div className="right-content">
            <p className="title">Sign Up</p>
            <p className="tagline">Fill your additional details</p>
            <form onSubmit={(event) => handleSignup(event)}>
              <div className="first-name">
                <label htmlFor="fname">First Name</label>
                <input
                  type={'firstname'}
                  placeholder="Write your first name"
                  onChange={(event) =>
                    setFormRegister((prevData) => ({
                      ...prevData,
                      firstname: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="last-name">
                <label htmlFor="lname">Last Name</label>
                <input
                  type={'lastname'}
                  placeholder="Write your last name"
                  onChange={(event) =>
                    setFormRegister((prevData) => ({
                      ...prevData,
                      lastname: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type={'phone_number'}
                  placeholder="Write your phone number"
                  onChange={(event) =>
                    setFormRegister((prevData) => ({
                      ...prevData,
                      phone_number: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type={'email'}
                  placeholder="Write your email"
                  onChange={(event) =>
                    setFormRegister((prevData) => ({
                      ...prevData,
                      email: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="username">
                <label htmlFor="username">Username</label>
                <input
                  type={'username'}
                  placeholder="Write your email"
                  onChange={(event) =>
                    setFormRegister((prevData) => ({
                      ...prevData,
                      username: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type={'password'}
                  placeholder="Write your password"
                  onChange={(event) =>
                    setFormRegister((prevData) => ({
                      ...prevData,
                      password: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div className="submit">
                {/* <button className="button btn-signup" >Sign Up</button> */}
                {loading ? (
                  <button className="button-signup" disabled={true}>
                    Loading..
                  </button>
                ) : (
                  <button className="button-signup">Sign Up</button>
                )}
                {error && <div>{error.message}</div>}
                <p>
                  Already have an account?{' '}
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    Sign in
                  </Link>
                  .
                </p>
              </div>
              <div className="signin"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
