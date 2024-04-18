import React, { useEffect, useState } from 'react'

export const Slidebar = ({url,limit,page}) => {
  const [loading, setloading] = useState(false);
  const [image, setimage] = useState([]);
  const [error, seterror] = useState(null);
  const [currentslide, setcurrentslide] = useState(0);



  const fetchimage =async(geturl)=>{
    try {
        setloading(true)
        const response=await fetch(`${geturl}?page=${page}&limit=${limit}`);
        const data=await response.json();
        
        console.log(data)
        if(data){
            // console.log(image);
            setloading(false);
            setimage(data)
        }
        
    } catch (err) {
        seterror(err.message)
        setloading(true);
    }
  }

  useEffect(()=>{
     fetchimage(url);
  },[url])
      
// if(loading){
//     return <div>loading ... please wait</div>
// }






  return (
    <div className='w-full h-full flex justify-center items-center '>
    {!loading?(<div className='flex relative shadow-2xl'>
        
        <div onClick={()=>setcurrentslide(currentslide===0?image.length-1:currentslide-1)} className='absolute flex text-white top-[225px] left-[8px] bg-[#888600] rounded-full w-8 h-8 justify-center items-center'><button>L</button>  </div>
        <div className='flex w-[600px] h-[450px]' >
        {
           image&&image.length?<img className='rounded-lg' src={image[currentslide].download_url} alt={`Slide ${currentslide}`} />:null
        }
        </div>
        <div onClick={()=>setcurrentslide(currentslide===image.length-1? 0 :currentslide+1)} className='absolute text-white top-[225px] left-[560px] bg-[#888600] rounded-full w-8 h-8 justify-center items-center flex'> <button className=''>R</button> </div>
    </div>):'loading...please wait'}
    </div>
  )
}
