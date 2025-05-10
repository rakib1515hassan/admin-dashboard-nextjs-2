"use client";

import { useState } from "react";
import {
  HomeIcon,
  CogIcon,
  UserIcon,
  ChevronDownIcon,
  ChartBarIcon,
  ChevronUpIcon,
  GlobeAltIcon,
  SignalIcon,
  LinkIcon,
  FaceSmileIcon,
  BriefcaseIcon,
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
        className={`h-screen bg-white border-r-[.5px] border-gray-400 text-black transition-all duration-300 ${sidebarWidth} flex flex-col py-4`}
        onMouseEnter={() => !isOpen && setIsHovered(true)}
        onMouseLeave={() => !isOpen && setIsHovered(false)}
      >
        <nav className="flex-1 space-y-2">
          <div
            className={`border-b px-2 border-gray-400 ${
              isSidebar ? "pb-2" : "pb-4"
            } mb-2 px-1`}
          >
            <NavItem
              icon={<HomeIcon className="w-4 h-4" />}
              label="Home"
              isOpen={isOpen || isHovered}
              active={activeItem === "Home"}
              onClick={() => setActiveItem("Home")}
            />
          </div>

          <div className="px-2">
            <NavItem
              icon={<UserIcon className="w-4 h-4" />}
              label="Clients"
              isOpen={isOpen || isHovered}
              active={activeItem === "Clients"}
              onClick={() => setActiveItem("Clients")}
            />
          </div>

          {/* Reports With Submenu */}
          <div className="px-2">
            <div
              className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
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
                <ChartBarIcon className="w-4 h-4" />
                {isSidebar && <span>Reports</span>}
              </div>
              {isSidebar &&
                (submenuOpen ? (
                  <ChevronUpIcon className="w-4 h-4" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4" />
                ))}
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                submenuOpen && isSidebar
                  ? "max-h-60 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-2 text-sm pt-1">
                {[
                  {
                    label: "Overview",
                    icon: <GlobeAltIcon className="w-4 h-4" />,
                  },
                  {
                    label: "Rankings",
                    icon: <SignalIcon className="w-4 h-4" />,
                  },
                  {
                    label: "Backlinks",
                    icon: <LinkIcon className="w-4 h-4" />,
                  },
                  {
                    label: "Facebook",
                    icon: <FaceSmileIcon className="w-4 h-4" />,
                  },
                  {
                    label: "Linkedin",
                    icon: <BriefcaseIcon className="w-4 h-4" />,
                  },
                ].map(({ label, icon }) => (
                  <div
                    key={label}
                    onClick={() => setActiveItem(label)}
                    className={`flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                      activeItem === label
                        ? "bg-[#502E91] text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {icon}
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-2">
            <NavItem
              icon={<CogIcon className="w-4 h-4" />}
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
