import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  fetchAllCategories,
  getJokeByCategory,
} from '../../redux//categories/categories.actions'

//components
import SearchButton from '../search-button/SearchButton'

//styles
import { LandingContainer, MainWrapper } from './landing.styles'

//components
import Categories from '../categories/Categories'
import DisplayJokes from '../display-jokes/DisplayJokes'

class Landing extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }
  render() {
    const { categories, loading, previous, joke, getJoke } = this.props
    return (
      <LandingContainer>
        <SearchButton size="large" />
        <MainWrapper>
          <Categories
            categories={categories}
            loading={loading}
            getJoke={getJoke}
          />
          <DisplayJokes previous={previous} joke={joke} />
        </MainWrapper>
      </LandingContainer>
    )
  }
}

const mapStateToProps = ({
  categories: { loading, categories, error, previous, joke },
}) => ({
  categories,
  loading,
  error,
  joke,
  previous,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchAllCategories()),
  getJoke: (query) => dispatch(getJokeByCategory(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
