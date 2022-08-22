import React from "react";
import "antd/dist/antd.min.css";
import { Route, Routes } from "react-router-dom";

import Search from "./search/container/Search";
import User from "./user/container/User";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/user/:name" element={<User />} />
      </Routes>
    </>
  );
}
