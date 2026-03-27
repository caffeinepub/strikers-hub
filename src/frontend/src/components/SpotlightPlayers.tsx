import { Play, TrendingUp, User } from "lucide-react";
import { motion } from "motion/react";

const players = [
  {
    name: "Kylian Mbappé",
    club: "Real Madrid",
    goals: 250,
    matches: 312,
    initials: "KM",
    color: "oklch(0.55 0.18 270)",
  },
  {
    name: "Erling Haaland",
    club: "Man City",
    goals: 180,
    matches: 214,
    initials: "EH",
    color: "oklch(0.55 0.18 150)",
  },
  {
    name: "Robert Lewandowski",
    club: "Barcelona",
    goals: 350,
    matches: 480,
    initials: "RL",
    color: "oklch(0.55 0.18 30)",
  },
  {
    name: "Mohamed Salah",
    club: "Liverpool",
    goals: 220,
    matches: 380,
    initials: "MS",
    color: "oklch(0.55 0.18 15)",
  },
  {
    name: "Harry Kane",
    club: "Bayern Munich",
    goals: 280,
    matches: 420,
    initials: "HK",
    color: "oklch(0.55 0.18 200)",
  },
  {
    name: "Karim Benzema",
    club: "Al-Ittihad",
    goals: 360,
    matches: 520,
    initials: "KB",
    color: "oklch(0.55 0.18 55)",
  },
];

export default function SpotlightPlayers() {
  return (
    <section className="mt-10" data-ocid="spotlight.section">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-black uppercase tracking-widest text-foreground">
          Spotlight Players
        </h2>
        <button
          type="button"
          className="px-4 py-1.5 rounded-full text-xs font-semibold border border-subtle text-muted-foreground hover:border-amber hover:text-amber transition-colors"
          data-ocid="spotlight.view_all.button"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player, i) => (
          <motion.div
            key={player.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden border border-subtle shadow-card hover:border-amber/40 transition-all group"
            style={{ background: "oklch(0.22 0.008 243)" }}
            data-ocid={`spotlight.item.${i + 1}`}
          >
            {/* Image area */}
            <div className="relative p-4 pb-0">
              <div
                className="w-full h-28 rounded-xl flex items-end justify-center overflow-hidden relative"
                style={{
                  background: `linear-gradient(145deg, ${player.color}, oklch(0.18 0.008 243))`,
                }}
              >
                <span
                  className="text-5xl font-black text-white/20 absolute inset-0 flex items-center justify-center"
                  style={{ letterSpacing: "-0.04em" }}
                >
                  {player.initials}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="relative z-10 text-xs font-bold tracking-widest text-white/80 pb-2">
                  {player.club}
                </span>
              </div>
              {/* Play icon */}
              <button
                type="button"
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-amber flex items-center justify-center shadow-amber hover:brightness-110 transition-all"
                aria-label={`Play ${player.name} highlights`}
                data-ocid={`spotlight.play.button.${i + 1}`}
              >
                <Play
                  size={12}
                  className="fill-shell text-shell ml-0.5"
                  style={{ color: "oklch(0.12 0.005 243)" }}
                />
              </button>
            </div>

            {/* Info + stats */}
            <div className="p-4 flex items-start justify-between">
              <div>
                <div className="font-bold text-sm text-foreground leading-tight">
                  {player.name}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {player.club}
                </div>
              </div>
              <div className="flex gap-4 text-right">
                <div>
                  <div className="text-lg font-black text-foreground">
                    {player.goals}
                  </div>
                  <div className="text-[10px] text-muted-foreground tracking-widest">
                    GOALS
                  </div>
                </div>
                <div>
                  <div className="text-lg font-black text-foreground">
                    {player.matches}
                  </div>
                  <div className="text-[10px] text-muted-foreground tracking-widest">
                    GAMES
                  </div>
                </div>
              </div>
            </div>

            {/* Action pills */}
            <div className="px-4 pb-4 flex gap-2 flex-wrap">
              <button
                type="button"
                className="px-3 py-1 rounded-full text-xs font-semibold bg-amber text-shell hover:brightness-110 transition-all"
                style={{ color: "oklch(0.12 0.005 243)" }}
                data-ocid={`spotlight.profile.button.${i + 1}`}
              >
                View Profile
              </button>
              <button
                type="button"
                className="px-3 py-1 rounded-full text-xs font-semibold border border-subtle text-muted-foreground hover:border-amber hover:text-amber transition-all"
                data-ocid={`spotlight.stats.button.${i + 1}`}
              >
                <TrendingUp size={10} className="inline mr-1" />
                Stats
              </button>
              <button
                type="button"
                className="px-3 py-1 rounded-full text-xs font-semibold border border-subtle text-muted-foreground hover:border-amber hover:text-amber transition-all"
                data-ocid={`spotlight.highlights.button.${i + 1}`}
              >
                <User size={10} className="inline mr-1" />
                Highlights
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
