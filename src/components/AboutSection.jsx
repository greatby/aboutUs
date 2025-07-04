import { motion } from "framer-motion";
import { HiMiniCpuChip, HiMiniUserGroup, HiMiniRocketLaunch } from "react-icons/hi2";

const layers = [
  {
    years: "Year 1–3",
    title: "Layer 1 – Intelligent HR Automation",
    icon: <HiMiniCpuChip className="w-8 h-8 text-indigo-600" />,
    description:
      "We will solidify our position as India’s leading provider of intelligent HR software. With automation and analytics at the core, we’ll offer powerful, product-led human resource management systems.",
  },
  {
    years: "Year 4–7",
    title: "Layer 2 – Hybrid Human-AI Orchestration",
    icon: <HiMiniUserGroup className="w-8 h-8 text-indigo-600" />,
    description:
      "We’ll launch a hybrid orchestration platform where humans and intelligent agents collaborate, automate complex workflows, and begin shaping the future of HR.",
  },
  {
    years: "Year 8–10",
    title: "Layer 3 – Unified Agentic AI Platform",
    icon: <HiMiniRocketLaunch className="w-8 h-8 text-indigo-600" />,
    description:
      "By 2035, we’ll be a global leader in AI orchestration — deploying autonomous agents that adapt, learn, and manage entire business functions, starting with HR.",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="bg-[#f8fafc] py-20 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        {/* Heading */}
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Our 10-Year Vision & Mission: Orchestrating the Agentic Era
          </h2>
          <p className="text-lg text-gray-600">
            A bold roadmap to a future powered by intelligent, autonomous AI.
          </p>
        </div>

        {/* Layered Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-6 text-left flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                {layer.icon}
                <p className="text-sm font-medium text-indigo-600">
                  {layer.years}
                </p>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {layer.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {layer.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
