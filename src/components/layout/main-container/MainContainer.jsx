"use client";
import React from "react";

const MainContainer = ({ children }) => {
  return (
    <main
      className="overflow-y-auto md:col-start-2 md:col-end-5 md:row-start-2"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="w-full h-full pl-20 p-4 bg-gray-100">{children}</div>
    </main>
  );
};

export default MainContainer;
