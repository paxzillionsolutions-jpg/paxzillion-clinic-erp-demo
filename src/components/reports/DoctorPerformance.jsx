export default function DoctorPerformance({ doctors }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        Doctor Performance
      </h2>

      <div className="space-y-5">

        {doctors.map((doctor) => (
          <div
            key={doctor.doctor}
            className="bg-slate-800 p-4 rounded-xl"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-semibold">
                  {doctor.doctor}
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  Patients Treated
                </p>

              </div>

              <div className="text-2xl font-bold text-blue-400">
                {doctor.patients}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}