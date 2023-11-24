import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <div className="bg-black h-16 p-4 fixed top-0 w-full z-10 shadow-md shadow-slate-700">
        <div className="flex justify-between">
          <div className="flex font-semibold text-lg"><Link href="https://chat.sheninthjr.com">Sheninth Jr Chat App</Link></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
