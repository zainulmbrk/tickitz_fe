// import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AuthLogin } from '../../../redux/actions/Auth'
// import Home from "../../Home";
import './Login.css'
// import background from "./public/bg-image.png";

const Login = ({ props }) => {
  // const [userLogin, setUserLogin] = useState(JSON.parse(localStorage.getItem('userLogin'))??{})
  const { data, error, loading, isLogin } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: '',
  })

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(AuthLogin(formLogin))
  }

  useEffect(() => {
    if (isLogin === true) {
      navigation('/', { replace: true })
    } else {
      navigation('/login', { replace: true })
    }
  }, [])

  return (
    <>
      <div className="row row-login">
        <div className="col-md-7 left-side">
          <div className="left-content">
            <img src="logo-font.svg" alt="logo-font" />
            <p>wait, watch, wow!</p>
          </div>
        </div>
        <div className="col-md-5 right-side">
          <div className="right-content">
            {/* <div className="logo-mobile">
              <img src="logo.svg" alt="logo" />
            </div> */}
            <p className="title">Sign In</p>
            <p className="tagline">
              Sign in with your data that you entered during <br />
              your registration
            </p>
            <form onSubmit={(event) => handleLogin(event)}>
              <div className="email-login">
                <label htmlFor="email">Email</label>
                <input
                  type={'email'}
                  placeholder="Write your email"
                  required
                  onChange={(event) =>
                    setFormLogin((prevData) => ({
                      ...prevData,
                      email: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="password-login">
                <label htmlFor="password">Password</label>
                <input
                  type={'password'}
                  placeholder="Write your password"
                  required
                  onChange={(event) =>
                    setFormLogin((prevData) => ({
                      ...prevData,
                      password: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="submit-login">
                {/* <button className="button btn-signup" onClick={()=> handleLogin()}>Sign In</button> */}
                {loading ? (
                  <button className="button-login" disabled={true}>
                    Loading..
                  </button>
                ) : (
                  <button className="button-login">Login</button>
                )}
                {error && <div>{error.message}</div>}
                <p>
                  Forgot your password?{' '}
                  <Link to="#" style={{ textDecoration: 'none' }}>
                    Reset now
                  </Link>
                </p>
                <p>
                  Don't have an account?{' '}
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                    Sign Up
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

export default Login
