import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import NutritionPage from './containers/NutritionPage'
import LandingPage from './containers/LandingPage'
import i18n from './translations/i18n'

import './translations/i18n'

const App = () => {
  const language = useSelector(state => state.appSettings?.language || 'en')

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <Router basename='/workouts'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/nutrition' element={<NutritionPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  )
}

export default App
