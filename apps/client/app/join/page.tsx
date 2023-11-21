'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const JoinBox = () => {
    const [id,setId]= useState('')
    const router = useRouter();
    const joinRoom  = ()=>{
        router.push(`/${id}`)
    }
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col text-white p-8 text-center bg-slate-900 rounded-2xl">
          <div className="flex justify-center text-lg font-semibold mb-28">
            Enter the code
          </div>
          <div className="flex flex-col space-y-10">
            <div className="flex justify-between">
              <input type="text" className="h-10 rounded-lg text-black p-2" value={id} onChange={(e)=>setId(e.target.value)}/>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 w-16 rounded" onClick={joinRoom}>
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinBox;
