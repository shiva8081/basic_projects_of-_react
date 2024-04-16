import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export const Star = ({no_ofstar}) => {
   const [rating, setrating] = useState(0);
   const [hover, sethover] = useState(0);


    const handleclick=(getcurrentindex)=>{
      setrating(getcurrentindex);
    //   console.log(getcurrentindex);
    }
    const onmousemove=(getcurrentindex)=>{
        sethover(getcurrentindex)
      
    }

    const onmouseleave=()=>{
       
       
        sethover(rating);
    }
  return (
    <div className='flex cursor-pointer'>{
        [...Array(no_ofstar)].map((_,index)=>{
            const starvalue=index+1;
       
           return(
            <FaStar
            className={starvalue<=(rating||hover)?'text-[#fff900]':'text-black'}
            key={index}
            onClick={()=>handleclick(starvalue)}
            onMouseMove={()=>onmousemove(starvalue)}
            onMouseLeave={()=>onmouseleave()}
            // style={{color:starColor}}
            
            
            size={40}
            
            />
           );
        })
    }
    </div>
  )
}
 


