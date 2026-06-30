import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On the way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const Order = () => {
  return (
    <div className="flex items-start">
      

      {/* Filter */}
      <div className="mx-10 my-5 w-100 rounded-md border border-gray-200 shadow-lg top-2 sticky">
        <div className="mx-2">
          <h1 className="font-bold pt-2 pb-5">Filter</h1>
          <h1 className="font-semibold">ORDER STATUS</h1>
        </div>
        <div className="flex flex-col justify-start mx-2 py-2">
          {orderStatus.map((item, idx) => (
            <label key={idx} className="opacity-70 py-1">
              <input type="checkbox" defaultValue={item.value} />
              <span className="pl-3"> {item.label}</span>
            </label>
          ))}
        </div>
      </div>


      {/* Order card */}
      <div className="w-full mr-5">
        {
            [1,1,1,1,1].map((item)=>  <OrderCard />)
        }
      </div>

      
    </div>
  );
};

export default Order;
