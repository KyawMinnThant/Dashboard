import React, { useState } from "react";
import Account from "./Account";
import Password from "./Password";

const Rightsetting = ({ show, setshow }) => {
  return (
    <div className="   rounded-md lg:w-[80%] md:w-[80%] w-[fit-content]  overflow-y-scroll p-[30px]">
      {!show ? <Account /> : <Password />}
    </div>
  );
};

export default Rightsetting;
