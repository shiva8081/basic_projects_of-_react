
import React, { useEffect, useState } from 'react'


export const Color = () => {
  const [color, setcolor] = useState("#000000");
  const [type, settype] = useState('hex');

  const random=(length)=>{
    return Math.floor(Math.random() * length);
  }
  const rgbcolor=()=>{
    const r=random(256)
    const g=random(256)
    const b=random(256)
  

    setcolor(`rgb(${r},${g},${b})`)
  }
   
  const colorhandle=()=>{
    const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hexcolor="#";
    for(let i=0;i<6;i++){
      hexcolor+=hex[random(hex.length)];
    }

    setcolor(hexcolor)
  }
  useEffect(()=>{
     if(type==='hex') colorhandle();
     else rgbcolor();
  },[type]);
  return (
    <div className='w-[100vw] h-[100vh]  ' style={{background:color}}  >
      <button onClick={()=>settype('hex')} className='bg-white border-gray-400 border-2'>create hex color</button>
      <button onClick={()=>settype('rgb')} className='bg-white border-gray-400 border-2'>create rgb color</button>
      <button onClick={type==='hex'?colorhandle:rgbcolor} className='bg-white border-gray-400 border-2'>create random color</button>
       <div className='flex flex-col justify-center items-center mt-[10rem] text-[5rem] '>
      <h3 className='text-white'>{type} Color</h3>
      <h1 className='text-white'>{color}</h1>
      </div>
    </div>
  )
}
