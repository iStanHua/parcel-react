import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

export default () => (
  <div className="header">
    <img src={logo} className="logo" alt="logo" />
    <div className="navbar">
      <div className="gridview">
        <div className="grid-item">
          <Link to="/">Home</Link>
        </div>
        <div className="grid-item">
          <Link to="/about">About</Link>
        </div>
        <div className="grid-item">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  </div>
)