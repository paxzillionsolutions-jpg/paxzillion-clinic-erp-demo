import { prescription } from "../data/prescriptions";

import toast from "react-hot-toast";

import { useRef } from "react";

import { useReactToPrint } from "react-to-print";

export default function Prescriptions() {

  const printRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Prescription",
  });

  return (
    <div>

      {/* TOPBAR */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 mb-8">

        <div>

          <h1 className="text-3xl font-bold">
            Prescription
          </h1>

          <p className="text-slate-400 mt-1">
            Generate patient prescription
          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          {/* WHATSAPP */}
          <button
            onClick={() =>
              toast.success("Prescription sent successfully")
            }
            className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl font-medium"
          >
            Send WhatsApp
          </button>

          {/* PDF */}
          <button
            onClick={handlePrint}
            className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-medium"
          >
            Download PDF
          </button>

          {/* PRINT */}
          <button
            onClick={handlePrint}
            className="bg-slate-700 hover:bg-slate-600 px-5 py-3 rounded-xl font-medium"
          >
            Print
          </button>

        </div>

      </div>

      {/* PRINT AREA */}
      <div ref={printRef}>

        <div className="bg-white text-black rounded-3xl p-6 md:p-10 max-w-5xl mx-auto">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-b pb-6">

            <div>

              <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
                {prescription.clinicName}
              </h1>

              <p className="mt-2 text-gray-600">
                Demo by Paxzillion Solutions LLP
              </p>

            </div>

            <div className="text-left md:text-right">

              <h2 className="text-2xl font-bold">
                {prescription.doctor.name}
              </h2>

              <p className="text-gray-600 mt-1">
                {prescription.doctor.specialization}
              </p>

            </div>

          </div>

          {/* PATIENT INFO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

            <InfoCard
              label="Patient Name"
              value={prescription.patient.name}
            />

            <InfoCard
              label="Age / Gender"
              value={`${prescription.patient.age} / ${prescription.patient.gender}`}
            />

            <InfoCard
              label="Diagnosis"
              value={prescription.diagnosis}
            />

          </div>

          {/* RX */}
          <div className="mt-10">

            <h2 className="text-5xl font-bold text-blue-600">
              ℞
            </h2>

          </div>

          {/* TABLE */}
          <div className="mt-6 border rounded-2xl overflow-x-auto">

            <table className="w-full min-w-[600px]">

              <thead className="bg-blue-50">

                <tr>

                  <th className="text-left p-4">
                    Medicine
                  </th>

                  <th className="text-left p-4">
                    Dosage
                  </th>

                  <th className="text-left p-4">
                    Duration
                  </th>

                </tr>

              </thead>

              <tbody>

                {prescription.medicines.map((medicine, index) => (
                  <tr
                    key={index}
                    className="border-t"
                  >

                    <td className="p-4">
                      {medicine.name}
                    </td>

                    <td className="p-4">
                      {medicine.dosage}
                    </td>

                    <td className="p-4">
                      {medicine.duration}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

          {/* SUGGESTED DIAGNOSIS */}
          <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6">

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-lg text-blue-700">
                Suggested Diagnosis
              </h3>

              <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm">
                92% Match
              </div>

            </div>

            <p className="mt-4 text-gray-700">
              Possible Viral Fever based on symptoms:
              fever, fatigue, body pain.
            </p>

          </div>

          {/* ADVICE */}
          <div className="mt-10">

            <h3 className="font-semibold text-lg">
              Advice
            </h3>

            <p className="text-gray-700 mt-3 leading-relaxed">
              Drink plenty of fluids and take adequate rest.
              Follow-up after 5 days if symptoms persist.
            </p>

          </div>

          {/* SIGNATURE */}
          <div className="flex justify-end mt-16">

            <div className="text-center">

              <div className="text-3xl">
                ✍️
              </div>

              <p className="font-semibold mt-2">
                {prescription.doctor.name}
              </p>

              <p className="text-sm text-gray-600">
                Authorized Signature
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="bg-gray-100 rounded-2xl p-5">

      <p className="text-gray-500 text-sm">
        {label}
      </p>

      <h3 className="font-semibold mt-2 break-words">
        {value}
      </h3>

    </div>
  );
}