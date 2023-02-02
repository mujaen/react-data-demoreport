import React from 'react'

import AppRoutes from 'router'
import base from 'styles/base'
import reset from 'styles/reset'
import { Global } from '@emotion/react'

function AppFrame() {
  return (
    <React.StrictMode>
      <Global styles={reset} />
      <Global styles={base} />
      <AppRoutes />
    </React.StrictMode>
  )
}

export default AppFrame
