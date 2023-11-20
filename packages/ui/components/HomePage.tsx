import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col text-white p-8 text-center bg-slate-900 rounded-2xl">
          <div className="flex justify-center text-lg font-semibold mb-28">
            Welcome to Jr ChatApp
          </div>
          <div className="flex justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mr-4">
              Create a Room
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded">
              Join a Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
