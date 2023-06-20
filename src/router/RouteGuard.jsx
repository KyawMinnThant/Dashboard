import Cookies from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import SignIn from "../pages/SignIn";

const RouteGuard = ({ children }) => {
  const token = Cookies.get("token");
  const authToken = useSelector(state => state.authSlice.token);
  const path = useLocation();
  
  if (token && authToken) {
    return children;
  } else{
    return <SignIn/>
  }
};

export default RouteGuard;