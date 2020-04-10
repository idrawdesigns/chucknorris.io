import React from 'react'
import { List, Skeleton } from 'antd'

const CategoryItem = ({ category }) => {
  return <List.Item.meta> {category}</List.Item.meta>
}

export default CategoryItem
