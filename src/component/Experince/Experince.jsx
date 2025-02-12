import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { MdHtml } from "react-icons/md";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMysql, SiExpress } from "react-icons/si";
import ainwiklogo from "../../assets/ainwik.jpg";

function Experince() {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experince</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex-items-center rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-red-800">
            <MdHtml color="#E44D26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex-items-center rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-red-800">
            <FaHtml5 color="#E34F26 " size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex-items-center rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-red-800">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex-items-center rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-red-800">
            <IoLogoJavascript color="F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex-items-center rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-red-800">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex-items-center rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-red-800">
            <FaNodeJs color="#6cc24a" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex-items-center rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-red-800">
            <SiExpress color="F7DF1E" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex-items-center rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-red-800">
            <FaJava color="F7DF1E" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex-items-center rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-red-800">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex-items-center rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-red-800">
            <SiMysql color="#F29111" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex-items-center rounded-2xl hover:scale-105 hover:shadow-md hover:shadow-red-800">
            <RiTailwindCssFill color="#2563eb" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            {/* <FcGoogle color="#4285f4" size={50} /> */}
            <img
        src={ainwiklogo}
        alt="Ainwik Logo"
        style={{
          width: "60px", 
          height: "60px", 
          background:"blue",
          borderRadius: "44px"
        }}
      />
            <span className="text-white">
              <h2>JAVA FULL,STACK-DEVELOPER</h2>
              <p className="text-sm leading-tight font-thin">
                March-2023-To-January-2024 
              </p>
              <ul className="text-sm p-2">
                <li> Java Full stack Training </li>
                <li></li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            {/* <RiNetflixFill color="#4285f4" size={50} /> */}
            <img
        src={ainwiklogo}
        alt="Ainwik Logo"
        style={{
          width: "60px", 
          height: "60px", 
          background:"blue",
          borderRadius: "44px"
        }}
      />
            <span className="text-white">
              <h2>MERN STACK-DEVELOPER</h2>
              <p className="text-sm leading-tight font-thin">
                 February-2024-TO-JULY-2024
              </p>
              <ul className="text-sm p-2">
                <li>Mern Full stack Training</li>
                <li></li>
              </ul>
            </span>
          </div>

          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <img
        src={ainwiklogo}
        alt="Ainwik Logo"
        style={{
          width: "50px", 
          height: "50px", 
          background:"blue",
          borderRadius: "44px"
        }}
      />
            <span className="text-white">
              <h2>EX-INTERN</h2>
              <p className="text-sm leading-tight font-thin">
                August-2024 To Nav-2024
              </p>
              <ul className="text-sm p-2">
                <li>Work as a  full stack Developer</li>
                <li>Team-Leader of frontend</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experince;
