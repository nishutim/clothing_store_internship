import React, { Component } from 'react'
import './ProductCard.css'

export default class ProductCard extends Component {
  // constructor(props){
  //   super(props);

  //   this.handleProductClick = this.handleProductClick.bind(this);
  // }

  // handleProductClick(e) {
  //   console.log(e.target)
  //   this.props.handleProductClick(e.target.id.$oid)
  // }

  render() {
    const { _id, title, price, images, handleProductClick } = this.props;
    const mainImage = images[0];
    return (
      <div className="products-productcard" onClick={() => handleProductClick(_id.$oid)}>
        <img className="products-productcard-img" src={mainImage}     alt="title" />
        <div className="products-productcard-desc">
          <p className="products-productcard-desc__title">{title}</p>
          <p className="products-productcard-desc__price">{price} $</p>
        </div>
      </div>
    )
  }
}

