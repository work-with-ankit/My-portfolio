import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ankit from "../../assets/Cartoon.png";

function About() {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 mt-10">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center ">
       
        <img className="md:h-80 animate-scale-slow" src={ankit} alt="Cartoon" />

          <ul>
            <div className="flex gap-10 py-4">
              <IoIosArrowRoundForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal hover:text-red-500">
                  Frontend-Developer
                </h1>
                <p className="text-sm md:text-md leading-tight text-gray-400 font-sans font-semibold ">
                  I specialize in modern technologies such as React, Tailwind
                  CSS, and JavaScript to craft responsive and scalable
                  applications that deliver seamless user experiences.
                </p>
              </span>
            </div>

            <div className="flex gap-10 py-4">
              <IoIosArrowRoundForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal hover:text-red-500">
                  Backend-Developer
                </h1>
                <p className="text-sm md:text-md leading-tight  text-gray-400 font-sans font-semibold">
                  I am a dedicated and solution-driven backend developer with
                  expertise in designing and implementing robust, scalable, and
                  secure server-side applications. Proficient in technologies
                  like Node.js, Express, and databases such as MongoDB and
                  MySQL, I excel at building efficient APIs and seamless
                  integrations that power dynamic web applications.
                </p>
              </span>
            </div>

            <div className="flex gap-10 py-4">
              <IoIosArrowRoundForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal hover:text-red-500">
                  DataBase-Developer
                </h1>
                <p className="text-sm md:text-md leading-tight  text-gray-400 font-sans font-semibold">
                  I specialize in creating scalable and secure database
                  architectures. My skills include writing complex queries,
                  designing efficient schemas, and performing performance
                  tuning to handle large datasets.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
