import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export const App = () => (
  <BrowserRouter>
    <Helmet>
      <link rel='icon' href='../images/favicon.png' />
    </Helmet>
    <Router />
  </BrowserRouter>
)
