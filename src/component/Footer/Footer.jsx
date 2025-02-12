import React from 'react';
import { MdAttachEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div id='Footer' className='flex flex-col md:flex-row justify-around bg-[#0A192F] text-[#A0AEC0] p-6 md:p-12 items-center rounded-md'>
        <div className='text-center md:text-left'>
            <h1 className='text-2xl md:text-6xl font-bold'> Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'> Feel Free to reach out</h3>
        </div>

        <ul className='mt-6 md:mt-0'>
        <li className='flex gap-5 items-center hover:underline hover:underline-offset-4 hover:transition-all hover:duration-300 hover:cursor-pointer'>
    <MdAttachEmail color='#D93025' size={30} />
    <a href="mailto:devankit2024@gmail.com">devankit2024@gmail.com</a>
</li>

            <li className='flex gap-5 items-center hover:underline hover:underline-offset-4 hover:transition-all hover:duration-300 hover:cursor-pointer'>
                <CiLinkedin color='#0077B5' size={30} />
                <a href="https://www.linkedin.com/in/ankit-singh-8a6a4724b">www.linkedin.com/in/ankit-singh</a>
            </li>
            <li className='flex gap-3 items-center hover:underline hover:underline-offset-4 hover:transition-all hover:duration-300 hover:cursor-pointer'>
                <FaGithubSquare color='#28A745' size={40} />
                <a href="https://github.com/work-with-ankit">github.com/work-with-ankit</a>
            </li>

            <li className='flex gap-3 items-center hover:underline hover:underline-offset-4 hover:transition-all hover:duration-300 hover:cursor-pointer'>
    <FaWhatsapp color='#28A745' size={40} />
    <a href="https://wa.me/91 7452977412" target="_blank" rel="noopener noreferrer">
        +91 7452977412
    </a>
</li>
        </ul>
    </div>
  );
}

export default Footer;
