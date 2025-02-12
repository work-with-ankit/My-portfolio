
import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";


function Navbar() {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-10 pt-6 md:px-20">
     
     <div className="flex items-center space-x-3">
  <img
    src="https://img.freepik.com/free-vector/hacker-activity-concept_23-2148533309.jpg?t=st=1738066095~exp=1738069695~hmac=2d2c45da650694b7fb80912d1993b7f19404a9caf97bd8af890327499681fbe5&w=740" 
    alt="Logo"
    className="w-12 h-12 rounded-full object-cover"
  />
  <span className="text-xl font-bold tracking-wide">Portfolio</span>
</div>

     
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-0 bg-black px-4 rounded-xl opacity-90 md:opacity-100 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a
          href="#About"
          className="text-md relative transition-all duration-300 p-1 md:p-0 group"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>

    
        <a
          href="#Experience"
          className="text-md relative transition-all duration-300 p-1 md:p-0 group"
        >
          Experience
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#projects"
          className="text-md relative transition-all duration-300 p-1 md:p-0 group"
        >
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#Footer"
          className="text-md relative transition-all duration-300 p-1 md:p-0 group"
        >
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </ul>

      {/* Menu Toggle Buttons */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setMenu(true);
            setShowMenu(false);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setMenu(false);
            setShowMenu(true);
          }}
        />
      )}
    </nav>
  );
}

export default Navbar;
