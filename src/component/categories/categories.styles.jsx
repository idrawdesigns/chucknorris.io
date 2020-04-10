import styled from 'styled-components'
import { List } from 'antd'

export const CategoryStyle = styled(List)`
  flex: 1;
  .givehover {
    cursor: pointer;

    :hover {
      background: #f0f0f0;
    }
  }
`
