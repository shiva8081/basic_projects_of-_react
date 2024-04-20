import React, { useState } from 'react'

export const Tab = () => {
    const [state, setstate] = useState(1);
   
    const tabs = [
        {
            label: "Tab 1",
            content: <div>This is content for Tab 1</div>,
        },
        {
            label: "Tab 2",
            content: <div>This is content for Tab 2</div>,
        },
        {
            label: "Tab 3",
            content: <div>This is content for Tab 3</div>,
        },
    ];

    console.log(state);
    return (
        <div className='flex justify-center items-center relative'>
            {
                tabs && tabs.length ? tabs.map((item, index) => (

                    <div key={index + 1} onClick={() => setstate(index + 1)} className=' mt-5  '>
                        <div className={`flex flex-col justify-center items-center border-2 ${state===index+1?'bg-[#a1d500]':'bg-slate-500'}  border-black m-1 w-32 h-16 `}> {item.label} </div>


                       
                    </div>
                   

                )) : null
             
            }
            <div className='flex absolute top-32 text-2xl text-red-500'>
                {
                    tabs&&tabs.length?(tabs[state-1].content):null
                }
            </div>






        </div>
    )
}
