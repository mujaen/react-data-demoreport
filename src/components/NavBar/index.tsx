import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle: React.CSSProperties = {
  color: '#0075EF',
}

const navLinks = [
  {
    name: '대시보드',
    path: '/',
  },
  {
    name: '판매관리',
    path: '/purchase',
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
        <li key={path}>
          <NavLink to={path} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            <span>{name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default NavBar
