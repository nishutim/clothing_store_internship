import { SIZE } from '@/constants/filterNames'

const filterBySize = filtrationInfo => {
  // eslint-disable-next-line prefer-destructuring
  const selectedTag = filtrationInfo.rules.filter(rule => rule.value === SIZE)[0].selectedTag

  return {
    products: filtrationInfo.products.filter(product =>
      product.size.indexOf(selectedTag) !== -1 || selectedTag === 'All'),
    rules: filtrationInfo.rules,
  }
}

export default filterBySize
