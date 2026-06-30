import React from "react";

const AddressCart = ({title}) => {
  return (
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition">
        <h3 className="font-semibold text-lg">Mohammad Hasibul Hasan</h3>
        <p className="text-gray-600 mt-2">Mirpur-1, Dhaka, Bangladesh</p>
        <p className="mt-3">
          <span className="font-semibold">Phone:</span> 01705064149
        </p>
      </div>
    </div>
  );
};

export default AddressCart;
