import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Experince from './component/Experince/Experince'
import Project from './component/Project/Project'
import Footer from './component/Footer/Footer'


// import MyTypeAbout from './component/MyTypeAbout/MyTypeAbout'

function App() {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
    <Navbar/>
    <Home/>
    <About/>

    <Experince/>
    {/* <MyTypeAbout/> */}
    <Project/>
    <Footer/>
   
    </div>
  )
}

export default App