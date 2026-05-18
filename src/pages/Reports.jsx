import {
  reportStats,
  patientGrowth,
  doctorPerformance,
} from "../data/reportsData";

import PatientGrowthChart from "../components/reports/PatientGrowthChart";
import DoctorPerformance from "../components/reports/DoctorPerformance";

export default function Reports() {
  return (
    <div>

      {/* HEADER */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

        <div>

          <h1 className="text-3xl font-bold">
            Reports & Analytics
          </h1>

          <p className="text-slate-400 mt-1">
            Clinic performance overview
          </p>

        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">

          <select className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-xl outline-none">

            <option>Vadodara Branch</option>
            <option>Ahmedabad Branch</option>
            <option>Surat Branch</option>

          </select>

          <button className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-medium">
            Export Reports
          </button>

        </div>

      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

        {reportStats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
          />
        ))}

      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-8">

        <div className="xl:col-span-2">
          <PatientGrowthChart data={patientGrowth} />
        </div>

        <DoctorPerformance doctors={doctorPerformance} />

      </div>

      {/* EXTRA ANALYTICS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8">

        {/* APPOINTMENT SUMMARY */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-xl font-semibold">
              Appointment Summary
            </h2>

            <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-sm">
              Updated Live
            </div>

          </div>

          <div className="space-y-4 mt-6">

            <SummaryRow
              label="Completed Appointments"
              value="978"
            />

            <SummaryRow
              label="Cancelled Appointments"
              value="42"
            />

            <SummaryRow
              label="Pending Consultations"
              value="18"
            />

            <SummaryRow
              label="Video Consultations"
              value="126"
            />

          </div>

        </div>

        {/* REVENUE BREAKDOWN */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-xl font-semibold">
              Revenue Breakdown
            </h2>

            <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-lg text-sm">
              Monthly
            </div>

          </div>

          <div className="space-y-4 mt-6">

            <SummaryRow
              label="Consultation Revenue"
              value="₹1,45,000"
            />

            <SummaryRow
              label="Pharmacy Revenue"
              value="₹72,000"
            />

            <SummaryRow
              label="Lab Test Revenue"
              value="₹18,000"
            />

            <SummaryRow
              label="Online Consultation"
              value="₹10,000"
            />

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

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">

      <span className="text-slate-400">
        {label}
      </span>

      <span className="font-semibold text-blue-400">
        {value}
      </span>

    </div>
  );
}