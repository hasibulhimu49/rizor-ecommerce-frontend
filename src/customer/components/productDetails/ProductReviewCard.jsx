import Rating from "@mui/material/Rating";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div className="flex flex-row m-5 pt-2 ">
      <div className=" w-12 h-12 bg-blue-500 rounded-full gap-5 flex justify-center items-center">
        <h1 className="font-bold text-black ">H</h1>
      </div>
      <div className="pl-5">
        <h1 className="font-bold ">Mohammad Hasibul Hasan</h1>
        <p className="text-gray-500">28 June, 2026</p>
        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
        <p>Nice product i love the tee-shirt</p>
      </div>
    </div>
  );
};

export default ProductReviewCard;
