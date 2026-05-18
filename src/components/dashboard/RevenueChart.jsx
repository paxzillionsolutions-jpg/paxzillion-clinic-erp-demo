import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

export default function RevenueChart({ data }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

      <h2 className="text-xl font-semibold mb-5">
        Revenue Overview
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <XAxis dataKey="month" />

            <Tooltip />

            <Bar
              dataKey="revenue"
              fill="#3b82f6"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}