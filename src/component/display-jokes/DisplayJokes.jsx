import React from 'react'

import { Typography } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

import { DisplayContainer, Btn } from './display-jokes.styles'

const { Text } = Typography
const DisplayJokes = ({ previous, joke }) => {
  console.log('joke ', joke)
  return (
    <DisplayContainer>
      <Btn shape="circle" icon={<LeftOutlined />} size="small" />
      <Btn
        // type="primary"
        shape="circle"
        icon={<RightOutlined />}
        size="small"
      />
      <br />
      <Text type="secondary">{joke}</Text>
    </DisplayContainer>
  )
}

export default DisplayJokes
