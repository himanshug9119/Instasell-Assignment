// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   AiOutlineUser,
//   AiOutlineSetting,
//   AiOutlineSearch,
// } from "react-icons/ai";

// const Header = () => {
//   return (
//     <header className="fixed bg-white z-50">
//       <div className="flex justify-between items-center h-20 text-2xl text-slate-600">
//         {/* Left Hug */}
//         <ul className="flex gap-6">
//           {/** Navigation Links */}
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/orders">Orders</NavLink>
//           <NavLink to="/integrations">Integrations</NavLink>
//           <li>
//             <select name="" id="">
//               <option value="">Tracking Page</option>
//             </select>
//           </li>
//           <NavLink to="/partner">Partner With Us</NavLink>
//         </ul>

//         {/* Right Hug */}
//         <ul className="flex gap-6">
//           {/** Search Bar */}
//           <Link>
//             <li className="flex justify-between items-center gap-1 focus:outline-none">
//               <button>
//                 <AiOutlineSearch className="text-slate-600 underline" />
//               </button>
//               <input
//                 type="text"
//                 placeholder="Search.."
//                 className="w-20 underline mb-1"
//               />
//             </li>
//           </Link>

//           {/** User and Settings Links */}
//           <NavLink to="/accounts">
//             <HeaderLink
//               icon={<AiOutlineUser />}
//               label="Accounts"
//             />
//           </NavLink>
//           <NavLink to="/settings">
//             <HeaderLink icon={<AiOutlineSetting />} label="Settings" />
//           </NavLink>
//         </ul>
//       </div>
//       <hr className="m-0 p-0" />
//     </header>
//   );
// };

// const NavLink = ({ to, children }) => (
//   <Link to={to}>
//     <li>{children}</li>
//   </Link>
// );

// const HeaderLink = ({ icon, label }) => (
//   <li className="flex justify-between items-center gap-1">
//     {icon}
//     <span>{label}</span>
//   </li>
// );

// export default Header;




import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineSearch,
} from "react-icons/ai";

const Header = () => {
  return (
    <header className="fixed bg-white z-50 w-full pl-12 pr-12">
      <div className="flex justify-between h-14 text-md font-inter font-bold text-slate-600 gap-20  ">
        {/* Left Hug */}
        <div className="flex justify-between items-center gap-6">
          {" "}
          {/* Increased the gap from 6 to 8 */}
          {/** Navigation Links */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/integrations">Integrations</NavLink>
          <div>
            <select name="" id="">
              <option value="">Tracking Page</option>
            </select>
          </div>
          <NavLink to="/partner">Partner With Us</NavLink>
        </div>

        {/* Right Hug */}
        <div className="flex justify-between items-center gap-6">
          {/** Search Bar */}
          <Link>
            <div className="flex justify-between items-center gap-1 focus:outline-none">
              <button>
                <AiOutlineSearch className="text-slate-600 underline" />
              </button>
              <input
                type="text"
                placeholder="Search.."
                className="w-20 underline mb-1"
              />
            </div>
          </Link>

          {/** User and Settings Links */}
          <NavLink to="/accounts">
            <HeaderLink icon={<AiOutlineUser />} label="Accounts" />
          </NavLink>
          <NavLink to="/settings">
            <HeaderLink icon={<AiOutlineSetting />} label="Settings" />
          </NavLink>
        </div>
      </div>
      <hr className="m-0 p-0" />
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to}>
    <div>{children}</div>
  </Link>
);

const HeaderLink = ({ icon, label }) => (
  <div className="flex justify-between items-center gap-1">
    {icon}
    <span>{label}</span>
  </div>
);

export default Header;
