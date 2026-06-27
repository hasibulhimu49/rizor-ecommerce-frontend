import React from "react";
import "./ProductCard.css";

const ProductCard = ({props}) => {
  return (
    <div className="productCard w-60 bg-white rounded-lg overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="h-72 overflow-hidden">
        <img
          className="w-full h-full object-cover object-top-left transition-transform duration-300 hover:scale-105"
          src={props.imageUrl}
        />
      </div>

      {/* Product Details */}
      <div className="textPart p-4">
        <p className="text-sm font-semibold text-gray-500">
          {props.brand}
        </p>

        <h3 className="mt-1 text-base font-medium text-gray-800">
          {props.title}
        </h3>

        <div className="flex items-center gap-2 mt-3">
          <span className="font-bold text-lg">৳{props.price}</span>

          <span className="text-gray-400 line-through">
            ৳{props.discountedPrice}
          </span>

          <span className="text-green-600 font-semibold">
            {props.discountedPersent}% Off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;