import { motion } from "motion/react";

const featured = [
  {
    name: "Vinicius Jr",
    club: "Real Madrid",
    nationality: "Brazil",
    goals: 120,
    matches: 186,
    initials: "VJ",
    color: "oklch(0.55 0.2 145)",
    bio: "Electric winger turned elite striker. Two-time UCL winner and Ballon d'Or contender with blistering pace.",
  },
  {
    name: "Lautaro Martinez",
    club: "Inter Milan",
    nationality: "Argentina",
    goals: 150,
    matches: 238,
    initials: "LM",
    color: "oklch(0.55 0.18 270)",
    bio: "World Cup winner with clinical finishing. Inter's talisman and Serie A's most feared centre-forward.",
  },
];

export default function PlayerProfiles() {
  return (
    <section className="mt-10" data-ocid="profiles.section">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-black uppercase tracking-widest text-foreground">
          Player Profiles
        </h2>
        <button
          type="button"
          className="px-4 py-1.5 rounded-full text-xs font-semibold border border-subtle text-muted-foreground hover:border-amber hover:text-amber transition-colors"
          data-ocid="profiles.view_all.button"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featured.map((player, i) => (
          <motion.div
            key={player.name}
            initial={{ opacity: 0, x: i === 0 ? -24 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
            className="rounded-2xl border border-subtle shadow-card hover:border-amber/40 transition-all overflow-hidden"
            style={{ background: "oklch(0.22 0.008 243)" }}
            data-ocid={`profiles.item.${i + 1}`}
          >
            <div className="p-5 flex gap-5 items-start">
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${player.color}, oklch(0.18 0.01 243))`,
                }}
              >
                <span className="text-2xl font-black text-white/80">
                  {player.initials}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="font-black text-base text-foreground">
                  {player.name}
                </div>
                <div className="text-xs text-muted-foreground mb-3">
                  {player.nationality} · {player.club}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {player.bio}
                </p>

                {/* Stats row */}
                <div className="flex gap-6 mt-4">
                  {[
                    { label: "Goals", value: player.goals },
                    { label: "Matches", value: player.matches },
                    { label: "Club", value: player.club },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-lg font-black text-foreground">
                        {s.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground tracking-widest">
                        {s.label.toUpperCase()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Amber accent bar */}
            <div className="h-1 mx-5 mb-4 rounded-full bg-amber/30 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-amber"
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.min((player.goals / 400) * 100, 100)}%`,
                }}
                transition={{
                  duration: 1,
                  delay: 0.4 + i * 0.15,
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
