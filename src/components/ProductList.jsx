import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = ({products}) => {
  return (
    <div className='product-list'>
      <h1>Product List</h1>
      <div className='products'>
        {
            products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <Link to={`/product/${product.id}`} className='details-link'>View Details</Link>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default ProductList;
