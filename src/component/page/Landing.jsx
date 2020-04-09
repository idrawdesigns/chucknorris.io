import React from 'react'

//components
import SearchButton from '../search-button/SearchButton'

//styles
import { LandingContainer } from './landing.styles'

const Landing = () => {
  return (
    <LandingContainer>
      <SearchButton size="large" />
    </LandingContainer>
  )
}

export default Landing
