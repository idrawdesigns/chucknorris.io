import {
  FETCH_ALL_CATEGORIES_FAILURE,
  FETCH_ALL_CATEGORIES_LOADING,
  FETCH_ALL_CATEGORIES_SUCCESS,
  GET_JOKE_BY_CATEGORY_LOADING,
  GET_JOKE_BY_CATEGORY_SUCCESS,
  GET_JOKE_BY_CATEGORY_FAILURE,
} from './categories.types'

import { CreateReducer } from '../reducer.utils'

const INITIAL_STATE = {
  loading: false,
  categories: [],
  error: null,
  joke: null,
  previous: null,
}

const fetchAllCategoriesLoading = (state) => {
  return { ...state, loading: true }
}

const fetchAllCategoriesSucces = (state, payload) => {
  return { ...state, loading: false, categories: payload, error: '' }
}

const fetchAllCategoriesfailure = (state, payload) => {
  return { ...state, loading: false, categories: [], error: payload }
}

const getJokeByCategoryLoading = (state, payload) => {
  return { ...state, loading: true }
}

const getJokeByCategorySuccess = (state, payload) => {
  return {
    ...state,
    loading: false,
    joke: payload,
    previous: state.joke,
    error: null,
  }
}

const getJokeByCategoryfailure = (state, payload) => {
  return { ...state, loading: false, joke: '', previous: '', error: payload }
}

export default CreateReducer(INITIAL_STATE, {
  [FETCH_ALL_CATEGORIES_LOADING]: fetchAllCategoriesLoading,
  [FETCH_ALL_CATEGORIES_SUCCESS]: fetchAllCategoriesSucces,
  [FETCH_ALL_CATEGORIES_FAILURE]: fetchAllCategoriesfailure,
  [GET_JOKE_BY_CATEGORY_LOADING]: getJokeByCategoryLoading,
  [GET_JOKE_BY_CATEGORY_SUCCESS]: getJokeByCategorySuccess,
  [GET_JOKE_BY_CATEGORY_FAILURE]: getJokeByCategoryfailure,
})
