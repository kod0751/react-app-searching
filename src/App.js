import React, { useEffect } from "react";
import "antd/dist/antd.min.css";
import { Route, Routes } from "react-router-dom";

import Search from "./search/container/Search";
import User from "./user/container/User";
import Login from "./auth/container/Login";
import Signup from "./auth/container/Signup";

export default function App() {
  useEffect(() => {
    const bodyEl = document.getElementsByTagName("body")[0];
    const loadingEl = document.getElementById("init-loading");
    if (loadingEl) {
      bodyEl.removeChild(loadingEl);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
