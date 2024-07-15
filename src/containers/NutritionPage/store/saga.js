import {
  INCREMENT_NUTRITION_COUNT,
  DECREMENT_NUTRITION_COUNT,
} from './actions'

export const increaseCount = async (dispatch) => {
  dispatch({ type: INCREMENT_NUTRITION_COUNT })
}

export const decreaseCount = async (dispatch) => {
  dispatch({ type: DECREMENT_NUTRITION_COUNT })
}
