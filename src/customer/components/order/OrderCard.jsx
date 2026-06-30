import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="w-full bg-white rounded-lg shadow-md border border-gray-200 p-5 my-5">
      <div className="flex items-center justify-between">

        {/* Product Info */}
        <div className="flex items-center gap-5">
          <div className="w-24 h-24 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3UoQ-x1tB7_iF7Ea8uVFXMl2qT18oHDla7NHENABLQ&s=10"
              alt="Product"
            />
          </div>

          <div>
            <h1 className="text-sm font-medium">
              Men Slim Mid Rise Black Jeans
            </h1>
            <p className="text-xs text-gray-500 mt-1">Size: M</p>
          </div>
        </div>

        {/* Price */}
        <div>
          <p className="font-semibold text-lg">৳1000</p>
        </div>

        {/* Delivery Status */}
        <div className="text-right">
          <h1 className="text-sm font-medium">
            Expected Delivery on March 20
          </h1>
          <p className="text-xs text-green-600 mt-1">
            Your item has been delivered
          </p>
        </div>

      </div>
    </div>
  );
};

export default OrderCard;