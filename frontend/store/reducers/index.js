import usersReducer from './usersReducers'
import workoutsReducer from './workoutsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    usersReducer,
    workoutsReducer
})

export default rootReducer