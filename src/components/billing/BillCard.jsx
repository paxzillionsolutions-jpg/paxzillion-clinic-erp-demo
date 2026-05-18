import { motion } from "framer-motion";

export default function BillCard({ bill }) {

  const statusColors = {
    Paid: "bg-green-500/20 text-green-400",
    Pending: "bg-yellow-500/20 text-yellow-400",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
    >

      {/* TOP */}
      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            {bill.patient}
          </h2>

          <p className="text-slate-400 mt-1">
            Invoice ID: {bill.id}
          </p>

        </div>

        <div
          className={`px-3 py-1 rounded-full text-sm ${statusColors[bill.status]}`}
        >
          {bill.status}
        </div>

      </div>

      {/* DETAILS */}
      <div className="mt-6 space-y-3">

        <Row
          label="Consultation Fee"
          value={`₹${bill.consultation}`}
        />

        <Row
          label="Medicine Charges"
          value={`₹${bill.medicines}`}
        />

        <Row
          label="Payment Method"
          value={bill.paymentMethod}
        />

      </div>

      {/* TOTAL */}
      <div className="flex items-center justify-between mt-8 pt-5 border-t border-slate-800">

        <h3 className="text-lg font-semibold">
          Total
        </h3>

        <h3 className="text-2xl font-bold text-blue-400">
          ₹{bill.total}
        </h3>

      </div>

      {/* BUTTONS */}
      <div className="grid grid-cols-2 gap-3 mt-6">

        <button className="bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-medium">
          Generate Receipt
        </button>

        <button className="bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-medium">
          Print Invoice
        </button>

      </div>

    </motion.div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-slate-400">
        {label}
      </span>

      <span>
        {value}
      </span>

    </div>
  );
}