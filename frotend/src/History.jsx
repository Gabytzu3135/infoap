import React from "react";
import Sidebar from "./Sidebar";

const History = () => {
  return (
    <>
      <Sidebar />
      <div className="lg:ml-60 flex justify-start mt-10">
        <h2 className="title text-3xl">Alert Logs</h2>
      </div>
      <div className="lg:ml-60 flex-col-reverse justfiy-start mt-10">
        <div className="inline-flex border-b border-[#dbdbdb] w-full gap-10 h-20 justify-center items-center">
          <p>
            Location: <b>Brasov, Romania</b>
          </p>
          <p>
            Date: <b>03/01/2026 11:40 PM</b>
          </p>
          <a href="" className="text-blue-400">
            View on map
          </a>
        </div>
        <div className="inline-flex border-b border-[#dbdbdb] w-full gap-10 h-20 justify-center items-center">
          <p>
            Location: <b>Brasov, Romania</b>
          </p>
          <p>
            Date: <b>03/01/2026 11:40 PM</b>
          </p>
          <a href="" className="text-blue-400">
            View on map
          </a>
        </div>
        <div className="inline-flex border-b border-[#dbdbdb] w-full gap-10 h-20 justify-center items-center">
          <p>
            Location: <b>Brasov, Romania</b>
          </p>
          <p>
            Date: <b>03/01/2026 11:40 PM</b>
          </p>
          <a href="" className="text-blue-400">
            View on map
          </a>
        </div>
      </div>
    </>
  );
};

export default History;
