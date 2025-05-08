"use client";

import { useState } from "react";
import {
  HomeIcon,
  CogIcon,
  UserIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Reports");

  const sidebarWidth = isOpen || isHovered ? "w-64" : "w-16";
  const isSidebar = isOpen || isHovered;
  return (
    <div className="fixed top-0 left-0 z-50">
      <div
        className={`h-screen bg-white border-r border-gray-400 text-black transition-all duration-300 ${sidebarWidth} flex flex-col py-4`}
        onMouseEnter={() => !isOpen && setIsHovered(true)}
        onMouseLeave={() => !isOpen && setIsHovered(false)}
      >
        <nav className="flex-1 space-y-2">
          <div
            className={`border-b px-2 border-gray-400 ${
              isSidebar ? "pb-2" : "pb-3"
            } mb-2 px-1`}
          >
            <NavItem
              icon={<HomeIcon className="w-5 h-5" />}
              label="Home"
              isOpen={isOpen || isHovered}
              active={activeItem === "Home"}
              onClick={() => setActiveItem("Home")}
            />
          </div>

          <div className="px-2">
            <NavItem
              icon={<UserIcon className="w-5 h-5" />}
              label="Clients"
              isOpen={isOpen || isHovered}
              active={activeItem === "Clients"}
              onClick={() => setActiveItem("Clients")}
            />
          </div>

          {/* Reports With Submenu */}
          <div className="space-y-1 px-2">
            <div
              className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer ${
                activeItem === "Reports"
                  ? "bg-[#502E91] text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => {
                setSubmenuOpen(!submenuOpen);
                setActiveItem("Reports");
              }}
            >
              <div className="flex items-center gap-3">
                <ChartBarIcon className="w-5 h-5" />
                {(isOpen || isHovered) && <span>Reports</span>}
              </div>
              {(isOpen || isHovered) &&
                (submenuOpen ? (
                  <ChevronDownIcon className="w-4 h-4" />
                ) : (
                  <ChevronRightIcon className="w-4 h-4" />
                ))}
            </div>

            {submenuOpen && (isOpen || isHovered) && (
              <div className="ml-9 space-y-1 text-sm text-gray-700">
                {["Overview", "Rankings", "Backlinks"].map((item) => (
                  <div
                    key={item}
                    onClick={() => setActiveItem(item)}
                    className={`cursor-pointer rounded-lg px-2 py-1 ${
                      activeItem === item
                        ? "bg-[#502E91] text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="px-2">
            <NavItem
              icon={<CogIcon className="w-5 h-5" />}
              label="Settings"
              isOpen={isOpen || isHovered}
              active={activeItem === "Settings"}
              onClick={() => setActiveItem("Settings")}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, isOpen, active, onClick }) => (
  <div
    className={`flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer ${
      active ? "bg-[#502E91] text-white" : "hover:bg-gray-200"
    }`}
    onClick={onClick}
  >
    {icon}
    {isOpen && <span>{label}</span>}
  </div>
);

export default Sidebar;
