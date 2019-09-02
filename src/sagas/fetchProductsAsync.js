import { call, put, takeEvery } from 'redux-saga/effects'

import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '@/actions'
import { URL, FETCH_PRODUCTS_REQUEST } from '@/constants'
import { fetchProducts } from '@/api/fetchProducts'

export function * fetchProductsAsync () {
  try {
    yield put(fetchProductsRequest())
    const data = yield call(fetchProducts, URL)
    yield put(fetchProductsSuccess(data))
  } catch (error) {
    yield put(fetchProductsFailure(error))
  }
}

export function * startFetchingProducts () {
  yield takeEvery(
    FETCH_PRODUCTS_REQUEST,
    fetchProductsAsync
  )
}
