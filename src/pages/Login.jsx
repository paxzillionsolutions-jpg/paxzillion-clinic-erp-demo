import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white p-5">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

        {/* HEADER */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-500/20 flex items-center justify-center text-3xl font-bold text-blue-400">
            P
          </div>

          <h1 className="text-4xl font-bold text-blue-400 mt-5">
            Paxzillion ERP
          </h1>

          <p className="text-slate-400 mt-3">
            Demo by Paxzillion Solutions LLP
          </p>

        </div>

        {/* FORM */}
        <div className="mt-10 space-y-5">

          <div>

            <label className="text-sm text-slate-400 mb-2 block">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 transition"
            />

          </div>

          <div>

            <label className="text-sm text-slate-400 mb-2 block">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 transition"
            />

          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-blue-500 hover:bg-blue-600 py-4 rounded-2xl font-semibold transition"
          >
            Login
          </button>

        </div>

        {/* DEMO ACCOUNTS */}
        <div className="mt-8 bg-slate-800 rounded-2xl p-5 border border-slate-700">

          <div className="flex items-center justify-between">

            <h3 className="font-semibold">
              Demo Accounts
            </h3>

            <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-xs">
              Active
            </div>

          </div>

          <div className="space-y-4 text-sm text-slate-300 mt-5">

            <div className="bg-slate-900 rounded-xl p-4">

              <p className="font-medium text-white">
                Doctor Account
              </p>

              <p className="mt-2">
                doctor@clinic.com
              </p>

            </div>

            <div className="bg-slate-900 rounded-xl p-4">

              <p className="font-medium text-white">
                Receptionist Account
              </p>

              <p className="mt-2">
                receptionist@clinic.com
              </p>

            </div>

          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-8 text-center text-sm text-slate-500">

          Secure Clinic Management System by Paxzillion Solutions LLP

        </div>

      </div>

    </div>
  );
}