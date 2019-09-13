import { SORT } from '@/constants/filterNames'

const sortProducts = filtrationInfo => {
  // eslint-disable-next-line prefer-destructuring
  const selectedTag = filtrationInfo.rules.filter(rule => rule.value === SORT)[0].selectedTag

  switch (selectedTag) {
    case 'Our Picks':
      return filtrationInfo
    case 'Price: low to high':
      return {
        products: [...filtrationInfo.products].sort((a, b) => a.price - b.price),
        rules: filtrationInfo.rules,
      }
    case 'Price: high to low':
      return {
        products: [...filtrationInfo.products].sort((a, b) => b.price - a.price),
        rules: filtrationInfo.rules,
      }
    default: return filtrationInfo
  }
}

export default sortProducts
