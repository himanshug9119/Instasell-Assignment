export default function Page2() {
  return (
    <div className="bg-orange-light w-full pl-10 pr-12">
      <h1 className="text-2xl font-inter font-semibold leading-8 tracking-tight p-4">
        Instant Dive into Your Performance Metrics
      </h1>
      <div>
        <ul className="flex gap-6 p-4 font-inter text-sm font-semibold">
          <li>
            <button className="p-2 bg-white"> Life Time</button>
          </li>
          <li>
            <button className="p-2 bg-white"> Last Time</button>
          </li>
          <li>
            <button className="p-2 bg-white"> Last Month</button>
          </li>
          <li>
            <button className="p-2 bg-white"> Life Year</button>
          </li>
          <li>
            <button className="p-2 bg-white"> Customize Time Line</button>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 p-4">
        <div className="w-2/5 bg-white"></div>
        <div className="w-1/5 rounded-lg p-3 bg-gray-dark text-white">
          <h1 className="font-inter text-md font-semibold">
            Star Facts about your orders!!!
          </h1>
          <br />
          <p className="font-inter text-sm font-normal">
            There are 8 shipments that have been in out for delivery for more
            than 3 days.
          </p>
          <br />
          <p className="font-inter text-sm font-normal ">
            There are 5 shipments in exception right now
          </p>
          <br />
          <p className="font-inter text-sm font-normal ">
            The maximum chargebacks are from Miami.
          </p>
          <br />
          <button className="font-inter text-sm font-medium bg-white text-black rounded-md px-2 py-2">
            Check Orders Page
          </button>
        </div>
        <div className="w-2/5 rounded-md bg-white">
          <div>
            <h1 className="font-inter text-md font-semibold p-4 pb-2">
              Tracking Page Views Vs Orders
            </h1>
            <p className="font-inter text-sm font-normal p-4 pt-2">
              Understand user engagement patterns and optimize your tracking
              page for enhanced customer experiences
            </p>
          </div>
          <div>
            <div className="flex justify-between rounded-md bg-order-color p-4 m-4">
              {/* First Column */}
              <div className="p-4">
                <p className="font-inter text-sm font-medium pb-2">Orders</p>
                <h1 className="font-inter text-3xl font-bold leading-12 tracking-tighter">
                  80
                </h1>
              </div>

              {/* Second Column */}
              <div className="flex items-center ml-4">
                <img src="order.png" alt="order" />
              </div>
            </div>
            <div className="flex justify-between rounded-md bg-eye-color p-4 m-4">
              {/* First Column */}
              <div className="p-4">
                <p className="font-inter text-sm font-medium pb-2">
                  Tracking Page Views
                </p>
                <h1 className="font-inter text-3xl font-bold leading-12 tracking-tighter">
                  44
                </h1>
              </div>

              {/* Second Column */}
              <div className="flex items-center ml-4">
                <img src="../assets/icons/eye.jpg" alt="order" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Icon */

// position: absolute;
// left: 17.5%;
// right: 17.5%;
// top: 17.5%;
// bottom: 17.5%;

// background: #4A4A4A;
