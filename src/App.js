import React, { useEffect } from "react";
import "antd/dist/antd.min.css";
import { Route, Routes } from "react-router-dom";

import Search from "./search/container/Search";
import User from "./user/container/User";

export default function App() {
  useEffect(() => {
    const bodyEl = document.getElementsByTagName("body")[0];
    const loadingEl = document.getElementById("init-loading");
    bodyEl.removeChild(loadingEl);
    console.log(bodyEl, loadingEl);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/user/:name" element={<User />} />
      </Routes>
    </>
  );
}
