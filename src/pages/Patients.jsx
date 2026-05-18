import { patients } from "../data/patients";
import PatientsTable from "../components/patients/PatientsTable";

export default function Patients() {
  return (
    <div>

      {/* HEADER */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Patients
          </h1>

          <p className="text-slate-400 mt-1">
            Manage clinic patients
          </p>
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-medium">
          + Add Patient
        </button>

      </div>

      {/* SEARCH */}
      <div className="mt-8">

        <input
          type="text"
          placeholder="Search patients..."
          className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 outline-none"
        />

      </div>

      {/* TABLE */}
      <div className="mt-8">

        <PatientsTable patients={patients} />

      </div>

    </div>
  );
}