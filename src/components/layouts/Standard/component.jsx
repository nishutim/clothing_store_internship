import React from 'react'
import PropTypes from 'prop-types'

import Header from '@/components/blocks/Header'
import { PageWrapper } from '@/components/wrappers/PageWrapper'

const StandardLayout = ({ children }) => (
  <PageWrapper>
    <Header />
    <main>{children}</main>
  </PageWrapper>
)

StandardLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element.isRequired,
  ]),
}

export default StandardLayout
