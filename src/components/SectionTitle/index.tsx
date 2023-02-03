import React, { PropsWithChildren } from 'react'

import styled from '@emotion/styled'

interface SectionTitleProps {
  title?: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px 6px;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
`

function SectionTitle({ children, ...props }: PropsWithChildren<SectionTitleProps>) {
  const { title } = props

  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}

export default SectionTitle
