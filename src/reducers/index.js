import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS,
  CHANGE_FILTER_TAG,
  CLICK_PRODUCT,
  CLICK_EXIT_BUTTON,
  CLICK_FILTER_NAME,
} from '@/constants'

const initialState = {
  loading: true,
  error: null,
  products: [],
  searchText: '',
  currentCategorieTag: 'All',
  currentColorTag: 'All',
  currentSizeTag: 'All',
  currentSortTag: 'Our Picks',
  currentProduct: {},
  showOptions: false,
  showProductDetails: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchText: action.payload,
      }
    case CLICK_FILTER_NAME:
      return {
        ...state,
        showOptions: !state.showOptions,
      }
    case CHANGE_FILTER_TAG:
      return {
        ...state,
        [action.payload.currentNameTag]: action.payload.value,
      }
    case CLICK_PRODUCT:
      return {
        ...state,
        currentProduct: [...state.products].filter(product =>
          action.payload === product._id.$oid)[0],
        showProductDetails: true,
      }
    case CLICK_EXIT_BUTTON:
      return {
        ...state,
        showProductDetails: false,
      }
    default:
      return state
  }
}

export default reducer
