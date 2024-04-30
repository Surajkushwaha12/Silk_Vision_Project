import React from "react";
import Certf1 from "../image/Certificate/Certf1.svg"
import Certf2 from "../image/Certificate/Certf2.svg"
import Certf3 from "../image/Certificate/Certf3.svg"
import Certf4 from "../image/Certificate/Certf4.svg"
import Certf5 from "../image/Certificate/Certf5.svg"
import Certf6 from "../image/Certificate/Certf6.svg"
import Certf7 from "../image/Certificate/Certf7.svg"
import Certf8 from "../image/Certificate/Certf8.svg"

function Certificate() {
    return (
        <>
            <div className="w-full py-12  " style={{ backgroundColor: '#005894' }}>
                <div className='w-[85%] h-auto flex flex-row flex-wrap mx-auto justify-around  ' >

                    <div className="w-[150px] h-[70px]">
                        <img
                            src={Certf1}
                            alt="Certf1"
                            className="h-full w-full object-fill "
                        />
                    </div>

                    <div className="w-[100px] h-[70px] hidden md:block">
                        <img
                            src={Certf2}
                            alt="Certf2"
                            className="h-full w-full  object-fill"
                        />
                    </div>

                    <div className="w-[100px] h-[70px]">
                        <img
                            src={Certf3}
                            alt="Certf3"
                            className="h-full w-full  object-fill"
                        />
                    </div>

                    <div className="w-[100px] h-[70px]  hidden md:block">
                        <img
                            src={Certf4}
                            alt="Certf4"
                            className="h-full w-full  object-fill"
                        />
                    </div>

                    <div className="w-[100px] h-[70px] hidden md:block">
                        <img
                            src={Certf5}
                            alt="Certf5"
                            className="h-full w-full  object-fill"
                        />
                    </div>

                    <div className="w-[100px] h-[70px] ">
                        <img
                            src={Certf7}
                            alt="Certf6"
                            className="h-full w-full  object-fill"
                        />
                    </div>

                    <div className="w-[100px] h-[70px] hidden md:block">
                        <img
                            src={Certf7}
                            alt="Certf7"
                            className="h-full w-full  object-fill"
                        />
                    </div>

                    <div className="w-[100px] h-[70px] hidden md:block">
                        <img
                            src={Certf8}
                            alt="Certf8"
                            className="h-full w-full  object-fill"
                        />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Certificate;