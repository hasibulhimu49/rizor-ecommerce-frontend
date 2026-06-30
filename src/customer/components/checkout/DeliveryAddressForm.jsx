import React from "react";
import AddressCart from "./AddressCart";

const DeliveryAddressForm = () => {


  
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <div className="grid lg:grid-cols-3 gap-8">

        {/* Saved Address */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md border border-gray-200">
            <AddressCart/>
            <AddressCart/>
          </div>
        </div>

        {/* Delivery Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">

            <h2 className="text-2xl font-bold mb-6">
              Delivery Information
            </h2>

            <form className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Last Name *"
                  className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <textarea
                placeholder="Street Address *"
                rows="4"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="City *"
                  className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="State *"
                  className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Postal Code *"
                  className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Phone Number *"
                  className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Deliver Here
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default DeliveryAddressForm;