import React from 'react'
import Filter from '../Filter/Filter'
import './FilterBar.css'

export default function FilterBar({ onFilterTagClick, products, currentFilterTags }) {
  return (
    <div className="filterbar">
      <Filter 
        filterName="Categories" 
        filterOptions="tags" 
        products={products} 
        currentFilterTagValue={currentFilterTags.currentCategorieTag}
        currentFilterTagName="currentCategorieTag"
        onFilterTagClick={onFilterTagClick} 
      />
      <Filter 
        filterName="Sizes" 
        filterOptions="size" 
        products={products}
        currentFilterTagValue={currentFilterTags.currentSizeTag} 
        currentFilterTagName="currentSizeTag"
        onFilterTagClick={onFilterTagClick} 
      />
      <Filter 
        filterName="Colors" 
        filterOptions="color" 
        products={products}
        currentFilterTagValue={currentFilterTags.currentColorTag} 
        currentFilterTagName="currentColorTag" 
        onFilterTagClick={onFilterTagClick} 
      />
      <Filter 
        filterName="Sort By"
        products={products}
        currentFilterTagValue={currentFilterTags.currentSortTag} 
        currentFilterTagName="currentSortTag" 
        onFilterTagClick={onFilterTagClick} 
      />
    </div>
  )
}
