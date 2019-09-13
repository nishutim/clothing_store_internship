import { SORT } from '@/constants'

export function getFilters (filterName, products, filterOptions) {
  if (filterName !== SORT) {
    const filters = ['All']
    products
      .forEach(product => filters
        .push(...product[filterOptions]
          .filter(filterOption => filters.indexOf(filterOption) === -1)))
    return filters
  } else {
    return ['Our Picks', 'Price: low to high', 'Price: high to low']
  }
}
