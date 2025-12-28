import { type ReactNode } from "react";
import { ColorTransitionOverlay } from "./ColorTransitionOverlay";
import { Footer } from "./Footer";
import { GlitterBackground } from "./GlitterBackground";
import { Header } from "./Header";
import { WavyDivider } from "./WavyDivider";

export function AppLayout({ children, isDark }: { children: ReactNode; isDark: boolean }) {
  return (
    <div className={`min-h-screen ${isDark ? "dark bg-transparent" : "bg-white"}`}>
      {isDark && <GlitterBackground />}
      <WavyDivider className="w-full z-10" color="#D4AF37" />
      <ColorTransitionOverlay />
      <Header />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
