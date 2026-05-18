import { patients } from "../data/patients";

export default function PatientProfile() {

  const patient = patients[0];

  return (
    <div>

      {/* HEADER */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-bold">
              {patient.name}
            </h1>

            <p className="text-slate-400 mt-2">
              {patient.gender} • {patient.age} Years
            </p>

          </div>

          <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl">
            Blood Group: {patient.bloodGroup}
          </div>

        </div>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-5 mt-8">

        {/* LEFT SIDE */}
        <div className="space-y-5">

          {/* ALLERGIES */}
          <Card title="Allergies">

            {patient.allergies.map((item, index) => (
              <Tag key={index} text={item} />
            ))}

          </Card>

          {/* HISTORY */}
          <Card title="Medical History">

            {patient.medicalHistory.map((item, index) => (
              <Tag key={index} text={item} />
            ))}

          </Card>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-2 space-y-5">

          {/* VISITS */}
          <Card title="Previous Visits">

            <div className="space-y-4">

              {patient.visits.map((visit, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-4 rounded-xl"
                >

                  <h3 className="font-semibold">
                    {visit.diagnosis}
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    {visit.date}
                  </p>

                </div>
              ))}

            </div>

          </Card>

          {/* PRESCRIPTIONS */}
          <Card title="Previous Prescriptions">

            <div className="space-y-4">

              {patient.prescriptions.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800 p-4 rounded-xl flex items-center justify-between"
                >

                  <div>

                    <h3 className="font-semibold">
                      {item.medicine}
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Dosage: {item.dosage}
                    </p>

                  </div>

                  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm">
                    View
                  </button>

                </div>
              ))}

            </div>

          </Card>

        </div>

      </div>

    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        {title}
      </h2>

      <div className="space-y-3">
        {children}
      </div>

    </div>
  );
}

function Tag({ text }) {
  return (
    <div className="bg-slate-800 px-4 py-3 rounded-xl">
      {text}
    </div>
  );
}