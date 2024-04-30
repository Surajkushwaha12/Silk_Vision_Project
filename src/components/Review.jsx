import React from "react";
import Reviews from "../image/Review.svg"
function Review() {
    return (
        <>
            <div className="w-full py-5 " style={{ backgroundColor: '#D9D9D9' }}>
                <div className='w-[85%] h-auto flex flex-row flex-wrap mx-auto justify-around  rounded-md  bg-white ' >

                    <div>
                        <div className="py-12 md:px-10 px-5 md:mx-10">
                            <h1 className="inline-flex items-center text-4xl font-bold" style={{ color: '#005894' }}>
                                Give us a wink
                            </h1>


                            <p className=" text-lg pt-5 font-bold" style={{ color: '#3A494C' }}>
                                Share your Silk Vision experience with others.
                            </p>

                            <p className="text-lg font-bold pt-5" style={{ color: '#005894' }}>Review us
                                &gt; <span className="px-4 text-black">|</span>Reas our testimonials &gt;</p>

                        </div>
                    </div>
                    <div className="md:w-[300px] w-full h-[250px]">
                    <img
                        src={Reviews}
                        alt="Glasses"
                        className="h-full w-full  object-cover"
                    />
                </div>
                </div>
            </div>
        </>
    );
}

export default Review;