import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import { SidebarProvider } from "./components/layout/SidebarContext";

export default function Home() {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <Sidebar />
        <div className={`transition-all duration-300 lg:pl-64 pt-16`}>
          <main className="p-4">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Welcome Back, Jack Miller</h1>
              <p className="text-gray-500 dark:text-gray-400">Let's dive in and get things done.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Cards will automatically adapt to dark mode through Tailwind's dark: classes */}
              {/* Total Sales Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Sales</p>
                    <h3 className="text-2xl font-bold mt-2">32,981</h3>
                    <a href="#" className="text-sm text-gray-400 hover:text-gray-600">View all sales</a>
                  </div>
                  <div className="bg-purple-600 p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <p className="text-green-500 text-sm mt-4">↑ 0.29%</p>
              </div>

              {/* Total Revenue Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    <h3 className="text-2xl font-bold mt-2">$14,32,145</h3>
                    <a href="#" className="text-sm text-gray-400 hover:text-gray-600">Complete revenue</a>
                  </div>
                  <div className="bg-red-500 p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-red-500 text-sm mt-4">↓ 3.45%</p>
              </div>

              {/* Page Views Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Page Views</p>
                    <h3 className="text-2xl font-bold mt-2">4,678</h3>
                    <a href="#" className="text-sm text-gray-400 hover:text-gray-600">Total page views</a>
                  </div>
                  <div className="bg-green-500 p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-green-500 text-sm mt-4">↑ 11.54%</p>
              </div>

              {/* Profit By Sale Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Profit By Sale</p>
                    <h3 className="text-2xl font-bold mt-2">$645</h3>
                    <a href="#" className="text-sm text-gray-400 hover:text-gray-600">Total profit earned</a>
                  </div>
                  <div className="bg-blue-500 p-2 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <p className="text-green-500 text-sm mt-4">↑ 0.18%</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
