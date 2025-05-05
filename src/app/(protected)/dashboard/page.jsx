import { SidebarProvider } from "../components/layout/SidebarContext";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <Sidebar />
        <div className={`transition-all duration-300 lg:pl-64 pt-16`}>
          <main className="p-4">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Welcome Back, Jack Miller
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Let's dive in and get things done.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Total Sales Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                // ... existing code ...
              </div>

              {/* Total Revenue Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                // ... existing code ...
              </div>

              {/* Page Views Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                // ... existing code ...
              </div>

              {/* Profit By Sale Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                // ... existing code ...
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
