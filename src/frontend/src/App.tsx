import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LatestHighlights from "./components/LatestHighlights";
import PlayerProfiles from "./components/PlayerProfiles";
import SeasonLeaders from "./components/SeasonLeaders";
import SpotlightPlayers from "./components/SpotlightPlayers";

export default function App() {
  return (
    <div
      className="min-h-screen font-inter"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.13 0.006 243) 0%, oklch(0.17 0.007 243) 100%)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-4 pb-8">
        <Header />
        <main>
          <Hero />
          <SpotlightPlayers />
          <PlayerProfiles />
          <SeasonLeaders />
          <LatestHighlights />
        </main>
        <Footer />
      </div>
    </div>
  );
}
