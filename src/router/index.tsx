import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Settlement from 'container/Settlement'
import Purchase from 'container/Purchase'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Purchase />} />
      <Route path="settlement" element={<Settlement />} />
    </Routes>
  )
}

export default AppRoutes
