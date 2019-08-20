import React from 'react'
import Filter from '../Filter/Filter'
import './FilterBar.css'

export default function FilterBar({ onFilterTagClick, products, currentFilterTag }) {
  return (
    <div className="filterbar">
      <Filter 
        filterName="Categories" 
        filterItems="tags" 
        products={products} 
        currentFilterTagValue={currentFilterTag.currentCategorieTag}
        currentFilterTagName="currentCategorieTag"
        onFilterTagClick={onFilterTagClick} />

      <Filter 
        filterName="Sizes" 
        filterItems="size" 
        products={products}
        currentFilterTagValue={currentFilterTag.currentSizeTag} 
        currentFilterTagName="currentSizeTag"
        onFilterTagClick={onFilterTagClick} />

      <Filter 
        filterName="Colors" 
        filterItems="color" 
        products={products}
        currentFilterTagValue={currentFilterTag.currentColorTag} 
        currentFilterTagName="currentColorTag" 
        onFilterTagClick={onFilterTagClick} />

      <Filter 
        filterName="Sort By"
        products={products}
        currentFilterTagValue={currentFilterTag.currentSortTag} 
        currentFilterTagName="currentSortTag" 
        onFilterTagClick={onFilterTagClick} />

    </div>
  )
}
