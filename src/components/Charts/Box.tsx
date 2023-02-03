import React, { PropsWithChildren } from 'react'

import styled from '@emotion/styled'

interface SectionTitleProps {
  height?: string
}

const Wrapper = styled.div<SectionTitleProps>`
  width: 50%;
  height: ${({ height }) => `${height}px` || 'auto'};
  padding: 20px;
  box-sizing: border-box;
`

function Box({ children, ...props }: PropsWithChildren<SectionTitleProps>) {
  const { height } = props

  return <Wrapper height={height}>{children}</Wrapper>
}

export default Box
