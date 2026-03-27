import { Trophy } from "lucide-react";
import { motion } from "motion/react";
import { useGetTopStrikers } from "../hooks/useQueries";

const fallbackLeaders = [
  {
    rank: 1,
    name: "Karim Benzema",
    club: "Al-Ittihad",
    goals: 360,
    matches: 520,
    initials: "KB",
    color: "oklch(0.55 0.18 55)",
  },
  {
    rank: 2,
    name: "Robert Lewandowski",
    club: "Barcelona",
    goals: 350,
    matches: 480,
    initials: "RL",
    color: "oklch(0.55 0.18 30)",
  },
  {
    rank: 3,
    name: "Harry Kane",
    club: "Bayern Munich",
    goals: 280,
    matches: 420,
    initials: "HK",
    color: "oklch(0.55 0.18 200)",
  },
];

export default function SeasonLeaders() {
  const { data: topStrikers } = useGetTopStrikers(3);

  const leaders =
    topStrikers && topStrikers.length > 0
      ? topStrikers.map((s, i) => ({
          rank: i + 1,
          name: s.name,
          club: s.club,
          goals: Number(s.goals),
          matches: Number(s.matches),
          initials: s.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2),
          color: fallbackLeaders[i]?.color ?? "oklch(0.55 0.18 60)",
        }))
      : fallbackLeaders;

  const rankColors = [
    "text-amber",
    "text-muted-foreground",
    "text-muted-foreground",
  ];
  const rankIcons = ["🥇", "🥈", "🥉"];

  return (
    <section className="mt-10" data-ocid="leaders.section">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-black uppercase tracking-widest text-foreground flex items-center gap-2">
          <Trophy size={18} className="text-amber" /> Season Leaders
        </h2>
        <button
          type="button"
          className="px-4 py-1.5 rounded-full text-xs font-semibold border border-subtle text-muted-foreground hover:border-amber hover:text-amber transition-colors"
          data-ocid="leaders.table.button"
        >
          Table
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {leaders.map((leader, i) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="rounded-2xl border border-subtle shadow-card p-5 hover:border-amber/40 transition-all"
            style={{ background: "oklch(0.22 0.008 243)" }}
            data-ocid={`leaders.item.${i + 1}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xl font-black ${rankColors[i]}`}>
                {rankIcons[i]}
              </span>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(145deg, ${leader.color}, oklch(0.18 0.01 243))`,
                }}
              >
                <span className="text-base font-black text-white/80">
                  {leader.initials}
                </span>
              </div>
              <div className="min-w-0">
                <div className="font-bold text-sm text-foreground truncate">
                  {leader.name}
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  {leader.club}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "GOALS", value: leader.goals },
                { label: "MATCHES", value: leader.matches },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-3 text-center"
                  style={{ background: "oklch(0.26 0.009 243)" }}
                >
                  <div className="text-xl font-black text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-muted-foreground tracking-widest mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-1 rounded-full bg-amber/20 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-amber"
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.min((leader.goals / 400) * 100, 100)}%`,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 + i * 0.12,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
