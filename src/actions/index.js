import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS,
  CHANGE_FILTER_TAG,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
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

export const changeFilterTag = (value, name) => {
  return {
    type: CHANGE_FILTER_TAG,
    payload: {
      value: value,
      name: name,
    },
  }
}

export const sortProducts = () => {
  return {
    type: SORT_PRODUCTS,
  }
}

export const filterProducts = () => {
  return {
    type: FILTER_PRODUCTS,
  }
}

export const selectProduct = id => {
  return {
    type: SELECT_PRODUCT,
    payload: id,
  }
}
