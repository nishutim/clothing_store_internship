import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CatalogPage from '@/components/pages/CatalogPage'
import ProductPage from '@/components/pages/ProductPage'

export default () => (
  <Router>
    <Route
      exact path="/"
      component={CatalogPage} />
    <Route path="/product" component={ProductPage} />
  </Router>
)
