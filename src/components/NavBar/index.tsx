import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from '@emotion/styled'

const NavList = styled.li`
  padding: 20px;
  border-bottom: 1px solid #222;
`

const activeStyle = {
  color: 'orange',
}

const defalutStyle = {
  color: '#FFFFFF',
}

const navLinks = [
  {
    name: '판매관리',
    path: '/',
  },
  {
    name: '정산관리',
    path: '/settlement',
  },
]

function NavBar(): JSX.Element {
  return (
    <ul>
      {navLinks.map(({ name, path }) => (
        <NavList key={path}>
          <NavLink to={path} style={({ isActive }) => (isActive ? activeStyle : defalutStyle)}>
            <span>{name}</span>
          </NavLink>
        </NavList>
      ))}
    </ul>
  )
}

export default NavBar
