import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

export default function PatientGrowthChart({ data }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        Patient Growth
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <XAxis dataKey="month" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="patients"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.2}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}