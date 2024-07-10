import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LandingPage = () => {
  const title = 'Workouts Landing Page'
  const { t } = useTranslation()

  return (
    <div>
      {title}
      <p>{t('welcome')}</p>

      <Link to='/nutrition'>Checkout Nutrition Page</Link>
    </div>
  )
}

export default LandingPage
