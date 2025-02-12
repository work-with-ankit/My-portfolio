import React from 'react';

function ProjectCard({ title, main, sourceCodeDownload, image }) {

  
  const handleDownloadClick = () => {
    if (sourceCodeDownload) {
      window.location.href = sourceCodeDownload; 
    }
  };

  return (
    <div className="p-3 flex flex-col items-center bg-[#0c0e19] shadow-md shadow-slate-800 rounded-xl hover:shadow-md hover:shadow-red-600 hover:scale-105 transition-all duration-300 ">
      
    
      <img className="w-48 h-32 rounded-md mb-3" src={image} alt="project banner" />
      
      <h3 className="text-xl font-semibold mb-2 text-center text-white">{title}</h3>
      
      <p className="text-m text-gray-300 text-center mb-3">{main}</p>
      
      <div className="flex justify-center">
       
        <button 
          className="text-white py-1.5 px-4 text-sm font-semibold rounded-lg bg-[#202fd4] hover:scale-105 duration-200"
          onClick={handleDownloadClick}
        >
          Download Code
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
