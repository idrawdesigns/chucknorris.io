import { combineReducers } from 'redux'

import randomJokeReducer from '../redux/Chuck/chuck.reducer'
import categoriesReducer from './categories/categories.reducers'

export const rootReducer = combineReducers({
  randomJoke: randomJokeReducer,
  categories: categoriesReducer,
})
