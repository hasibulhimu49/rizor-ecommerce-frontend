import React from 'react'
import Navigation from "./customer/components/navigation/Navigation";
import HomePages from './customer/pages/HomePages';
import Footer from './customer/components/Footer/Footer';
import ProductCard from './customer/components/product/ProductCard';
import Product from './customer/components/product/Product';
import ProductDetails from "./customer/components/productDetails/ProductDetails"

const App=()=> {
  return (
    <div>
      <Navigation/>
      <div>
        {/* <HomePages/> */}
        {/* <Product/> */}
        <ProductDetails/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default App;