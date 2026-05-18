import { appointments } from "../data/appointments";

import AppointmentCard from "../components/appointments/AppointmentCard";

export default function Appointments() {
  return (
    <div>

      {/* HEADER */}
      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Appointments
          </h1>

          <p className="text-slate-400 mt-1">
            Manage patient appointments
          </p>

        </div>

        <button className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-medium">
          + New Appointment
        </button>

      </div>

      {/* SEARCH */}
      <div className="mt-8">

        <input
          type="text"
          placeholder="Search appointments..."
          className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 outline-none"
        />

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-5 mt-8">

        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
          />
        ))}

      </div>

    </div>
  );
}