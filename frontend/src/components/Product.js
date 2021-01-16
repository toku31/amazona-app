import React from 'react'
import Rating from './Rating'

export default function Product(props) {
  const product = props.product
  return (
    <div>
        <div key={product._id} class="card">
        <a href={`/product/${product._id}`}>
          <img class="medium" src={product.image} alt="product" />
        </a>
        <div class="card-body">
          <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
          <Rating rating={product.rating} numReviews={product.numReviews}/>
          <div class="price">
            ${product.price}
          </div>
        </div>
        </div>
    </div>
  )
}
