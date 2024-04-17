import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export const Star = ({no_ofstar}) => {
   const [rating, setrating] = useState(0);
   const [hover, sethover] = useState(0);
 
  return (
    <div className='flex justify-center cursor-pointer'>{
        [...Array(no_ofstar)].map((_,index)=>{
            const starvalue=index+1;
       
           return(
            <FaStar
            className={starvalue<=(hover||rating)?'text-[#fff900]':'text-black'}
            key={index}
            onClick={()=>setrating(starvalue)}
            onMouseMove={()=>sethover(starvalue)}
            onMouseLeave={()=>{sethover(rating)
                sethover(rating)}}
       
            
            
            size={40}
            
            />
           );
        })
    }
    </div>
  )
}
 

