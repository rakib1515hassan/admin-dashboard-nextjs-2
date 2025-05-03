'use client';
import Image from "next/image";
import { useSidebar } from "./SidebarContext";
import { useState } from 'react';
import { 
  RiDashboardLine, 
  RiAppsLine, 
  RiMenuLine,
  RiLockPasswordLine,
  RiErrorWarningLine,
  RiFileTextLine,
  RiFileList3Line,
  RiPaintBrushLine,
  RiLayoutGridLine, 
  RiMapPinLine,
  RiImageLine,
  RiBarChartBoxLine
} from 'react-icons/ri';

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();
  const [activeLink, setActiveLink] = useState('dashboard'); // Add state for active link

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const getLinkClass = (linkName) => {
    return `flex items-center px-4 py-2 text-sm ${
      activeLink === linkName
        ? 'text-white bg-purple-600'
        : 'text-gray-600 hover:bg-gray-100'
    } rounded-lg`;
  };

  return (
    <aside className={`fixed top-0 left-0 z-20 h-full flex flex-col bg-gradient-to-b from-gray-100 to-gray-50 border-r border-gray-200 transition-transform duration-300 ease-in-out ${
      isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64 lg:translate-x-0'
    }`}>
      {/* Logo Section */}
      <div className="flex items-center p-4 h-16">
        <div className="flex items-center gap-2">
          <Image
            src="/logo/dekkoisho-icon-512x512-1.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-xl font-semibold text-gray-800">zynix</span>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Dashboards Section */}
        <div className="px-3 py-2">
          <h3 className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
            DASHBOARDS
          </h3>
          <div className="mt-2">
            <a
              href="#"
              onClick={() => handleLinkClick('dashboard')}
              className={getLinkClass('dashboard')}
            >
              <RiDashboardLine className="w-5 h-5 mr-3" />
              Dashboards
            </a>
          </div>
        </div>

        {/* Web Apps Section */}
        <div className="px-3 py-2">
          <h3 className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
            WEB APPS
          </h3>
          <div className="mt-2 space-y-1">
            <a
              href="#"
              onClick={() => handleLinkClick('apps')}
              className={getLinkClass('apps')}
            >
              <RiAppsLine className="w-5 h-5 mr-3" />
              Apps
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('nested-menu')}
              className={getLinkClass('nested-menu')}
            >
              <RiMenuLine className="w-5 h-5 mr-3" />
              Nested Menu
            </a>
          </div>
        </div>

        {/* Crafted Section */}
        <div className="px-3 py-2">
          <h3 className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
            CRAFTED
          </h3>
          <div className="mt-2 space-y-1">
            <a
              href="#"
              onClick={() => handleLinkClick('authentication')}
              className={getLinkClass('authentication')}
            >
              <RiLockPasswordLine className="w-5 h-5 mr-3" />
              Authentication
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('error')}
              className={getLinkClass('error')}
            >
              <RiErrorWarningLine className="w-5 h-5 mr-3" />
              Error
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('pages')}
              className={getLinkClass('pages')}
            >
              <RiFileTextLine className="w-5 h-5 mr-3" />
              Pages
            </a>
          </div>
        </div>

        {/* Modules Section */}
        <div className="px-3 py-2">
          <h3 className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
            MODULES
          </h3>
          <div className="mt-2 space-y-1">
            <a
              href="#"
              onClick={() => handleLinkClick('forms')}
              className={getLinkClass('forms')}
            >
              <RiFileList3Line className="w-5 h-5 mr-3" />
              Forms
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('ui-elements')}
              className={getLinkClass('ui-elements')}
            >
              <RiPaintBrushLine className="w-5 h-5 mr-3" />
              UI Elements
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('widgets')}
              className={getLinkClass('widgets')}
            >
              <RiLayoutGridLine className="w-5 h-5 mr-3" />
              Widgets
            </a>
          </div>
        </div>

        {/* Tools & Components Section */}
        <div className="px-3 py-2">
          <h3 className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
            TOOLS & COMPONENTS
          </h3>
          <div className="mt-2 space-y-1">
            <a
              href="#"
              onClick={() => handleLinkClick('maps')}
              className={getLinkClass('maps')}
            >
              <RiMapPinLine className="w-5 h-5 mr-3" />
              Maps
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('icons')}
              className={getLinkClass('icons')}
            >
              <RiImageLine className="w-5 h-5 mr-3" />
              Icons
            </a>
            <a
              href="#"
              onClick={() => handleLinkClick('charts')}
              className={getLinkClass('charts')}
            >
              <RiBarChartBoxLine className="w-5 h-5 mr-3" />
              Charts
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
