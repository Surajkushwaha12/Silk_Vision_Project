import React from "react";

function EyeSection() {
    return (
        <>
            <div className="w-full pt-5 " style={{ backgroundColor: '#D9D9D9' }}>
                <div className='w-[85%] h-auto flex flex-col mx-auto  rounded-md py-6' style={{backgroundColor:"#005894"}}>
                    <div className="w-auto h-auto flex flex-col place-items-center mt-5 py-5 text-white font-serif font-semibold md:text-4xl text-2xl">
                        <h1>Have you been turned away</h1>
                        <h1>from other eye doctors?</h1>
                    </div>

                    <div className="w-auto h-auto flex flex-col place-items-center  py-3 pb-5 text-white font-serif  md:text-lg text-sm ">
                        <p>If you’ve seen multiple eye doctors and have been told 'no' before, it’s time to visit Silk Vision. We offer a </p>
                        <p>fresh perspective and the most advanced technologies, combined with leading expertise, to provide</p>
                        <p> comprehensive, personalized care for your eyes. You just might be a great candidate for LASIK or other eye </p>
                        <p>surgeries, even if you’ve been turned away from other eye care providers.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EyeSection;