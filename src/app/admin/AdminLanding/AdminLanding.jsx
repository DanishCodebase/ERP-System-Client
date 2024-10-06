import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login";

const AdminLanding = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="admin" element={<div>Admin</div>} />
    </Routes>
  );
};

export default AdminLanding;
