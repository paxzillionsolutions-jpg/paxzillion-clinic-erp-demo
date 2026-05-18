import {
  Bot,
  MessageCircle,
  Video,
  Pill,
  Building2,
} from "lucide-react";

const features = [
  {
    title: "AI Health Assistant",
    description:
      "Smart AI-based diagnosis suggestions & analytics.",
    icon: Bot,
  },

  {
    title: "WhatsApp Reminders",
    description:
      "Automatic appointment & medicine reminders.",
    icon: MessageCircle,
  },

  {
    title: "Video Consultation",
    description:
      "Online doctor consultation with secure sessions.",
    icon: Video,
  },

  {
    title: "Pharmacy Inventory",
    description:
      "Track medicine stock & expiry management.",
    icon: Pill,
  },

  {
    title: "Multi-Branch Support",
    description:
      "Manage multiple clinic branches centrally.",
    icon: Building2,
  },
];

export default function AdvancedFeatures() {
  return (
    <div className="mt-8">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Advanced Features
          </h2>

          <p className="text-slate-400 mt-1">
            Future-ready clinic management tools
          </p>

        </div>

        <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl">
          Coming Soon
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center">

                <Icon size={28} />

              </div>

              <h3 className="text-xl font-semibold mt-5">
                {feature.title}
              </h3>

              <p className="text-slate-400 mt-3 leading-relaxed">
                {feature.description}
              </p>

              <button className="mt-6 bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl w-full">
                Explore Feature
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
}