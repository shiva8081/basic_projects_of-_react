import React, { useEffect, useState } from 'react'
import { FiDivideCircle } from 'react-icons/fi';


export const Loadmoredata = () => {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);
    const [mode, setmode] = useState("#ffffff");
    const [type, settype] = useState('white');
    const [count, setcount] = useState(0);

    const fetchproduct = async () => {
        try {
            setloading(true)

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`);
            const data = await response.json();
            console.log(data);

            if (data || data.products || data.products.length) {
                setproducts((prevdata)=>[...prevdata,...data.products]);
                setloading(false);
            }

        } catch (err) {
            seterror(err.message)
            setloading(true)

        }
    }

    useEffect(() => {
        fetchproduct();
    }, [count])
   if(loading){
    return  (
        <div className='fles justify-center items-center text-2xl h-[100vh]'><i className="fas fa-spinner fa-spin"></i> loading...please wait</div>
    )
   }




    return (
        <div className="flex flex-col gap-5 " style={{background:mode}}>
            {/* <div><FaLoadi </div> */}
            <div className='mt-5' ><button onClick={()=>type==="white"?(setmode("#000000"),settype("black")):(settype("white"),setmode("#ffffff")) } className='shadow-lg border  rounded-lg w-[14rem] text-lg bg-slate-400 border-black'>Enable Dark mode</button></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2 mr-2 ml-2 mb-2">
                {error ? <div>Error: {error}</div> : products.map(item => (
                    <div key={item.id} className={`flex flex-col  rounded-lg shadow-md justify-center items-center gap-5 w-full  p-5 border-2 ${type==='white'?'border-black text-black':'border-white text-white'} `}>
                        <img className=" h-48" src={item.thumbnail} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
            <div><button onClick={()=>setcount(count+1)} className={`${type==='white'?'text-black':'text-white'}  border mb-5 rounded-lg w-[14rem] text-lg bg-slate-400 border-black`}><i className="fa-solid fa-database text-white mr-2"></i>load more data</button></div>
        </div>

    )
}

