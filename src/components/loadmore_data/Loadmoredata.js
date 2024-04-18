import React, { useEffect, useState } from 'react'


export const Loadmoredata = () => {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);


    const fetchproduct = async () => {
        try {
            setloading(true)

            const response = await fetch(`https://dummyjson.com/products`);
            const data = await response.json();
            console.log(data);

            if (data) {
                setproducts(data);
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
        <div>
            {
                loading ? <div>Loading... please wait</div> : error ? <div>Error: {error}</div> : <div>{
                    products&&products.length>0?
                    products.map(item => (<ul key={item.id}>
                        {item}
                    </ul>)):"no data to show "


                }</div>


            }

        </div>

    )
}

