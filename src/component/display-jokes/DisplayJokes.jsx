import React from 'react'

import { Typography } from 'antd'

import { DisplayContainer } from './display-jokes.styles'

const { Title } = Typography

const DisplayJokes = ({ previous, joke }) => {
  console.log('previous ', previous)
  return (
    <DisplayContainer>
      {/* <Btn shape="circle" icon={<LeftOutlined />} size="small" />
      <Btn
        // type="primary"
        shape="circle"
        icon={<RightOutlined />}
        size="small"
      />
      <br /> */}
      <Title level={3} type="primary">
        {joke}
      </Title>
    </DisplayContainer>
  )
}

export default DisplayJokes
