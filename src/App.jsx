import React from 'react'
import Navigation from "./customer/components/navigation/Navigation";
import HomePages from './customer/pages/HomePages';
import Footer from './customer/components/Footer/Footer';
import ProductCard from './customer/components/product/ProductCard';
import Product from './customer/components/product/Product';
import ProductDetails from "./customer/components/productDetails/ProductDetails"
import Cart from './customer/components/cart/Cart';
import Checkout from './customer/components/checkout/Checkout';
import Order from './customer/components/order/Order';
import OrderDetails from './customer/components/order/OrderDetails';

const App=()=> {
  return (
    <div>
      <Navigation/>
      <div>
        {/* <HomePages/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        <OrderDetails/>
      </div>
      <Footer/>
      
    </div>
  )
}

export default App;