"use client";
import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="grid grid-rows-[0.2fr_3fr] h-screen overflow-hidden md:grid-cols-[auto_1fr_1fr_1fr]">
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;
