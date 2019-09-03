import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS,
  CHANGE_FILTER_TAG,
  CLICK_PRODUCT,
  CLICK_EXIT_BUTTON,
} from '@/constants'

const initialState = {
  loading: true,
  error: null,
  products: [],
  searchText: '',
  filters: [
    {
      title: 'Categories',
      filterOptions: 'tags',
      currentTag: { name: 'CATEGORIE', value: 'All' },
    },
    {
      title: 'Sizes',
      filterOptions: 'size',
      currentTag: { name: 'SIZE', value: 'All' },
    },
    {
      title: 'Colors',
      filterOptions: 'color',
      currentTag: { name: 'COLOR', value: 'All' },
    },
    {
      title: 'Sort',
      filterOptions: 'sort',
      currentTag: { name: 'SORT', value: 'Our Picks' },
    },
  ],
  currentProduct: {},
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
    case CHANGE_FILTER_TAG:
      return {
        ...state,
        filters: [...state.filters].map(filter => {
          if (filter.currentTag.name !== action.payload.name) {
            return filter
          }
          return {
            ...filter,
            currentTag: { ...filter.currentTag, value: action.payload.value },
          }
        }),
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
