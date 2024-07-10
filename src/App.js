import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'

const Home = () => <h2>Micro-Frontend 1 Home<Link to='/page'> Page </Link></h2>
const Page = () => <h2>Micro-Frontend 1 Page</h2>

const App = () => (
  <Router basename={'/workouts'}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/page' element={<Page />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </Router>
)

export default App
