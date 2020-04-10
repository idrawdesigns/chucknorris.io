import {
  FETCH_RANDOM_JOKE_LOADING,
  FETCH_RANDOM_JOKE_SUCCESS,
  FETCH_RANDOM_JOKE_FAILURE,
} from './chuck.types'

import { CreateReducer } from '../reducer.utils'

const INTITIAL_STATE = {
  loading: false,
  randomJoke: null,
  error: null,
}

const loadingRandomJoke = (state) => {
  return {
    ...state,
    loading: true,
  }
}

const fetchJokeSuccess = (state, payload) => {
  return {
    ...state,
    loading: false,
    joke: payload,
    error: '',
  }
}

const fetchJokeFailure = (state, payload) => {
  return {
    ...state,
    loading: false,
    joke: null,
    error: payload,
  }
}

export default CreateReducer(INTITIAL_STATE, {
  [FETCH_RANDOM_JOKE_LOADING]: loadingRandomJoke,
  [FETCH_RANDOM_JOKE_SUCCESS]: fetchJokeSuccess,
  [FETCH_RANDOM_JOKE_FAILURE]: fetchJokeFailure,
})
