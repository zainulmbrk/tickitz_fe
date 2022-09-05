import React from 'react'
// import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { AuthLogout } from '../redux/actions/Auth'
import './Navbar.css'
import { FiMenu } from 'react-icons/fi'
// import profile from '../../public/robert.png'
const Navbar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLogin } = useSelector((state) => state.auth)
  useEffect(() => {
    if (isLogin === false) {
      navigate('/', { replace: true })
    }
  }, [isLogin])

  //toggle
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <>
      <nav className="row-navbar">
        <div className="container">
          <div className="row">
            <div className="topbar">
              <div className="card-left">
                <div className="logo-navbar">
                  <img src="/logoTickitz.svg" alt="logo" />
                </div>
                <div className="home-link">
                  <Link to="/">Home</Link>
                </div>
                <div className="movie-link">
                  <Link to="/movies">List Movies</Link>
                </div>
              </div>
              <div className="card-right">
                {isLogin ? (
                  <>
                    <div className="rightNavbarLogin">
                      {/* <div className="searchMovie">
                        <input
                          type="text"
                          placeholder="Search Movie Name..."
                          onChange={(event) => {
                            setQuery(event.target.value)
                          }}
                        />
                      </div> */}
                      <div className="dropdown">
                        <img
                          src="/robert.png"
                          className="dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        />

                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <button className="dropdown-item" type="button">
                              Profile
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
                            <button className="dropdown-item" type="button">
                              Settings
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
                              className="dropdown-item btn-logout"
                              onClick={() => {
                                dispatch(AuthLogout())
                              }}
                              type="button"
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="rightMenu">
                      <div className="listMenu">
                        <div
                          tabIndex={0}
                          role="button"
                          onKeyPress={() => toggle(!open)}
                          onClick={() => toggle(!open)}
                        >
                          <div>
                            {open ? (
                              <FiMenu
                                style={{ color: '#000', fontSize: '20px' }}
                              />
                            ) : (
                              <FiMenu
                                style={{ color: '#000', fontSize: '20px' }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="listMenuNavbar">
                        {open && (
                          <ul>
                            <Link
                              to="/"
                              style={{ textDecoration: 'none', color: '#000' }}
                            >
                              <li>Home</li>
                            </Link>
                            <Link
                              to="/movies"
                              style={{ textDecoration: 'none', color: '#000' }}
                            >
                              <li>List Movie</li>
                            </Link>

                            <li
                              onClick={() => {
                                dispatch(AuthLogout())
                              }}
                            >
                              Logout
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ display: 'flex', columnGap: '1rem' }}>
                      {/* <Link
                        className="signup-menu"
                        to={'/signup'}
                        style={{
                          textDecoration: 'none',
                          fontWeight: '500',
                          color: '#000',
                        }}
                      >
                        <a>Sign Up</a>
                      </Link> */}
                      <Link
                        to={'/login'}
                        className="signin-menu"
                        style={{
                          textDecoration: 'none',
                          fontWeight: '500',
                          color: '#000',
                        }}
                      >
                        <button className="btnSignin">
                          <a>Sign In</a>
                        </button>
                      </Link>
                    </div>
                    <div className="rightMenu">
                      <div className="listMenu">
                        <div
                          tabIndex={0}
                          role="button"
                          onKeyPress={() => toggle(!open)}
                          onClick={() => toggle(!open)}
                        >
                          <div>
                            {open ? (
                              <FiMenu
                                style={{ color: '#000', fontSize: '20px' }}
                              />
                            ) : (
                              <FiMenu
                                style={{ color: '#000', fontSize: '20px' }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="listMenuNavbar">
                        {open && (
                          <ul>
                            <Link
                              to="/"
                              style={{ textDecoration: 'none', color: '#000' }}
                            >
                              <li>Home</li>
                            </Link>
                            <Link
                              to="/movies"
                              style={{ textDecoration: 'none', color: '#000' }}
                            >
                              <li>List Movie</li>
                            </Link>
                            <Link
                              to="/login"
                              style={{ textDecoration: 'none', color: '#000' }}
                            >
                              <li>Login</li>
                            </Link>
                          </ul>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
