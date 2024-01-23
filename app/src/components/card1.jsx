import React from "react";

export default function Card1() {
  return (
    <div className="bg-red-100 max-w-sm rounded p-4 h-50">
      <div className="text-md font-inter font-semibold mb-2">
        Order Sync Successful
      </div>
      <p className="text-gray-700 text-md font-inter font-normal">
        Your order details from the last 30 days have been successfully synced.
        Check them out now!
      </p>
      <div className="mt-4">
        <button className="bg-button-color text-white font-inter text-xs font-medium py-2 px-2 rounded">
          Explore Your Orders
        </button>
      </div>
    </div>
  );
}
