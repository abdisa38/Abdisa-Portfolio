import React, { useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { CurrentProject } from "./components/CurrentProject";
import { Experience } from "./components/Experience";
import { Leadership } from "./components/Leadership";
import { GithubImpact } from "./components/GithubImpact";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Spotlight } from "./components/Spotlight";
import { SmoothScroll } from "./components/SmoothScroll";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <SmoothScroll>
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600/30 transition-colors duration-300 relative">
          <Spotlight />
          <Navbar />
          <main className="flex flex-col items-center w-full">
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <CurrentProject />
            <Experience />
            <Leadership />
            <GithubImpact />
            <Contact />
          </main>
          <footer className="w-full py-8 border-t border-red-500/20 text-center text-sm text-gray-400 bg-black relative z-10">
            <p>© {new Date().getFullYear()} Abdisa Awel Tahir. All rights reserved.</p>
          </footer>
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
