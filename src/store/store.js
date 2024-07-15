import nutritionState from '../containers/NutritionPage/store/reducer'

// These reducers are provided back to container
// eslint-disable-next-line import/prefer-default-export
export const appReducers = {
  nutritionState: nutritionState,
}

// No local store required