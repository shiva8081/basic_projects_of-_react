import React, { useEffect, useState } from 'react'
import { User } from './User';

export const Git = () => {
    const [username, setusername] = useState("shiva8081");
    const [userdata, setuserdata] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);

    useEffect(() => {
        fetchdata()
    }, [])
    useEffect(() => {
        console.log('userData', userdata);
    }, [userdata]);
    const fetchdata = async () => {
        try {
            setloading(true);

            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json();
            console.log(data)

            if (data) {
                setuserdata(data);
                setloading(false);
                setusername('');

            }


        } catch (error) {
            seterror(error.message);
            setloading(true);

        }
    }
    if(loading){
        return(
            <div className='text-4xl'>
                Loading...please wait
            </div>
        )
    }

    if(error!==null){
        return(
            <div className='text-4xl'>
                error{error}
            </div>
        )
    }


    return (
        <div className=' flex relative justify-center items-center w-screen h-screen'>
            <div className='flex w-full absolute justify-center items-center top-0  p-2 pt-5 bg-slate-300'>
                <input
                    className='w-1/5 rounded-xl    text-center h-11 border border-white'
                    type='text'
                    placeholder='enter github username'
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                />
                <button className=' p-3 ml-2  border border-black bg-[#09f4ec] rounded-xl text-center' onClick={fetchdata}>search</button>
            </div>
            {
                userdata ?
                   <User user={userdata}/>
                    :
                    "no data fetch to show"
            }
        </div>
    )
}
