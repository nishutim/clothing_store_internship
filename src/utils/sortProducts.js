export function sortProducts (currentSortTag, products) {
  if (currentSortTag === 'Our Picks') return [...products]
  if (currentSortTag === 'Price: low to high') {
    return [...products].sort((a, b) => a.price - b.price)
  }
  if (currentSortTag === 'Price: high to low') {
    return [...products].sort((a, b) => b.price - a.price)
  }
}
