import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Dashboard from 'container/Dashboard'
import Settlement from 'container/Settlement'
import Purchase from 'container/Purchase'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="settlement" element={<Settlement />} />
      <Route path="purchase" element={<Purchase />} />
    </Routes>
  )
}

export default AppRoutes
