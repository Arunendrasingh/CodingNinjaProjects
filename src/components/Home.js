import React from "react";
import { CgCheckR } from "react-icons/cg";

export default function Home() {
  return (
    <>
    {/* Header Start */}
      <header className="header">
        <div className="m-5 gap-6 flex justify-center">
          <CgCheckR size="4rem" color="red" />
          <h1 className="text-5xl text-center text-sky-600 font-bold underline">
            My Todo-s
          </h1>
        </div>
      </header>
      {/* Header End */}
      {/* Task Create Button Start */}
      <div className="md:w-2/3 md:mx-auto">
        <div className="h-16 mx-3 px-3 grid content-center bg-gray-700 rounded-2xl">
          <button className="text-white">
            <div className="create-task text-start ps-3 pt-2 bg-gray-900 h-10 rounded-2xl">
              Create Task....
            </div>
          </button>
        </div>
      </div>
      {/* Task Create Button End */}
    </>
  );
}
