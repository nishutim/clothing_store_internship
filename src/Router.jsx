import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import CatalogPageContainer from '@/components/pages/CatalogPage'
import ProductPage from '@/components/pages/ProductPage'

const RouterWrapper = () => (
  <Router>
    <Route
      exact path="/"
      component={CatalogPageContainer} />
    <Route path="/product" component={ProductPage} />
  </Router>
)

export default RouterWrapper
