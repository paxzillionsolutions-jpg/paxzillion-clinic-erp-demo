export default function AppointmentCard({ appointment }) {

  const statusColors = {
    Waiting: "bg-yellow-500/20 text-yellow-400",
    "In Consultation": "bg-blue-500/20 text-blue-400",
    Completed: "bg-green-500/20 text-green-400",
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500 transition">

      {/* TOP */}
      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            {appointment.patient}
          </h2>

          <p className="text-slate-400 mt-1">
            {appointment.doctor}
          </p>

        </div>

        <div
          className={`px-3 py-1 rounded-full text-sm ${statusColors[appointment.status]}`}
        >
          {appointment.status}
        </div>

      </div>

      {/* DETAILS */}
      <div className="mt-6 space-y-4">

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Appointment Time
          </span>

          <span className="font-medium">
            {appointment.time}
          </span>

        </div>

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Queue Number
          </span>

          <span className="font-semibold text-blue-400">
            {appointment.queue}
          </span>

        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-2 gap-3 mt-6">

        <button className="bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-medium transition">
          Open Appointment
        </button>

        <button className="bg-purple-500 hover:bg-purple-600 py-3 rounded-xl font-medium transition">
          Video Call
        </button>

      </div>

    </div>
  );
}