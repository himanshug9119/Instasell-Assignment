export default function Column3(){
    return (
      <div className="w-1/3 p-1 border border-slate-300 rounded-lg">
        <div className="px-6 py-4">
          <div className="font-inter text-md font-semibold leading-5 tracking-normal mb-2">
            Seamlessly Integrate Custom HTML Elements
          </div>
          <p className="font-inter text-sm font-normal leading-5 tracking-normal text-left">
            Unleash creativity with our Custom HTML feature. Add links, custom
            messages, or any HTML content to elevate the tracking page
            experience for your customers. Replace "Your Body Text Here" with
            your actual body text. Adjust the classes as needed based on your
            design requirements.
          </p>
        </div>
        <div>
          <label
            htmlFor=""
            className="block pl-4 font-inter text-sm font-normal leading-5 tracking-normal text-left"
          >
            HTML Link
          </label>
          <input
            type="text"
            className="p-4 m-4 w-200 h-50 border
                border-slate-300"
            style={{ width: "350px", height: "170px" }}
            placeholder="Value"
          />
        </div>
        <div className="px-6 py-1 font-inter text-sm font-medium leading-4 tracking-normal flex gap-2">
          <button className="rounded-xl border border-slate-200 p-2">
            Preview
          </button>
          <button className="bg-button-color text-white py-2 px-2 rounded-xl">
            Apply Changes
          </button>
        </div>
      </div>
    );
}