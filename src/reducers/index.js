import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS,
  CHANGE_FILTER_TAG,
  SELECT_PRODUCT,
  CATEGORIE,
  SIZE,
  COLOR,
  SORT,
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
      currentTag: { name: CATEGORIE, value: 'All' },
    },
    {
      title: 'Sizes',
      filterOptions: 'size',
      currentTag: { name: SIZE, value: 'All' },
    },
    {
      title: 'Colors',
      filterOptions: 'color',
      currentTag: { name: COLOR, value: 'All' },
    },
    {
      title: 'Sort',
      filterOptions: 'sort',
      currentTag: { name: SORT, value: 'Our Picks' },
    },
  ],
  selectedProduct: {},
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
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: state.products.filter(product =>
          action.payload === product._id.$oid)[0],
      }
    default:
      return state
  }
}

export default reducer
