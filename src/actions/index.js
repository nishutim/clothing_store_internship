import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS,
  SELECT_FILTER_TAG,
  SELECT_PRODUCT,
} from '@/constants'

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  }
}

export const fetchProductsSuccess = products => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  }
}

export const fetchProductsFailure = error => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  }
}

export const searchProducts = searchText => {
  return {
    type: SEARCH_PRODUCTS,
    payload: searchText,
  }
}

export const selectFilterTag = (value, name) => {
  return {
    type: SELECT_FILTER_TAG,
    payload: {
      value: value,
      name: name,
    },
  }
}

export const selectProduct = id => {
  return {
    type: SELECT_PRODUCT,
    payload: id,
  }
}
