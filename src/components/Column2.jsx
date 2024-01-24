export default function Column2(){
    return (
      <div className="w-1/3 p-2">
        {/* First Row in Second Column */}
        <div className="mb-2 bg-white rounded-xl border border-slate-300">
          <div className="px-6 py-4">
            <div className="font-inter text-md font-semibold leading-5 tracking-normal text-left mb-2">
              Exclusive Onboarding Support for High-Volume Brands
            </div>
            <p className="font-inter text-sm font-normal leading-5 tracking-normal text-left">
              Unlock personalized guidance! Book a one-on-one onboarding call to
              streamline your experience.
            </p>
          </div>
          <div className="px-6 py-1">
            <button className="bg-button-color text-white font-inter text-sm font-medium leading-4 tracking-normal py-2 px-2 rounded-xl">
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Second Row in Second Column */}
        <div className=" bg-white rounded-lg border border-slate-300">
          <div className="px-6 py-4">
            <div className="font-inter text-md font-semibold leading-5 tracking-normal mb-2">
              Explore Our Integrated Ecosystem
            </div>
            <p className="font-inter text-sm font-normal leading-5 tracking-normal text-left">
              Discover a variety of popular integrations tailored for your
              convenience.
            </p>
          </div>
          <img src="../assets/icons/Logos.png" alt="Logo" />
          <div className="px-6 py-1">
            <button className="bg-button-color text-white font-inter text-sm font-medium leading-4 tracking-normal py-2 px-2 rounded-xl">
              Explore Integrations
            </button>
          </div>
        </div>
      </div>
    );
}