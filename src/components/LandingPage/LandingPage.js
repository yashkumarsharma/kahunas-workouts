import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './styles.css'

const LandingPage = () => {
  const title = 'Workouts Landing Page'
  const { t } = useTranslation()

  return (
    <div className='landing-page'>
      {title}
      <p>{t('welcome')}</p>

      <Link to='/nutrition'>Checkout Nutrition Page</Link>
    </div>
  )
}

export default LandingPage
