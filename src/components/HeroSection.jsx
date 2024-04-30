import React from "react";
import { useState } from "react";
function HeroSection() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
          
                <div className='w-[85%] h-auto flex md:flex-row flex-col mx-auto   py-6 '>
                    <div className="w-auto h-auto pr-8" >
                        <h1 className="font-bold text-3xl" style={{color:'#005895'}}>SILK VISION
                        <span className="md:hidden float-right "> 
                         <a className="text-4xl font-bold text-blue-900" onClick={() => setIsOpen(!isOpen)} href="#">&#8801;</a>
                         </span>
                        </h1>
                        <p className="uppercase text-lg " style={{color:'#8B9DA1'}}>& Surgical Centre</p>
                       
                    </div>
                    <div className={`w-auto md:flex md:flex-row   flex-col md:gap-x-8  pt-5 font-semibold
                    ${isOpen ? "block" : "hidden"}   md:text-md text-lg `}
                    style={{color:'#005894'}}>
                        <h2 className="cursor-pointer hover:font-bold">Lasik Center</h2>
                        <h2 className="cursor-pointer hover:font-bold">Cosmetic</h2>
                        <h2 className="cursor-pointer hover:font-bold">Eye Health</h2>
                        <h2 className="cursor-pointer hover:font-bold">Recinstructive</h2>
                        <h2 className="cursor-pointer hover:font-bold">Our Doctors</h2>
                        <h2 className="cursor-pointer hover:font-bold">Patients</h2>
                    </div>
                    <div className={`pt-3 md:flex  md:mx-auto ${isOpen ? "block" : "hidden"}  ` }>
                        <button className=" py-2 md:px-8 px-20 text-white font-bold rounded hover:text-xl" style={{backgroundColor:'#00497B'}}>Contact</button>
                    </div>
                </div>
              
            
        </>
    );
}

export default HeroSection;