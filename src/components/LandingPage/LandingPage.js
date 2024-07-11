import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './styles.css'

const LandingPage = () => {
  const title = 'Workouts Landing Page'
  const { t } = useTranslation()

  return (
    <div className='workouts-landing-page'>
      <div className='workouts-landing-content'>
        <p className='title'>{title}</p>
        <p>You can add following workouts for your clients</p>

        <ul>
          <li>Squats</li>
          <li>Push-ups</li>
          <li>Deadlifts</li>
          <li>Lunges</li>
          <li>Plank</li>
        </ul>
      </div>

      <div className='workouts-landing-footer'>
        <Link to='/nutrition'>Checkout Nutrition Page</Link>
      </div>
    </div>
  )
}

export default LandingPage
