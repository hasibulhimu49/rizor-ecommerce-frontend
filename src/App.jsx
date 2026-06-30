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
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './routes/CustomerRoutes';

const App=()=> {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
    </div>
  )
}

export default App;