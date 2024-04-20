import React from 'react'

export const ShowModal = ({handleclosemodal}) => {
  return (
    <div className='op h-screen w-screen flex justify-center items-center bg-slate-400'>
                <div className=' w-1/2 h-1/2 flex flex-col rounded-xl border-2 border-black '>
                    <div className=' relative h-[15%] border-b-2 border-black  bg-slate-300 rounded-t-xl flex'>
                        <div class="flex-grow flex justify-center items-center">header</div>

                        <button onClick={handleclosemodal} className='absolute right-0 top-3 p-2'><i class="fa-solid fa-xmark"></i></button>

                    </div>
                    <div className=' h-[70%] '>
                        content
                    </div>
                    <div className=' h-[15%] border-t-2 border-black bg-slate-300 rounded-b-xl'>
                        footer
                    </div>

                </div>

            </div>
  )
}
