import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Dashboard from 'container/Dashboard'
import ChartPage from 'container/ChartPage'
import TablePage from 'container/TablePage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="chart" element={<ChartPage />} />
      <Route path="table" element={<TablePage />} />
    </Routes>
  )
}

export default AppRoutes
