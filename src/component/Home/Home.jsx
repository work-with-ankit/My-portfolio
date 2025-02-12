import React from 'react';
import ankit from "../../assets/ankit.jpg";
import TextChanger from '../TextChanger';

function Home() {
  return (
    <div className="text-white flex flex-col md:flex-row w-full items-start p-10 md:p-20">
   
      <div className="md:w-1/2 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChanger/>
        </h1>
        <p className="text-sm md:text-xl tracking-tight mt-4 font-semibold  ">
          Hi, I'm Ankit, a passionate software developer specializing in building efficient,
          scalable, and innovative solutions. I thrive on solving complex problems and creating
          impactful digital experiences.
        </p>
        <a href="#Footer"><button  className=" hover:shadow-lg hover:shadow-green-800 mt-5 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button></a>
      </div>

      
      <div className="flex justify-center md:justify-end md:w-1/2 mt-10 md:mt-0  ">
      <img 
  className="rounded-full mr-14 z-10 w-40 md:w-60 animate-bounce-custom transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-red-500/50" 
  src={ankit} 
  alt="Ankit Singh" 
/>


      </div>
    </div>
  );
}

export default Home;
