import { Search, User } from "lucide-react";
import { useState } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

const navLinks = ["HOME", "STRIKERS", "STATS", "GOALS", "NEWS"];

export default function Header() {
  const [activeNav, setActiveNav] = useState("HOME");
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const isLoggedIn = loginStatus === "success" && !!identity;

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 rounded-b-2xl border-b border-subtle shadow-hero"
      style={{
        background: "oklch(0.15 0.006 243 / 0.97)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Logo */}
      <div
        className="flex flex-col leading-none select-none"
        data-ocid="header.link"
      >
        <span className="text-2xl font-black tracking-tight text-foreground">
          STRIKER
        </span>
        <span className="text-2xl font-black tracking-tight text-amber">
          ZONE
        </span>
      </div>

      {/* Nav */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <button
            type="button"
            key={link}
            onClick={() => setActiveNav(link)}
            className={`text-xs font-semibold tracking-widest transition-colors ${
              activeNav === link
                ? "text-amber"
                : "text-muted-foreground hover:text-foreground"
            }`}
            data-ocid={`nav.${link.toLowerCase()}.link`}
          >
            {link}
          </button>
        ))}
        <button
          type="button"
          className="text-muted-foreground hover:text-amber transition-colors"
          aria-label="Search"
          data-ocid="header.search_input"
        >
          <Search size={14} strokeWidth={2.5} />
        </button>
      </nav>

      {/* Auth */}
      <div className="flex items-center gap-2">
        {isLoggedIn ? (
          <button
            type="button"
            onClick={clear}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-subtle text-sm text-foreground hover:border-amber transition-colors"
            data-ocid="header.logout.button"
          >
            <User size={14} className="text-amber" />
            <span className="hidden sm:inline">
              {identity?.getPrincipal().toString().slice(0, 8)}...
            </span>
          </button>
        ) : (
          <button
            type="button"
            onClick={login}
            disabled={loginStatus === "logging-in"}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-subtle text-sm font-medium text-foreground hover:border-amber hover:text-amber transition-colors disabled:opacity-50"
            data-ocid="header.login.button"
          >
            <User size={14} />
            {loginStatus === "logging-in" ? "Logging in..." : "Login"}
          </button>
        )}
      </div>
    </header>
  );
}
