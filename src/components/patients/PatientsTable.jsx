import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function PatientsTable({ patients }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-x-auto">

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>

            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Age</th>
            <th className="text-left p-4">Gender</th>
            <th className="text-left p-4">Mobile</th>
            <th className="text-left p-4">Blood Group</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Action</th>

          </tr>

        </thead>

        <tbody>

          {patients.map((patient) => (
            <tr
              key={patient.id}
              className="border-t border-slate-800 hover:bg-slate-800/40 transition"
            >

              <td className="p-4 font-medium whitespace-nowrap">
                {patient.name}
              </td>

              <td className="p-4 whitespace-nowrap">
                {patient.age}
              </td>

              <td className="p-4 whitespace-nowrap">
                {patient.gender}
              </td>

              <td className="p-4 whitespace-nowrap">
                {patient.mobile}
              </td>

              <td className="p-4 whitespace-nowrap">
                {patient.bloodGroup}
              </td>

              <td className="p-4 whitespace-nowrap">

                <StatusBadge status={patient.status} />

              </td>

              {/* ACTIONS */}
              <td className="p-4 whitespace-nowrap">

                <div className="flex gap-2">

                  {/* VIEW PROFILE */}
                  <Link to="/patient-profile">

                    <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm transition">
                      View
                    </button>

                  </Link>

                  {/* REMINDER */}
                  <button
                    onClick={() =>
                      toast.success("Reminder sent successfully")
                    }
                    className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm transition"
                  >
                    Reminder
                  </button>

                </div>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

function StatusBadge({ status }) {

  const colors = {
    Active: "bg-green-500/20 text-green-400",
    Pending: "bg-yellow-500/20 text-yellow-400",
    Inactive: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${colors[status]}`}
    >
      {status}
    </span>
  );
}