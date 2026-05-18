import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

export default function PatientsChart({ data }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

      <h2 className="text-xl font-semibold mb-5">
        Weekly Patients
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="day" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="patients"
              stroke="#3b82f6"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}