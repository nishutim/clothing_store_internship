export function getFilters (filterName, products, filterOptions) {
  if (filterName !== 'Sort By') {
    const filters = ['All']
    products.forEach(product => {
      product[filterOptions].forEach(filterOption => {
        if (filters.indexOf(filterOption) !== -1) {
          return
        }
        filters.push(filterOption)
      })
    })
    return filters
  } else {
    return ['Our Picks', 'Price: low to high', 'Price: high to low']
  }
}
