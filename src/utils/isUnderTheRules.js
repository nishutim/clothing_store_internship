import { CATEGORIE, SIZE, COLOR, SEARCH_QUERY } from '@/constants/filterNames'

export default function isUnderTheRules (
  product,
  filters,
  searchText
) {
  // const [categories, sizes, colors] = filters

  // if (
  //   product.tags.indexOf(categories.selectedTag) === -1 &&
  //   categories.selectedTag !== 'All'
  // ) {
  //   return false
  // }
  // if (
  //   product.size.indexOf(sizes.selectedTag) === -1 &&
  //   sizes.selectedTag !== 'All'
  // ) {
  //   return false
  // }
  // if (
  //   product.color.indexOf(colors.selectedTag.toLowerCase()) === -1 &&
  //   colors.selectedTag !== 'All'
  // ) {
  //   return false
  // }
  // if (
  //   product.title.toLowerCase().indexOf(searchText.term.toLowerCase().trim()) ===
  //   -1
  // ) {
  //   return false
  // }
  // return true

  const rules = [...filters, searchText]

  console.log(rules.every(rule => {
    switch (rule.value) {
      case CATEGORIE:
        return product.tags.indexOf(rule.selectedTag) !== -1 ||
          rule.selectedTag === 'All'
      case SIZE:
        return product.size.indexOf(rule.selectedTag) !== -1 ||
          rule.selectedTag === 'All'
      case COLOR:
        return product.color.indexOf(rule.selectedTag.toLowerCase()) !== -1 ||
          rule.selectedTag === 'All'
      case SEARCH_QUERY:
        return rule.term.length ? product.title.toLowerCase().indexOf(rule.term.toLowerCase().trim()) !== -1 : true
    }
  }))
}
