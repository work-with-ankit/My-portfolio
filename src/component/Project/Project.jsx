import React from 'react';
import ProjectCard from './ProjectCard';

function Portfolio() {
  const projects = [
    {
      image: 'https://www.track-sys.com/wp-content/uploads/2018/04/gps-location-tracking-device.png',
     title: 'RealTime-LocationTracker',
     main: 'Real-Time Location Tracker – Built with Node.js, Socket.io, Express.js, MongoDB, and JavaScript, enabling seamless live location sharing with instant updates and smooth user interactions.',
     sourceCodeDownload: 'https://github.com/work-with-ankit/Real-Time-Device-Tracker' 
   },
     
   {
    image: 'https://static.vecteezy.com/system/resources/previews/000/561/500/original/chat-app-logo-icon-vector.jpg',
   title: 'Group-ChatApp',
   main: 'This is a real-time chat application built using Node.js, Socket.io, and React, with Material UI for the frontend. Users can join different chat rooms and send/receive messages in real time. ',
   sourceCodeDownload: 'https://github.com/work-with-ankit/Real-Time-Device-Tracker' 
 },

    {
       image: 'https://pngimg.com/uploads/pinterest/pinterest_PNG75.png',
      title: 'PinSpire',
      main: '"A modern Pinterest clone built with Node.js, Express, MongoDB, and Mongoose, featuring dynamic EJS templates for seamless user interaction and beautiful pinboards."',
      sourceCodeDownload: 'https://github.com/work-with-ankit/Pinspire.git'  
    },
    {
       image: 'https://c8.alamy.com/comp/2J7FD8R/event-management-creation-and-development-personal-and-corporate-events-2J7FD8R.jpg',
      title: 'Event-Management',
      main: 'A real-time event management app built with MERN stack & Socket.IO, allowing users to create, manage, and join events seamlessly. Features JWT authentication, Cloudinary image hosting, and a responsive UI for a smooth experience.',
      sourceCodeDownload: 'https://example.com/project-two.zip' 
    },
    {
      image: 'https://i.pinimg.com/originals/e2/a6/6c/e2a66cd4a51769e546fa8389f4d7f4d9.jpg',
     title: 'My-Portfolio',
     main: '"My personal portfolio, crafted with Tailwind CSS and JavaScript, highlighting my projects, skills, and expertise in frontend development.',
     sourceCodeDownload: 'https://example.com/project-two.zip' 
   },
    
  ];

  return (
    <div
  id="projects"
  className="relative flex justify-center items-center min-h-screen bg-gray-900 bg-[url(/img/mountains.jpg)]"
>
  <h1
    className="absolute top-4 left-[86px] text-white text-2xl sm:text-3xl lg:text-4xl font-bold animate-fade-in-down z-10"
  >
    My Projects
  </h1>
  <div className="container mx-auto p-4 mt-16">
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          main={project.main}
          sourceCodeDownload={project.sourceCodeDownload}
          image={project.image}
        />
      ))}
    </div>
  </div>
</div>

  

  );
}

export default Portfolio;
