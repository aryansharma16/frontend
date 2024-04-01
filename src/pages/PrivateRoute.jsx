import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const navigate = useNavigate();
  console.log("jej");
  if (localStorage.getItem("userInfo")) return <Outlet />;
  else return <Navigate to={"/"} />;
};

export default PrivateRoute;
