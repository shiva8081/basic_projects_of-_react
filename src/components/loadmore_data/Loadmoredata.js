import React, { useEffect, useState } from 'react'


export const Loadmoredata = () => {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);


    const fetchproduct = async () => {
        try {
            setloading(true)

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=20`);
            const data = await response.json();
            console.log(data);

            if (data||data.products||data.products.length) {
                setproducts(data.products);
                setloading(false);
            }

        } catch (err) {
            seterror(err.message)
            setloading(true)

        }
    }

    useEffect(() => {
        fetchproduct();
    }, [])





    return (
        <div className='flex  gap-5'>
            <div className='grid grid-cols-4 gap-3'>
            {
                loading ? <div>Loading... please wait</div> : error ? <div>Error: {error}</div> : <div>{
                    products && products.length > 0 ?
                        products.map(item => (
                        <div className='flex flex-col rounded-lg shadow-md justify-center items-center gap-5 w-[250px]   p-5 border-2 border-black' key={item.id}>
                            <img className='w-[180px] h-[180px]' src={item.thumbnail} alt={item.title}/>
                            <h3>{item.title}</h3>
                        </div>)) : "no data to show "


                }</div>


                
            }
            </div>

        </div>

    )
}

