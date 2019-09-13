import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SEARCH_PRODUCTS,
  SELECT_FILTER_TAG,
  SELECT_PRODUCT,
  SEARCH_QUERY,
  CATEGORIE,
  SIZE,
  COLOR,
  SORT,
} from '@/constants'

const initialState = {
  loading: true,
  error: null,
  products: [],
  searchText: {
    value: SEARCH_QUERY,
    query: '',
  },
  filters: [
    {
      label: 'Categories',
      value: CATEGORIE,
      filterOptions: 'tags',
      selectedTag: 'All',
    },
    {
      label: 'Sizes',
      value: SIZE,
      filterOptions: 'size',
      selectedTag: 'All',
    },
    {
      label: 'Colors',
      value: COLOR,
      filterOptions: 'color',
      selectedTag: 'All',
    },
    {
      label: 'Sort',
      value: SORT,
      filterOptions: 'sort',
      selectedTag: 'Our Picks',
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
        searchText: {
          value: state.searchText.value,
          query: action.payload,
        },
      }
    case SELECT_FILTER_TAG:
      return {
        ...state,
        filters: [...state.filters].map(filter => {
          if (filter.value !== action.payload.name) {
            return filter
          }
          return {
            ...filter,
            selectedTag: action.payload.value,
          }
        }),
      }
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: state.products.filter(product =>
          action.payload === product.id)[0],
      }
    default:
      return state
  }
}

export default reducer
