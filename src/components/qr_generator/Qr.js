import { useEffect, useState } from "react"
import QRCode from "react-qr-code";


export const Qr = () => {
  
  const [value, setvalue] = useState('');  
  const [qrval, setqrval] = useState('');

  useEffect(()=>{
   if(value===''){
    setqrval('')
   }
  },[value])


  return (
    <div className='flex flex-col items-center gap-5 h-[100vh] w-[100vw] '>
        <h1 className="mt-5 h-[4rem]  text-6xl  ">QR Code Generator</h1>
        <input placeholder="enter the content" className=" rounded-lg text-center w-[18rem] h-10 flex border border-black" type="text" value={value} onChange={(e)=>setvalue(()=>e.target.value)}/>
        <button onClick={()=>setqrval(value)} className="flex border rounded-lg p-2 pr-5 pl-5 bg-slate-300">generate Qr</button>
        <div className=" w-[19rem] h-[19rem] flex justify-center items-center rounded-lg border-gray-500 border">
        {qrval?
            <QRCode className="   mx-2 my-2 " value={qrval}/>:'enter value to generate QR'
        }
        </div>
    </div>
  )
}
