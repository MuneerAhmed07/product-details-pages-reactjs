import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = ({products}) => {

    const {id} = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if(!product) {
        return <p>Product Not Found!</p>
    }

  return (
    <div className='product-details'>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className='product-image-large' />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to="/" className='back-link'>
      Back to Product Page
      </Link>
    </div>
  )
}

export default ProductDetail
