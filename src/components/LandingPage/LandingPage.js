import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const title = 'Workouts Landing Page'

  return (
    <div>
      {title}
      <Link to='/nutrition'>Checkout Nutrition Page</Link>
    </div>
  )
}

export default LandingPage
