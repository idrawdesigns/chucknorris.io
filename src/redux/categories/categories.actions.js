import axios from 'axios'

import {
  FETCH_ALL_CATEGORIES_FAILURE,
  FETCH_ALL_CATEGORIES_LOADING,
  FETCH_ALL_CATEGORIES_SUCCESS,
  GET_JOKE_BY_CATEGORY_LOADING,
  GET_JOKE_BY_CATEGORY_SUCCESS,
  GET_JOKE_BY_CATEGORY_FAILURE,
} from './categories.types'

const URL = 'https://api.chucknorris.io/jokes'

export const fetchAllCategories = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_ALL_CATEGORIES_LOADING })

      const response = await axios.get(`${URL}/categories`)

      dispatch({
        type: FETCH_ALL_CATEGORIES_SUCCESS,
        payload: response.data,
      })
    } catch (error) {
      console.log(error)
      dispatch({ type: FETCH_ALL_CATEGORIES_FAILURE, payload: error })
    }
  }
}

export const getJokeByCategory = (query) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_JOKE_BY_CATEGORY_LOADING })

      const response = await axios.get(`${URL}/random?category=${query}`)

      dispatch({
        type: GET_JOKE_BY_CATEGORY_SUCCESS,
        payload: response.data.value,
      })
    } catch (error) {
      dispatch({ type: GET_JOKE_BY_CATEGORY_FAILURE, payload: error })
    }
  }
}
