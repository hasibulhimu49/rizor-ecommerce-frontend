import React from "react";

const DeliveryAddressForm = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <div className="grid lg:grid-cols-3 gap-8">

        {/* Saved Address */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md border border-gray-200">

            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold mb-4">Saved Address</h2>

              <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition">
                <h3 className="font-semibold text-lg">
                  Mohammad Hasibul Hasan
                </h3>
                <p className="text-gray-600 mt-2">
                  Mirpur-1, Dhaka, Bangladesh
                </p>
                <p className="mt-3">
                  <span className="font-semibold">Phone:</span> 01705064149
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition">
                <h3 className="font-semibold text-lg">
                  Mohammad Hasibul Hasan
                </h3>
                <p className="text-gray-600 mt-2">
                  Mirpur-1, Dhaka, Bangladesh
                </p>
                <p className="mt-3">
                  <span className="font-semibold">Phone:</span> 01705064149
                </p>
              </div>
            </div>

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