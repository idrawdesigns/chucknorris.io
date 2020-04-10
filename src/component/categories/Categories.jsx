import React from 'react'
import { List, Skeleton } from 'antd'

import { CategoryStyle } from './categories.styles'

const Categories = ({ categories, loading, previous, getJoke }) => {
  return (
    <CategoryStyle
      size="small"
      header={<div>Category</div>}
      loading={loading}
      bordered
      dataSource={categories}
      renderItem={(item) => (
        <List.Item onClick={() => getJoke(item)}>{item}</List.Item>
      )}
    />
  )
}

{
  /* <Skeleton active paragraph={{ rows: 1 }} /> */
}

export default Categories
