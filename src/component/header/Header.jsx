import React from 'react'

import chuckLogo from '../../assets/chucknorris_logo.png'

//styles

import { HeaderContainer } from './header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <img src={chuckLogo} alt="logo" />
    </HeaderContainer>
  )
}

export default Header
