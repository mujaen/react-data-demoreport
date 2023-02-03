import React from 'react'

import styled from '@emotion/styled'

import NavBar from 'components/NavBar'

const Wrapper = styled.div`
  display: flex;
`

const Header = styled.header`
  width: 100px;
  height: 100vh;

  background-color: #2f2f34;
`

const Contents = styled.div`
  width: calc(100% - 100px);
`

function Container({ children }) {
  return (
    <Wrapper>
      <Header>
        <NavBar />
      </Header>
      <Contents>{children}</Contents>
    </Wrapper>
  )
}

export default Container
