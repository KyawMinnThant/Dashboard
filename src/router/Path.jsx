import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Clients from "../pages/Clients";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import RouteGuard from "./RouteGuard";
import NotFound from "../pages/NotFound";
import Profiles from "../pages/Profiles";
import Setting from "../pages/Settings/Setting";
import Invoice from "../pages/Invoice/Invoice";
import Price from "../pages/Price/Price";
import Message from "../pages/Message/Message";
import List from "../pages/Projectlist/List";
import Task from "../pages/Tasks/Task";
import Detail from "../pages/Detail/Detail";

const Path = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RouteGuard>
            <Dashboard />
          </RouteGuard>
        }
      />
      <Route path="/clients" element={<Clients />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/signin"
        element={
          <RouteGuard>
            <SignIn />
          </RouteGuard>
        }
      />
      <Route path={"*"} element={<NotFound />} />
      <Route path="/profiles" element={<Profiles />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/pricing" element={<Price />} />
      <Route path="/task" element={<Task />} />
      <Route path="/chat" element={<Message />} />
      <Route path="/list" element={<List />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default Path;
