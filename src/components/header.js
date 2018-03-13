import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className="header">
    <div className="navbar">
      <div className="gridview">
        <Link to="/" className="grid-item">Home</Link>
        <Link to="/ticTacToe" className="grid-item">TicTacToe</Link>
        <Link to="/contact" className="grid-item">Contact</Link>
      </div>
    </div>
  </div>
)