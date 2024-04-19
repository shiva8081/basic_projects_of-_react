import { useEffect, useState } from "react"


export const Scroll = ({ url }) => {
    const [value, setvalue] = useState([]);
    const [loading, setloading] = useState(false);
    const [err, seterr] = useState(null);


    const fetchdata = async (geturl) => {
        try {
            setloading(true)

            const response = await fetch(`${geturl}`);
            const data = await response.json();

            console.log(data)
            if (data || data.products || data.products.length) {
                setvalue(data.products);
                setloading(false)
            }
            console.log(data.products)

        } catch (err) {
            seterr(err.message);
            setloading(true)

        }
        if (loading) {
            return (
                <div className="text-center">
                    Loading...please wait
                </div>
            )
        }
    }

    useEffect(() => {
        fetchdata(url);
    }, [])

    return (
        <div>
            <div className='bg-slate-500  mb-9 w-full h-16  text-white rounded-b-lg shadow-xl text-5xl flex justify-center items-center fixed top-0 '>Custom Scroll Indicator</div>
            <div className="pt-16 ">
                {
                    value ? value.map((item) => (
                        <div className="my-3 text-lg" key={item.id}>{item.title}</div>
                    )) : "no data to display"
                }
            </div>
        </div>
    )
}
