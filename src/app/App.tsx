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

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#030614] dark:text-slate-50 font-sans selection:bg-blue-500/30 transition-colors duration-300">
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
        <footer className="w-full py-8 border-t border-slate-200 dark:border-white/10 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Abdisa Awel Tahir. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
