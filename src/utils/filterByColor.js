import { COLOR } from '@/constants/filterNames'

const filterByColor = filtrationInfo => {
  // eslint-disable-next-line prefer-destructuring
  const selectedTag = filtrationInfo.rules.filter(rule => rule.value === COLOR)[0].selectedTag

  return {
    products: filtrationInfo.products.filter(product =>
      product.color.indexOf(selectedTag.toLowerCase()) !== -1 || selectedTag === 'All'),
    rules: filtrationInfo.rules,
  }
}

export default filterByColor
