import React from "react";
import AddressCart from "../checkout/AddressCart";
import OrderTracker from "./OrderTracker";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const OrderDetails = () => {
  return (
    <div>
      <div>
        <AddressCart  title="Delivery Address"/>
      </div>
      <div>
        <OrderTracker activeStep={3} />
      </div>

      <div className="m-10 shadow-lg border-gray-100 rounded-md  ">
        {[1, 2, 3, 4, 5].map((item) => (
          <div className="flex items-center justify-between hover:translate-y-2 hover:shadow-2xl transation-all duration-200 my-5">
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
                <p className="text-xs text-gray-500 mt-1">
                  Color: Red - Size: M
                </p>
                <p className="text-xs  mt-1">Seller: Rizor</p>
                <p className="text-xs  mt-1">৳1000</p>
              </div>
            </div>

            {/* Delivery Status */}
            <div className="text-right pr-5">
              <h1 className="text-sm font-medium text-blue-500">
                <StarBorderIcon sx={{ fontSize: "14px" }} />
                Rate and Review Product
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;
