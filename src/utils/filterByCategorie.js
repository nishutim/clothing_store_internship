import { CATEGORIE } from '@/constants/filterNames'

const filterByCategorie = filtrationInfo => {
  // eslint-disable-next-line prefer-destructuring
  const selectedTag = filtrationInfo.rules.filter(rule => rule.value === CATEGORIE)[0].selectedTag

  return filtrationInfo.products.filter(product =>
    product.tags.indexOf(selectedTag) !== -1 || selectedTag === 'All')
}

export default filterByCategorie
