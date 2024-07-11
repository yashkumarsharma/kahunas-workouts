import React from 'react'
import { useTranslation } from 'react-i18next'

import './styles.css'

const NutritionPage = () => {
  const { t } = useTranslation()

  const foods = [
    {
      name: 'Apple',
      nutrients: 'Calories: 95, Carbs: 25g, Fiber: 4g, Vitamin C: 14%',
    },
    {
      name: 'Banana',
      nutrients: 'Calories: 105, Carbs: 27g, Fiber: 3g, Potassium: 12%',
    },
    {
      name: 'Chicken Breast',
      nutrients: 'Calories: 165, Protein: 31g, Fat: 3.6g, Vitamin B6: 10%',
    },
    {
      name: 'Broccoli',
      nutrients: 'Calories: 55, Carbs: 11g, Fiber: 4g, Vitamin C: 135%',
    },
    {
      name: 'Almonds',
      nutrients: 'Calories: 575, Protein: 21g, Fat: 49g, Magnesium: 270mg',
    },
  ]

  return (
    <div className='nutrition-page'>
      <div className='nutrition-content'>
        <p className='title'>{t('Nutrition Information')}</p>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>
              <h2>{food.name}</h2>
              <p>{food.nutrients}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NutritionPage
