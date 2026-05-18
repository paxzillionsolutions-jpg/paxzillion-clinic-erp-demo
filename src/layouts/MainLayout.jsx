import { useState } from "react";

import { Menu, X } from "lucide-react";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

import { Outlet } from "react-router-dom";

export default function MainLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* MOBILE SIDEBAR */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">

          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />

          {/* SIDEBAR */}
          <div className="relative z-50">

            <Sidebar />

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-5 right-5 bg-slate-800 p-2 rounded-lg lg:hidden"
            >
              <X size={20} />
            </button>

          </div>

        </div>
      )}

      {/* MAIN */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">

        {/* MOBILE TOP */}
        <div className="flex items-center justify-between lg:hidden mb-5">

          <h1 className="text-2xl font-bold text-blue-400">
            Paxzillion ERP
          </h1>

          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-slate-900 border border-slate-800 p-3 rounded-xl"
          >
            <Menu size={22} />
          </button>

        </div>

        <Topbar />

        <div className="pb-10">
          <Outlet />
        </div>

        <div className="mt-10 text-center text-slate-500 text-sm">
          Demo by Paxzillion Solutions LLP
        </div>

      </div>

    </div>
  );
}