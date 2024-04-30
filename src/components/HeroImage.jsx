import React from "react";
import HomePage from '../image/HomePage.svg'

function HeroImage() {
    return (
        <>
            <div className="relative h-auto w-full ">
                <img
                    src={HomePage}
                    alt="AirMax Pro"
                    className="z-0 md:h-full h-[700px] w-full  object-cover"
                />
              
                <div className="absolute text-left top-20  md:left-20 left-5 pt-10 pl-8">
                <div className="my-4 text-white">
                    <h1 className="text-5xl font-bold" >Love how you see.</h1>
                    <h1  className="text-5xl font-bold">Love what you see.</h1>
                </div>
                <div className="text-white py-2">
                    <p>Our advanced eye and facial surgeons bring   </p>
                    <p> compassion and innovation to your eye health. </p>
                    <p>  For the leading ophthalmologists, optometrists,</p>
                    <p> and oculoplastic surgeons in Northern Virginia,</p>
                    <p> turn to Silk Vision.</p>
                 
                </div>
                <div className="flex flex-row gap-x-4 py-5">
                    <button className="py-2 px-10 mt-4 text-white font-semibold rounded-sm 
                    hover:font-bold hover:text-lg hover:shadow-md hover:shadow-blue-900" 
                    style={{backgroundColor:'#005894'}}>Get a LASIK quote</button>
                    <button className="py-2 px-10 mt-4 hidden md:block text-white font-semibold rounded-sm 
                    hover:font-bold hover:text-lg hover:shadow-md hover:shadow-blue-900" style={{backgroundColor:'#005894'}}>Take our Lasik Self-Test</button>
                </div>
                </div>
            </div>
        </>
    );
}

export default HeroImage;