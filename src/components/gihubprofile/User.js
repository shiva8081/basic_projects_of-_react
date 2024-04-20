import React from 'react'

export const User = ({user}) => {

    const{
        avatar_url,
        html_url,
        login,
        created_at,
        followers,
        following,
        public_repos






    }=user;


  const createdate= new Date(created_at);

    return (
        <div className='absolute border-black border-2 w-3/4 h-3/5  rounded-2xl top-32 flex items-center'>
            <div className='border-r-2 border-black w-[40%] h-full flex justify-center items-center  '>
                <img className='rounded-full border-black border-2 w-3/4' src={avatar_url} alt={avatar_url} />
            </div>
            <div className='flex flex-col ml-8 w-[60%]  h-full gap-12'>
                <a className='mt-8  flex ' href={html_url}>{login}</a>
                <p className='flex'>User login on {""}
                {`${createdate.getFullYear()} ${createdate.getDate()} ${createdate.toLocaleString("en-us",{month:"short"})}`}
                </p>
                <p className='flex'>Public Repos {" "} {public_repos}</p>
                <p className='flex'> following {" "} {following}</p>
                <p className='flex'> followers {" "} {followers} </p>
            </div>
        </div>
    )
}
