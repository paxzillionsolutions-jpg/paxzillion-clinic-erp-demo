import { bills } from "../data/bills";

import BillCard from "../components/billing/BillCard";

export default function Billing() {
  return (
    <div>

      {/* HEADER */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

        <div>

          <h1 className="text-3xl font-bold">
            Billing
          </h1>

          <p className="text-slate-400 mt-1">
            Manage clinic invoices & payments
          </p>

        </div>

        <button className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-medium">
          + Create Invoice
        </button>

      </div>

      {/* SEARCH */}
      <div className="mt-8">

        <input
          type="text"
          placeholder="Search invoices..."
          className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 outline-none"
        />

      </div>

      {/* INVENTORY ALERTS */}
      <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">

          <div>

            <h2 className="text-xl font-semibold">
              Pharmacy Inventory Alerts
            </h2>

            <p className="text-slate-400 mt-1">
              Medicine stock monitoring
            </p>

          </div>

          <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-xl w-fit">
            Low Stock
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">

          <div className="bg-slate-800 p-4 rounded-xl">

            <h3 className="font-semibold">
              Paracetamol 650
            </h3>

            <p className="text-slate-400 mt-2">
              Remaining: 12 strips
            </p>

          </div>

          <div className="bg-slate-800 p-4 rounded-xl">

            <h3 className="font-semibold">
              Azithromycin
            </h3>

            <p className="text-slate-400 mt-2">
              Remaining: 8 strips
            </p>

          </div>

          <div className="bg-slate-800 p-4 rounded-xl">

            <h3 className="font-semibold">
              Vitamin C
            </h3>

            <p className="text-slate-400 mt-2">
              Remaining: 15 strips
            </p>

          </div>

        </div>

      </div>

      {/* BILL GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8">

        {bills.map((bill) => (
          <BillCard
            key={bill.id}
            bill={bill}
          />
        ))}

      </div>

    </div>
  );
}