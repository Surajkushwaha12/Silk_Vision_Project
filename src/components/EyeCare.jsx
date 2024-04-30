import React from "react";
import Lasik from '../image/Frame 10.svg'
import Cataracts from '../image/Frame1.svg'
import Cornea from '../image/Frame2.svg'
import Glaucoma from '../image/Frame3.svg'

function EyeCare() {
    return (
        <>
            <div className="w-full pt-5 " style={{ backgroundColor: '#D9D9D9' }}>
                <div className='w-[85%] h-auto flex flex-col mx-auto  rounded-md pt-6 ' >
                    <div className="w-auto h-auto flex flex-col place-items-center  py-3 font-serif ">
                        <h1 className="font-bold text-3xl " style={{ color: '#005894' }}>Eye Care Services</h1>
                        <p className="text-xl font-normal">Clear , healthy vision</p>
                    </div>
                    <div className="flex md:flex-row flex-wrap md:justify-between justify-center w-full my-5 cursor-pointer">
                        <div className="w-[250px] h-[280px] rounded-md border p-3 mb-5  bg-white hover:shadow-2xl hover:shadow-blue-900">
                            <img
                                src={Lasik}
                                alt="Laptop"
                                className="h-[200px] w-full rounded-md object-cover"
                            />
                            <div className="flex place-content-center pt-3" style={{color:'#005894'}}>
                                <h1 className="text-xl font-bold">Lasik</h1>
                            </div>
                        </div>
                        <div className="w-[250px] h-[280px] rounded-md border p-3 mb-5  bg-white hover:shadow-2xl hover:shadow-blue-900">
                            <img
                                src={Cataracts}
                                alt="Laptop"
                                className="h-[200px] w-full rounded-md object-cover"
                            />
                            <div className="flex place-content-center pt-3"  style={{color:'#005894'}}>
                                <h1 className="text-xl font-semibold">Cataracts</h1>
                            </div>
                        </div>


                        <div className="w-[250px] h-[280px] rounded-md border p-3 mb-5  bg-white hover:shadow-2xl hover:shadow-blue-900">
                            <img
                                src={Cornea}
                                alt="Laptop"
                                className="h-[200px] w-full rounded-md object-cover"
                            />
                            <div className="flex place-content-center pt-3"  style={{color:'#005894'}}>
                                <h1 className="text-xl font-semibold">Cornea</h1>
                            </div>
                        </div>


                        <div className="w-[250px] h-[280px] rounded-md border p-3 mb-5  bg-white hover:shadow-2xl hover:shadow-blue-900">
                            <img
                                src={Glaucoma}
                                alt="Laptop"
                                className="h-[200px] w-full rounded-md object-cover"
                            />
                            <div className="flex place-content-center pt-3"  style={{color:'#005894'}}>
                                <h1 className="text-xl font-semibold">Glaucoma</h1>
                            </div>
                        </div>
                    </div>
                    <div  className="w-auto h-auto flex flex-col place-items-center  py-8 font-serif ">
                        <button style={{backgroundColor:'#005894'}} 
                        className="py-3 px-8 rounded-md text-white font-semibold text-lg 
                        hover:font-bold hover:text-xl hover:shadow-xl hover:shadow-blue-900">See all eye care and vision services</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EyeCare;