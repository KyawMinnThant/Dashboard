import React from "react";
import Leftprofiles from "./Leftprofiles";
import Rightprofiles from "./Rightprofiles";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
const Profiles = () => {
  return (
    <div className="  overflow-x-hidden h-[100vh] ">
      {" "}
      <p className=" text-2xl text-gray-500 font-semibold text-[25px] mt-[20px] ml-[40px]">
        Profile
      </p>
      <div className=" w-[100%] flex flex-col justify-center lg:justify-normal md:justify-normal lg:flex-row md:flex-row  gap-5 ml-[40px]">
        <Leftprofiles />
        <Rightprofiles />
      </div>
      <footer className=" flex justify-between  mb-10 p-10 h-[fit-content] items-center">
        <div className="flex gap-3 text-[13px] text-gray-500">
          <p>Support</p>
          <p>Help Center</p>
          <p>Privacy</p>
          <p>Terms of services</p>
        </div>

        <div className="flex gap-3 text-[13px] text-gray-500">
          <div className="flex gap-1">
            <AiOutlineCopyrightCircle />
            <p>2023</p>
          </div>
          <p>App Stack</p>
        </div>
      </footer>
    </div>
  );
};

export default Profiles;
