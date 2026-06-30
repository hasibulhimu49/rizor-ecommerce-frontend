import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "../customer/pages/HomePages";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/navigation/Navigation";
import Cart from "../customer/components/cart/Cart";
import Product from "../customer/components/product/Product";
import ProductDetails from "../customer/components/productDetails/ProductDetails";
import Checkout from "../customer/components/checkout/Checkout";
import Order from "../customer/components/order/Order";
import OrderDetails from "../customer/components/order/OrderDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation/>
      </div>

      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
            <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
      </Routes>

      <div>
        <Footer/>
      </div>

    </div>
  );
};
export default CustomerRoutes;


        
