import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/style.scss'
import Routes from './routes'

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('app') 
);