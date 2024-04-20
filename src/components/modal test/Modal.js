import React, { useState } from 'react'
import { ShowModal } from './ShowModal';

export const Modal = () => {
    const [showModal, setshowModal] = useState(false);

  const handlemodal=()=>{
    setshowModal(showModal===true?false:true)
  }
  const handleclosemodal=()=>{
    setshowModal(false)
  }


    return (
        <>
        
            {!showModal?(<button onClick={handlemodal} className='border top-40 w-1/6' >open modal</button>):(<ShowModal handleclosemodal={handleclosemodal}/>)}
        </>
    )
}
