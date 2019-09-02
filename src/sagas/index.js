import { all } from 'redux-saga/effects'

import { fetchProductsAsync } from './fetchProductsAsync'

export default function * rootSaga () {
  yield all([
    fetchProductsAsync(),
  ])
}
