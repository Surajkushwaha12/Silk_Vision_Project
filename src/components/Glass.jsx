import React from "react";
import Glasses from "../image/Glasses.svg"
function Glass()
{
    return(
        <>
        <div className="w-full h-auto flex flex-row flex-wrap justify-around mb-10" style={{backgroundColor:'#F4F5F5'}}>
             <div className="w-auto h-auto flex flex-col justify-center my-10 py-10 ">
                <div className="my-4 ">
                    <h1 className=" md:text-4xl text-3xl "style={{color:'#005894'}} >Picture life without glasses.</h1>
                    <h1  className="md:text-4xl text-3xl font-bold"style={{color:'#005894'}}>It’s possible with Silk Vision.</h1>
                </div>
                <div className="text-sm md:text-lg" style={{color:'#3A494C'}}>
                    <p>Imagine never again misplacing your glasses, having to clean smudges, </p>
                    <p> running out of lens solution, or squinting at restaurant menus. If you’re </p>
                    <p> tired of wearing glasses, contact lenses, or readers, ask whether LASIK or</p>
                    <p> laser vision correction surgery might be right for you. Dr. Silk and the eye</p>
                    <p> exam and LASIK team at Silk Vision will open your eyes to a brighter,</p>
                    <p> clearer, and freer world.</p>
                </div>
                <div>
                    <button className="py-2 px-10 mt-4 text-white rounded-sm" style={{backgroundColor:'#005894'}}>Get a LASIK quote</button>
                </div>
             </div>
             <div className="w-[520px] h-[500px]">
             <img
                        src={Glasses}
                        alt="Glasses"
                        className="h-full w-full  object-cover"
                    />
             </div>
        </div>
        </>
    );
}

export default Glass;