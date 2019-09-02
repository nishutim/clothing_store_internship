import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS,
  CHANGE_FILTER_TAG,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  CLICK_PRODUCT,
  CLICK_EXIT_BUTTON,
  CLICK_FILTER_NAME,
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

export const changeFilterTag = (value, currentNameTag) => {
  return {
    type: CHANGE_FILTER_TAG,
    payload: {
      value: value,
      currentNameTag: currentNameTag,
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

export const clickProduct = id => {
  return {
    type: CLICK_PRODUCT,
    payload: id,
  }
}

export const clickExitButton = () => {
  return {
    type: CLICK_EXIT_BUTTON,
  }
}

export const clickFilterName = () => {
  return {
    type: CLICK_FILTER_NAME,
  }
}
