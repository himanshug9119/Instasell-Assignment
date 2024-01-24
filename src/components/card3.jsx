import React from "react";

export default function Card3() {
  return (
    <div className="max-w-sm rounded bg-blue-dark p-4 h-50">
      <div className="text-md font-inter font-semibold mb-2">
        Your Tracking Link has been generated
      </div>
      <p className="text-gray-700 text-md font-inter font-normal">
        Include the Link to Your Store's Navigation Menu. Very Good Experience.
      </p>
      <div className="mt-2 flex gap-2">
        <button className="rounded-xl border border-slate-200 bg-white p-1 m-2">
          Copy Link
        </button>
        <button className="bg-button-color text-white font-inter text-xs font-medium py-2 px-2 rounded">
          Go To Navigation Menu
        </button>
      </div>
    </div>
  );
}


