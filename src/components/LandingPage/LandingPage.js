import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './styles.css'

const LandingPage = () => {
  const { t } = useTranslation()

  return (
    <div className='workouts-landing-page'>
      <div className='workouts-landing-content'>
        <p className='title'>{t('Workouts')}</p>
        <p>{t('landing-heading')}</p>

        <ul>
          <li>{t('Squats')}</li>
          <li>{t('Push-ups')}</li>
          <li>{t('Deadlifts')}</li>
          <li>{t('Lunges')}</li>
          <li>{t('Plank')}</li>
        </ul>
      </div>

      <div className='workouts-landing-footer'>
        <Link to='/nutrition'>{t('Checkout Nutrition Page')}</Link>
      </div>
    </div>
  )
}

export default LandingPage
