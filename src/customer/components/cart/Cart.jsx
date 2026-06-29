import React from "react";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold  text-gray-800">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {
                [1,1,1,1,1,1,1].map((item)=><CartItem />)
            }
          </div>

          {/* Price Details */}
          <div className="bg-white shadow-lg rounded-lg border border-gray-50 p-6 h-fit sticky top-5 mt-5">
            <h2 className="text-lg font-bold text-gray-700 border-b pb-3">
              PRICE DETAILS
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex justify-between text-gray-600">
                <p>Price (3 Items)</p>
                <p className="font-semibold">
                  <FontAwesomeIcon
                    icon={faBangladeshiTakaSign}
                    className="text-xs mr-1"
                  />
                  4700
                </p>
              </div>

              <div className="flex justify-between text-gray-600">
                <p>Discount</p>
                <p className="font-semibold text-green-600">
                  -
                  <FontAwesomeIcon
                    icon={faBangladeshiTakaSign}
                    className="text-xs mx-1"
                  />
                  170
                </p>
              </div>

              <div className="flex justify-between text-gray-600">
                <p>Delivery Charge</p>
                <p className="font-semibold text-green-600">FREE</p>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold text-gray-800">
                <p>Total Amount</p>
                <p>
                  <FontAwesomeIcon
                    icon={faBangladeshiTakaSign}
                    className="text-xs mr-1"
                  />
                  4530
                </p>
              </div>

              <hr />

              <p className="text-green-600 text-sm font-semibold">
                You will save
                <FontAwesomeIcon
                  icon={faBangladeshiTakaSign}
                  className="text-xs mx-1"
                />
                170 on this order.
              </p>

              <button className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white font-semibold py-3 rounded-md shadow-md">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
