import { useState } from "react";
export default function Column1() {
  const [backgroundColor, setBackgroundColor] = useState("#FFD700");
  const [accentColor, setAccentColor] = useState("#0079fa");
  const [textColor, setTextColor] = useState("#6ae651");
  return (
    <div className="w-1/3 p-2 border border-slate-300 rounded-xl">
      <div>
        <div className="px-6 py-4">
          <div className="font-inter text-md font-semibold leading-5 tracking-normal text-left mb-2">
            Elevate Your Brand Aesthetics with Custom Tracking Page Styles
          </div>
          <p className="font-inter text-sm font-normal leading-5 tracking-normal text-left">
            Immerse your customers in a branded experience by personalizing the
            colors on your tracking page.
          </p>
        </div>
        <div>
          <div className="rounded-lg font-inter text-sm font-normal leading-5 tracking-normal p-4">
            {/* Content of the div */}
            <label htmlFor="colorInput" className="block mb-1">
              Accent Color:
            </label>

            {/* Display the hex value */}
            <div className="flex items-center">
              <input
                type="text"
                id="hexValue"
                value={accentColor}
                placeholder="Chosen Color's Hex value"
                readOnly
                className="border border-gray-400 p-2 w-4/5 h-10 rounded-xl"
              />
              <div className="rounded-2xl overflow-hidden">
                <input
                  type="color"
                  id="colorInput"
                  value={accentColor}
                  onChange={(e) => setAccentColor(e.target.value)}
                  className="p-0 m-2 h-10 w-20"
                />
              </div>
            </div>
            <label htmlFor="colorInput" className="block mb-1">
              Text Color:
            </label>

            {/* Display the hex value */}
            <div className="flex items-center">
              <input
                type="text"
                id="hexValue"
                value={textColor}
                placeholder="Chosen Color's Hex value"
                readOnly
                className="border border-gray-400 p-2 w-4/5 h-10 rounded-xl"
              />
              <div className="rounded-2xl overflow-hidden">
                <input
                  type="color"
                  id="colorInput"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="p-0 m-2 h-10 w-20"
                />
              </div>
            </div>
            <label htmlFor="colorInput" className="block mb-1">
              Background Color:
            </label>

            {/* Display the hex value */}
            <div className="flex items-center">
              <input
                type="text"
                id="hexValue"
                value={backgroundColor}
                placeholder="Chosen Color's Hex value"
                readOnly
                className="border border-gray-400 p-2 w-4/5 h-10 rounded-xl"
              />
              <div className="rounded-2xl overflow-hidden">
                <input
                  type="color"
                  id="colorInput"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="p-0 m-2 h-10 w-20 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-1 font-inter text-sm font-medium leading-4 tracking-normal flex gap-2">
        <button className="rounded-xl border border-slate-200 p-2">
          Preview
        </button>
        <button className="bg-button-color text-white py-2 px-2 rounded-xl">
          Apply Colors
        </button>
      </div>
    </div>
  );
}
