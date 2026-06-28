import React from "react";

const ProductSimilerCard = () => {
  return ( 
    <div className=" mx-4 my-5 group w-54 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      
      {/* Product Image */}
      <div className="overflow-hidden h-72 bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1622445275463-afa2ab738c34?fm=jpg&q=60&w=3000&auto=format&fit=crop"
          alt="Mens white half sleeve tee-shirt"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
          Rizor Collection
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          This is a totally good product.
        </p>
      </div>
    </div>
  );
};

export default ProductSimilerCard;