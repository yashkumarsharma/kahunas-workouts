import {
  INCREMENT_NUTRITION_COUNT,
  DECREMENT_NUTRITION_COUNT,
} from './actions'

const initialState = {
  count: 0,
}

const nutritionState = (state = initialState, action) => {
  switch (action.type) {
  case INCREMENT_NUTRITION_COUNT:
    // Todo: Add ImmutableJS
    return { ...state, count: state.count + 1 }
  case DECREMENT_NUTRITION_COUNT:
    // Todo: Add ImmutableJS
    return { ...state, count: state.count - 1 }
  default:
    return state
  }
}

export default nutritionState
