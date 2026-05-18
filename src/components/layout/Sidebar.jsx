import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Receipt,
  BarChart3,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Patients",
    icon: Users,
    path: "/patients",
  },
  {
    title: "Appointments",
    icon: Calendar,
    path: "/appointments",
  },
  {
    title: "Prescriptions",
    icon: FileText,
    path: "/prescriptions",
  },
  {
    title: "Billing",
    icon: Receipt,
    path: "/billing",
  },
  {
    title: "Reports",
    icon: BarChart3,
    path: "/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 p-5">

      <h1 className="text-2xl font-bold text-blue-400">
  Paxzillion ERP
</h1>

<p className="text-slate-400 text-sm mt-2">
  Demo by Paxzillion Solutions LLP
</p>


      <div className="mt-10 space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}

      </div>
    </div>
  );
}