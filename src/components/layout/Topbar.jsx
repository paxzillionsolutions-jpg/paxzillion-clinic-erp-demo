import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between mb-8">

      {/* SEARCH */}
      <div className="relative w-96">

        <Search
          className="absolute left-4 top-4 text-slate-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-12 pr-5 py-4 outline-none"
        />

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        {/* NOTIFICATION */}
        <button className="bg-slate-900 border border-slate-800 p-4 rounded-2xl hover:bg-slate-800 transition">

          <Bell size={20} />

        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-2xl">

          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
            A
          </div>

          <div>

            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-slate-400 text-sm">
              Super Admin
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}