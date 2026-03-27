import { Play } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  {
    title: "Mbappé's Hat-trick vs PSG",
    duration: "9:00",
    color: "oklch(0.35 0.05 270)",
    category: "UCL",
  },
  {
    title: "Haaland 5 Goals in One Game",
    duration: "7:00",
    color: "oklch(0.35 0.05 150)",
    category: "EPL",
  },
  {
    title: "Benzema Overhead Kick Classic",
    duration: "5:30",
    color: "oklch(0.35 0.05 55)",
    category: "LaLiga",
  },
  {
    title: "Kane's Last-Minute Winner",
    duration: "4:45",
    color: "oklch(0.35 0.05 200)",
    category: "Bundesliga",
  },
];

export default function LatestHighlights() {
  return (
    <section className="mt-10" data-ocid="highlights.section">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-black uppercase tracking-widest text-foreground">
          Latest Highlights
        </h2>
        <button
          type="button"
          className="px-4 py-1.5 rounded-full text-xs font-semibold border border-subtle text-muted-foreground hover:border-amber hover:text-amber transition-colors"
          data-ocid="highlights.view_all.button"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((video, i) => (
          <motion.div
            key={video.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden border border-subtle shadow-card hover:border-amber/40 transition-all group cursor-pointer"
            style={{ background: "oklch(0.22 0.008 243)" }}
            data-ocid={`highlights.item.${i + 1}`}
          >
            {/* Thumbnail */}
            <div
              className="relative h-32 flex items-center justify-center"
              style={{
                background: `linear-gradient(145deg, ${video.color}, oklch(0.16 0.008 243))`,
              }}
            >
              {/* Play overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(0,0,0,0.4)" }}
              >
                <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center shadow-amber">
                  <Play
                    size={16}
                    className="ml-0.5"
                    style={{
                      fill: "oklch(0.12 0.005 243)",
                      color: "oklch(0.12 0.005 243)",
                    }}
                  />
                </div>
              </div>
              {/* Category badge */}
              <span
                className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider text-amber"
                style={{ background: "rgba(0,0,0,0.5)" }}
              >
                {video.category}
              </span>
              {/* Duration badge */}
              <span
                className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold text-foreground"
                style={{ background: "rgba(0,0,0,0.75)" }}
              >
                {video.duration}
              </span>
            </div>

            {/* Caption */}
            <div className="p-3">
              <p className="text-sm font-semibold text-foreground leading-tight line-clamp-2">
                {video.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
