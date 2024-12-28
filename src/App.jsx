import React from 'react';
import ProductList from './components/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

const App = () => {

  
const products = [
  {
    id: 1,
    name: "Laptop",
    description: "A high-performance laptop with 16GB RAM and 512GB SSD.",
    price: 1200,
    image: "https://img.freepik.com/free-photo/blogger-laptop-by-luggage-airport_53876-143009.jpg?ga=GA1.1.491397746.1735151544&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Phone",
    description: "A smartphone with a 6.5-inch display and excellent camera.",
    price: 800,
    image: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437112.jpg?ga=GA1.1.491397746.1735151544&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling headphones with high-quality sound.",
    price: 200,
    image: "https://img.freepik.com/free-photo/white-headphone-dual-red-yellow-background_23-2147889914.jpg?ga=GA1.1.491397746.1735151544&semt=ais_hybrid",
  },
];

  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList products={products}/>} />
        <Route path='/product/:id' element={<ProductDetail products={products} />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;
