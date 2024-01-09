"use client";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userId } from "../store/atoms/userId";

const Signup = () => {
  const [input, setInput] = useState("");
  const setUserId = useSetRecoilState(userId)
  const handleSignUp = () =>{
    setUserId({
        id:crypto.randomUUID()
    })
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen text-white">
        <div className="flex flex-col justify-center items-center space-y-10 p-16 rounded-2xl bg-gray-900">
          <div className="text-2xl">SignUp</div>
          <div>
            <input
              className="h-10 rounded-lg pl-2 text-white w-72"
              type="email"
              placeholder="Email"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
            />
          </div>
          <div>
            <button className="bg-black p-3 rounded-xl text-lg font-bold" onClick={handleSignUp}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
