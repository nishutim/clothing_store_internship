export function sortProducts (currentSortTag, products) {
  switch (currentSortTag) {
    case 'Our Picks':
      return products
    case 'Price: low to high':
      return [...products].sort((a, b) => a.price - b.price)
    case 'Price: high to low':
      return [...products].sort((a, b) => b.price - a.price)
    default: return products
  }
}
