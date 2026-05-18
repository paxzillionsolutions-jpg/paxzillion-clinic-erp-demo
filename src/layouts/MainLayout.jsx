import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* SIDEBAR */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* MAIN */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">

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