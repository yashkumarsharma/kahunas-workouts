import { connect } from 'react-redux'

import { increaseCount, decreaseCount } from './store/saga'
import NutritionPage from '../../components/NutritionPage'

const mapStateToProps = ({ nutritionState }) => ({
  nutritionCount: nutritionState.count,
})

const mapDispatchToProps = (dispatch) => ({
  increaseCount: () => increaseCount(dispatch),
  decreaseCount: () => decreaseCount(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(NutritionPage)
