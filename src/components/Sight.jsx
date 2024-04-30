import React from "react";
import Sightt from "../image/shutterstock.svg"

function Sight() {
    return (
        <>
            <div className="flex w-full flex-col-reverse  items-center  md:flex-row">
                <div className="h-auto md:w-[50%] w-full ">
                    <img
                        src={Sightt}
                        alt="Sight"
                        className="h-full w-full  object-cover"
                    />
                </div>
                <div>
                    <div className="py-4 md:px-10 mx-10">
                        <h1 className="inline-flex items-center text-4xl font-semibold" style={{color:'#800080'}}>
                        What a beautiful sight.
                        </h1>
                        <p className="mt-3 text-md text-gray-600">
                        Unparalleled expertise for oculoplastic surgery,
                        </p>
                        <p className=" text-md text-gray-600">
                         cosmetic surgery and facial rejuvenation.
                        </p>

                        <p className=" text-md mt-8 font-bold" style={{color:'#3A494C'}}>
                        Explore our state-of-the-art eye care center for:
                        </p>

                        <p className="text-md font-bold mt-3" style={{color:'#005894'}}>Oculoplastic surgery &gt; <span className="px-4 text-black">|</span>Cosmetic surgery &gt;</p>
                       
                    </div>
                </div>
            </div>

        </>
    );
}

export default Sight;