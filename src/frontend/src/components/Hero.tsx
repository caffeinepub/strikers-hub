import { ChevronRight, Play } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      className="relative mt-6 rounded-2xl overflow-hidden"
      style={{
        minHeight: "420px",
        background:
          "linear-gradient(100deg, oklch(0.12 0.008 250) 0%, oklch(0.18 0.01 250) 40%, oklch(0.22 0.05 220) 100%)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.55)",
      }}
      data-ocid="hero.section"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 30px, oklch(0.5 0.01 240 / 0.3) 30px, oklch(0.5 0.01 240 / 0.3) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, oklch(0.5 0.01 240 / 0.3) 30px, oklch(0.5 0.01 240 / 0.3) 31px)",
        }}
      />

      {/* Amber glow orb */}
      <div
        className="absolute right-1/3 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.15 60), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 flex items-center justify-between px-10 py-12">
        {/* Left content */}
        <div className="flex flex-col gap-5 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest text-amber border border-amber/30 bg-amber/10 mb-4">
              ⚽ SEASON 2025–26
            </span>
            <h1
              className="text-4xl lg:text-5xl font-black uppercase text-foreground leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              THE WORLD'S
              <br />
              <span className="text-amber">GREATEST</span>
              <br />
              STRIKERS
            </h1>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-sm leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            Explore in-depth stats, career highlights, and profiles of the most
            lethal goal-scorers on the planet.
          </motion.p>

          <motion.div
            className="flex items-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-shell transition-all hover:brightness-110 active:scale-95"
              style={{
                background: "oklch(0.78 0.15 60)",
                color: "oklch(0.12 0.005 243)",
              }}
              data-ocid="hero.explore.primary_button"
            >
              Explore Players <ChevronRight size={14} />
            </button>
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-foreground border border-subtle hover:border-amber transition-all active:scale-95"
              style={{ background: "oklch(0.12 0.005 243)" }}
              data-ocid="hero.highlights.secondary_button"
            >
              <Play size={12} className="fill-amber text-amber" /> View
              Highlights
            </button>
          </motion.div>
        </div>

        {/* Right: decorative player silhouette + stats */}
        <motion.div
          className="hidden lg:flex flex-col items-center gap-4"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Giant initials display */}
          <div
            className="w-44 h-56 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(145deg, oklch(0.22 0.01 240), oklch(0.26 0.02 240))",
              border: "1px solid oklch(0.30 0.008 243)",
              boxShadow: "0 0 40px oklch(0.78 0.15 60 / 0.15)",
            }}
          >
            <span
              className="text-6xl font-black text-amber opacity-90"
              style={{ letterSpacing: "-0.04em" }}
            >
              EH
            </span>
            <span className="text-xs font-bold tracking-widest text-muted-foreground mt-1">
              HAALAND
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber rounded-b-2xl" />
          </div>
          <div className="flex gap-6">
            {[
              { label: "GOALS", value: "180" },
              { label: "MATCHES", value: "214" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-foreground">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-widest">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
