import React from "react";

function Call()
{
    return(
        <>
         <div className="w-full py-5 hidden md:block  " style={{ backgroundColor: '#D9D9D9' }}>
                <div className='w-[85%] h-auto flex md:flex-row  mx-auto justify-around  rounded-md  ' >

                <div className='w-auto flex flex-row  justify-around px-8 py-5 gap-x-6'>
                    <p className='pr-5 text-md font-bold pt-2' style={{color:'#3A494C'}}>Call: (703) 876-9700</p>
                    <p className='pr-5 text-3xl font-semibold ' style={{color:'#3A494C'}}>|</p>
                    <p className='pr-5 text-md font-bold pt-2' style={{color:'#3A494C'}}>Fax: (703) 876-9701</p>
                    <p className='pr-5 text-3xl font-semibold ' style={{color:'#3A494C'}}>|</p>
                    <p className='pr-5 text-md font-bold pt-2 ' style={{color:'#3A494C'}}>Request an Appointment</p>
                    <p className='pr-5 text-3xl font-semibold ' style={{color:'#3A494C'}}>|</p>  
                    <p className='pr-5 text-md font-bold pt-2 ' style={{color:'#3A494C'}}>Ask a Question</p>
                    <p className='pr-5 text-3xl font-semibold ' style={{color:'#3A494C'}}>|</p>  
                    <p className='pr-5 text-md font-bold pt-2' style={{color:'#3A494C'}}>Financing</p>
                </div>
                 
                </div>
            </div>
        </>
    );
}

export default Call;