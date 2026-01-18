import { FaCheckCircle, FaRocket, FaChartLine, FaGlobe } from "react-icons/fa";

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch Phase",
      icon: <FaRocket className="text-yellow-400 w-7 h-7 mb-3" />,
      completed: [0, 1, 2, 3],
      details: [
        "Official website launch",
        "Social media setup (X, Telegram, Facebook)",
        "Initial community building",
        "DEX paid & launch preparation",
      ],
    },
    {
      phase: "Phase 2",
      title: "Growth Phase",
      icon: <FaChartLine className="text-yellow-400 w-7 h-7 mb-3" />,
      completed: [0, 1, 2, 3],
      details: [
        "Boost campaigns on social platforms",
        "Community rewards & engagement",
        "CoinGecko & CoinMarketCap listing",
        "Giveaways and partnerships",
      ],
    },
    {
      phase: "Phase 3",
      title: "Expansion Phase",
      icon: <FaGlobe className="text-yellow-400 w-7 h-7 mb-3" />,
      completed: [0, 1, 2, 3],
      details: [
        "Major exchange listings",
        "10,000+ holders milestone",
        "Ongoing community incentives",
        "Strategic partnerships & utilities",
      ],
    },
  ];

  return (
    <section id="roadmap" className="relative py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="uppercase tracking-widest text-sm mb-2 text-yellow-400">Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-yellow-400">Roadmap</h2>
          <p className="max-w-xl mx-auto text-base text-[#fff8dc]">
            Our path toward building a strong, sustainable, and community-driven memecoin ecosystem.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-yellow-400/40" />
          <div className="space-y-20">
            {phases.map((phase, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-400 text-black font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <div className="w-full md:w-[45%] rounded-xl p-6 bg-[#7B4513]/40 border border-yellow-400 text-[#fff8dc]">
                  <div className="flex justify-center md:justify-start">{phase.icon}</div>
                  <p className="text-base text-yellow-400 font-semibold mb-1">{phase.phase}</p>
                  <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    {phase.details.map((item, idx) => {
                      const isCompleted = phase.completed.includes(idx);
                      return (
                        <li key={idx} className="flex items-start gap-3">
                          {isCompleted ? <FaCheckCircle className="mt-1 text-green-500 animate-blink" /> : <span className="w-3 h-3 mt-2 rounded-full border border-white/60" />}
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
