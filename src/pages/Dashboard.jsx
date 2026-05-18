import {
  stats,
  weeklyPatients,
  revenueData,
  recentActivities,
  doctors,
} from "../data/dashboardData";

import PatientsChart from "../components/dashboard/PatientsChart";
import RevenueChart from "../components/dashboard/RevenueChart";

export default function Dashboard() {
  return (
    <div>

      {/* TOPBAR */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-slate-400 mt-1">
            Welcome back, Dr. Sharma
          </p>
        </div>

        <div className="flex items-center gap-3">

          <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl">
            Demo Version
          </div>

          <div className="bg-slate-800 px-4 py-2 rounded-xl">
            Admin
          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
          />
        ))}

      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8">

        <PatientsChart data={weeklyPatients} />

        <RevenueChart data={revenueData} />

      </div>

      {/* TODAY OVERVIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

        <OverviewCard
          title="Waiting Patients"
          value="18"
        />

        <OverviewCard
          title="Completed Visits"
          value="42"
        />

        <OverviewCard
          title="Pending Lab Reports"
          value="7"
        />

        <OverviewCard
          title="New Registrations"
          value="12"
        />

      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-8">

        {/* RECENT ACTIVITY */}
        <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            Recent Activity
          </h2>

          <div className="space-y-4">

            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-slate-800 p-4 rounded-xl"
              >
                {activity}
              </div>
            ))}

          </div>

        </div>

        {/* DOCTORS */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="text-xl font-semibold mb-5">
            Active Doctors
          </h2>

          <div className="space-y-4">

            {doctors.map((doctor) => (
              <div
                key={doctor.name}
                className="bg-slate-800 p-4 rounded-xl"
              >

                <h3 className="font-semibold">
                  {doctor.name}
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  {doctor.specialty}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

      <h3 className="text-slate-400">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-3">
        {value}
      </p>

    </div>
  );
}

function OverviewCard({ title, value }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

      <h3 className="text-slate-400">
        {title}
      </h3>

      <p className="text-2xl font-bold mt-3 text-blue-400">
        {value}
      </p>

    </div>
  );
}