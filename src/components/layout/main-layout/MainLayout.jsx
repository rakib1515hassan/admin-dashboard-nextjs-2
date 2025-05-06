"use client";
import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { SidebarProvider } from "../SidebarContext";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <SidebarProvider>
      <div className="grid grid-rows-[0.2fr_3fr] h-screen overflow-hidden md:grid-cols-[auto_1fr_1fr_1fr]">
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
