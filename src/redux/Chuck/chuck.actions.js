import axios from 'axios'

import {
  FETCH_RANDOM_JOKE_LOADING,
  FETCH_RANDOM_JOKE_SUCCESS,
  FETCH_RANDOM_JOKE_FAILURE,
} from './chuck.types'

const URL = 'https://api.chucknorris.io/jokes/random'

export const fetchRandomJoke = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_RANDOM_JOKE_LOADING })

      const response = await axios.get(URL)

      dispatch({
        type: FETCH_RANDOM_JOKE_SUCCESS,
        payload: response,
      })
    } catch (error) {
      console.log(`Error fetching`, error)
      dispatch({ type: FETCH_RANDOM_JOKE_FAILURE })
    }
  }
}
