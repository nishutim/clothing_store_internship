export function filterProducts (
  product,
  searchText,
  currentCategorieTag,
  currentColorTag,
  currentSizeTag,
) {
  if (
    product.tags.indexOf(currentCategorieTag) === -1 &&
    currentCategorieTag !== 'All'
  ) {
    return false
  }
  if (
    product.size.indexOf(currentSizeTag) === -1 &&
    currentSizeTag !== 'All'
  ) {
    return false
  }
  if (
    product.color.indexOf(currentColorTag.toLowerCase()) === -1 &&
    currentColorTag !== 'All'
  ) {
    return false
  }
  if (
    product.title.toLowerCase().indexOf(searchText.toLowerCase().trim()) ===
    -1
  ) {
    return false
  }
  return true
}
