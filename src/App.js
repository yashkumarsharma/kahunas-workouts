import React from 'react'
import { Provider } from 'react-redux'
import { useStore } from 'container/StoreContext'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import NutritionPage from './containers/NutritionPage'
import LandingPage from './containers/LandingPage'

// Todo: Leaving some commented tested code for redux integration, remove this.
// const rootHelloReducer = (state = {
//   isLoading: true,
// }, action) => state

const App = () => {
  // const { store, replaceReducertest } = useStore()
  const { store } = useStore()

  // useEffect(() => {
  //   if(!replaceReducertest) return
  //   replaceReducertest({
  //     rootHelloReducer: rootHelloReducer,
  //     // Add other reducers here if needed
  //   })
  // }, [replaceReducertest])

  return (
    <Provider store={store}>
      <Router basename='/workouts'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/nutrition' element={<NutritionPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
