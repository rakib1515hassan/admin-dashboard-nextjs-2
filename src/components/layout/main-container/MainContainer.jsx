"use client";
import React from "react";

const MainContainer = ({ children }) => {
  return (
    <main
      className="pt-5 sm:pl-7 sm:pr-4 overflow-y-auto md:col-start-2 md:col-end-5 md:row-start-2"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="w-full h-full bg-white">{children}</div>
    </main>
  );
};

export default MainContainer;
