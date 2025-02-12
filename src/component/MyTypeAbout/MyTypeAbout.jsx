import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ankit from "../../assets/Cartoon.png";

function ProjectCard({ title, main }) {
  return (
    <div className="p-4 border border-gray-600 rounded-lg bg-gray-800 shadow-md flex items-center gap-4">
      <IoIosArrowRoundForward className="text-2xl text-white" />
      <div>
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="text-gray-300">{main}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 mt-10"
    >
      <div>
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={ankit} alt="Cartoon" />
          <ul>
            <li className="flex gap-10 py-4">
              <ProjectCard
                title="Blogging-Website"
                main="This is a blogging website created in Next.js with some component libraries."
              />
            </li>
            <li className="flex gap-10 py-4">
              <ProjectCard
                title="Clone"
                main="This is a clone website created in Next.js with some component libraries."
              />
            </li>
            <li className="flex gap-10 py-4">
              <ProjectCard
                title="Coaching-Website"
                main="This is a coaching website created in Next.js with some component libraries."
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
