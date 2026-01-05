import React from "react";
import LogoIcon from "./logo.svg?react";
import MonitorIcon from "./monitor.svg?react";
import HistoryIcon from "./history.svg?react";
import { NavLink } from "react-router-dom";
import LogoutIcon from "./logout.svg?react";
const Sidebar = () => {
  return (
    <>
      <div className="bg-[#f7f7f7] h-lvh w-60 max-w-60 fixed left-0 top-0 border-r-[#dbdbdb] border-r max-lg:hidden">
        <div className="inline-flex gap-2 items-center justify-start  p-5">
          <LogoIcon className="h-9 w-9 text-[#5e5e5e]" />
          <h1 className="title text-3xl font-light text-[#5e5e5e]">
            BGS Security
          </h1>
        </div>

        <div className=" mb-10">
          <p className="text-xs">
            You're logged in as <b>Operator1</b>.
          </p>
        </div>

        <div className="flex-col mt-10 p-0">
          <NavLink
            to="/"
            className={`border-b border-[#dedede] h-15 flex items-center justify-start p-5`}
          >
            <div className="inline-flex gap-3">
              <MonitorIcon className="h-5 w-5" />
              <p className="text-sm">Live Monitoring</p>
            </div>
          </NavLink>
          <NavLink
            to="/history"
            className="border-b border-[#dedede] h-15 flex items-center justify-start p-5"
          >
            <div className="inline-flex gap-3">
              <HistoryIcon className="h-5 w-5" />
              <p className="text-sm">Alerts history</p>
            </div>
          </NavLink>
          <NavLink
            to="/logout"
            className="border-b border-[#dedede]  h-15 flex items-end justify-start p-5"
          >
            <div className="inline-flex gap-3">
              <LogoutIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">Logout</p>
            </div>
          </NavLink>
          <div className="mt-10 flex justify-center items-center text-xs">
            <p>BGS Security v0.01 @ 03/01/2026</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
