import React from 'react'
import { Link } from 'react-router-dom'

import { productShape } from '@/propTypes'

import ProductDetailsInfo from '@/components/blocks/ProductDetailsInfo'
import ProductDetailsGallery from '@/components/blocks/ProductDetailsGallery'
import { ProductDetailsWrapper } from './styles'

export default function ProductDetails ({ product }) {
  return (
    <ProductDetailsWrapper>
      <Link to="/">
        <button>
        BACK TO SHOPPING
        </button>
      </Link>
      <div>
        <ProductDetailsGallery product={product} />
        <ProductDetailsInfo product={product} />
      </div>
    </ProductDetailsWrapper>
  )
}

ProductDetails.propTypes = {
  product: productShape,
}
