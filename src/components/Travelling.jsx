import React from "react";
import Mapa from "../image/mapa 1.svg"
function Travelling() {
    return (
        <>
            <div className="w-full h-auto flex md:flex-row flex-col-reverse justify-around  bg-white" >
                <div className="md:w-[320px] w-full h-[300px]">
                    <img
                        src={Mapa}
                        alt="Glasses"
                        className="h-full w-full  object-cover"
                    />
                </div>
                <div className="w-auto h-auto flex flex-col justify-center md:my-10 py-10 ">
                    <div className="my-4">
                        <h1 className="text-4xl font-bold " style={{ color: '#005894' }} >Traveling into the area</h1>
                        <h1 className="text-4xl font-bold" style={{ color: '#005894' }}>for eye care?</h1>
                    </div>
                    <div style={{ color: '#3A494C' }}>
                        <p>Patients travel to Silk Vision from across America and the world to </p>
                        <p> find an ophthalmologist that offers the best vision and cosmetic </p>
                        <p> care. Whether you're from Washington, DC, or the other side of the </p>
                        <p> country, If you need help with housing before or after treatment, we</p>
                        <p>can help you arrange local accommodations. We coordinate your </p>
                        <p>care in consultation with your hometown doctor to ensure the best</p>
                        <p> treatment for you. </p>
                        
                    </div>
                 
                </div>

            </div>
        </>
    );
}

export default Travelling;