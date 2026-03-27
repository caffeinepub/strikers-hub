import { Search } from "lucide-react";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="mt-12" data-ocid="footer.section">
      <div
        className="rounded-2xl border border-subtle px-6 py-6"
        style={{ background: "oklch(0.18 0.007 243)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col leading-none select-none">
            <span className="text-xl font-black tracking-tight text-foreground">
              STRIKER
            </span>
            <span className="text-xl font-black tracking-tight text-amber">
              ZONE
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-4 justify-center">
            {["Home", "Strikers", "Stats", "Goals", "News"].map((link) => (
              <button
                type="button"
                key={link}
                className="text-xs font-semibold tracking-wider text-muted-foreground hover:text-amber transition-colors"
                data-ocid={`footer.${link.toLowerCase()}.link`}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Social + Search */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {[
                { Icon: SiX, label: "Twitter/X", href: "https://x.com" },
                {
                  Icon: SiInstagram,
                  label: "Instagram",
                  href: "https://instagram.com",
                },
                {
                  Icon: SiYoutube,
                  label: "YouTube",
                  href: "https://youtube.com",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-7 h-7 rounded-full border border-subtle flex items-center justify-center text-muted-foreground hover:text-amber hover:border-amber transition-all"
                >
                  <Icon size={12} />
                </a>
              ))}
            </div>
            {/* Search pill */}
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-subtle"
              style={{ background: "oklch(0.22 0.008 243)" }}
            >
              <Search size={12} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none w-20"
                data-ocid="footer.search_input"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-subtle flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Striker Zone. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with &hearts; using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
