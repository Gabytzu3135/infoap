import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    stats: { total: 0, confirmed: 0, lastTime: "-" },
    logs: [],
    activeAlert: null,
    isOnline: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://172.20.10.2:1234/api/data")
        .then((res) => res.json())
        .then((payload) => {
          setData(payload);
          setLoading(false);
        })
        .catch(err);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleConfirm = () => {
    fetch("http://172.20.10.2:1234/api/confirm", { method: "POST" })
      .then(() => console.log("Alertă confirmată"))
      .catch((err) => console.error(err));
  };
  if (loading)
    return (
      <>
        <Sidebar />
        <div className="fixed inset-0 flex flex-col justify-center items-center z-50 lg:ml-40">
          <ClipLoader size={60} color="#000" />
          <p className="mt-4 font-medium animate-pulse tracking-wide text-black">
            Checking ESP32 System..
          </p>
        </div>
      </>
    );
  return (
    <>
      <Sidebar />

      <div className="flex justify-start lg:ml-60">
        <h1 className="text-m inline-flex items-center gap-3">
          <div
            className={`w-3 h-3 ${
              data.isOnline ? "bg-green-500" : "bg-red-500"
            } rounded-full animate-pulse`}
          ></div>
          <p>ESP board is {data.isOnline ? "connected" : "disconnected"}.</p>
        </h1>
      </div>

      {!data.isOnline && (
        <div className="mt-10 bg-red-500 flex justify-start lg:ml-60 w-auto rounded-2xl text-white text-left text-sm p-5 font-bold">
          The ESP32 Board is not connected. You can't receive/manage any alerts.
        </div>
      )}

      <div className="lg:ml-60 flex justify-start mt-10">
        <h1 className="title text-3xl">Alert Information</h1>
      </div>

      {!data.activeAlert ? (
        <div className="mt-10 border border-[#dbdbdb] flex items-center justify-start lg:ml-60 rounded-2xl text-left text-sm p-5 font-bold h-20 hover:scale-105 transition-all duration-300">
          <h1 className="text-left text-md">No active alerts at the moment.</h1>
        </div>
      ) : (
        <div className="mt-10 border border-[#dbdbdb] flex-col lg:ml-60 rounded-2xl  text-sm font-bold h-auto pb-5">
          <div className="flex border bg-[#ccc] border-[#dbdbdb] h-15 p-2 rounded-t-xl justify-start items-center">
            <h1 className="text-2xl p-5 text-white title ">
              <span className="text-red-500 title tracking-[.15em]">
                {" "}
                Warning!
              </span>{" "}
            </h1>
          </div>
          <div className="flex flex-col space-y-3 p-5">
            <p className="font-normal text-center">
              New alert located in <b>{data.activeAlert.location}</b> at
              coordinates 45.6443° N, 25.5956° E
              <br />
              Received at: <b>{data.activeAlert.time}</b>
            </p>

            <NavLink
              to="https://www.google.com/maps?q=45.6443,25.5956"
              target="_blank"
              className="bg-blue-600 h-10 rounded-xl cursor-pointer text-center p-2 hover:scale-[1.02] transition-all duration-300 text-white"
            >
              View on map
            </NavLink>
            <button
              onClick={handleConfirm}
              className="bg-green-500 h-10 rounded-xl cursor-pointer hover:scale-[1.02] transition-all duration-300 text-white"
            >
              Confirm - Help sent
            </button>
          </div>
        </div>
      )}

      <div className="lg:ml-60 flex justify-start mt-10">
        <h1 className="title text-3xl">Statistics</h1>
      </div>
      <div className="flex lg:space-x-4 lg:ml-60 space-x-3 mt-10">
        <div className="bg-black/60 flex items-center justify-center rounded-2xl text-white p-5 font-bold h-40 w-40">
          <div className="flex-col space-y-3 text-center">
            <h1 className="text-3xl">{data.stats.total}</h1>
            <p className="text-xs">Total alerts</p>
          </div>
        </div>
        <div className="bg-black/60 flex items-center justify-center rounded-2xl text-white p-5 font-bold h-40 w-40">
          <div className="flex-col space-y-3 text-center">
            <h1 className="text-3xl">{data.stats.confirmed}</h1>
            <p className="text-xs">Confirmed alerts</p>
          </div>
        </div>
        <div className="bg-green-800/60 flex items-center justify-center rounded-2xl text-white p-5 font-bold h-40 w-40">
          <div className="flex-col space-y-3 text-center">
            <h1 className="text-3xl">{data.stats.lastTime}</h1>
            <p className="text-xs">Last alert time</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
