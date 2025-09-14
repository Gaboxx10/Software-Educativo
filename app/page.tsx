"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import IntroSection from "@/components/sections/intro-section";
import ToolsSection from "@/components/sections/tools-section";
import RolesSection from "@/components/sections/roles-section";
import TechnologiesSection from "@/components/sections/technologies-section";
import AdvancedSection from "@/components/sections/advanced-section";
import ResourcesSection from "@/components/sections/resources-section";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const [activeSection, setActiveSection] = useState("intro");

  const renderSection = () => {
    switch (activeSection) {
      case "intro":
        return <IntroSection />;
      case "tools":
        return <ToolsSection />;
      case "roles":
        return <RolesSection />;
      case "technologies":
        return <TechnologiesSection />;
      case "advanced":
        return <AdvancedSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="transition-all duration-300 ease-in-out">
        {renderSection()}
      </main>

      <footer className="bg-muted/10 border-t border-border/30 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          {/* Derechos */}
          <p className="text-base text-muted-foreground">
            © 2025 <span className="font-semibold">Gabriel Prado</span>. Todos
            los derechos reservados.
          </p>

          {/* Descripción */}
          <p className="text-sm text-muted-foreground">
            Diseñado para promover el aprendizaje sobre desarrollo web y
            tecnología.
          </p>

          {/* Redes */}
          <div className="flex justify-center items-center space-x-3 mt-2">
            <FaGithub className="text-muted-foreground w-5 h-5" />
            <a
              href="https://github.com/Gaboxx10"
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
