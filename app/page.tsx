"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import IntroSection from "@/components/sections/intro-section"
import ToolsSection from "@/components/sections/tools-section"
import RolesSection from "@/components/sections/roles-section"
import TechnologiesSection from "@/components/sections/technologies-section"
import AdvancedSection from "@/components/sections/advanced-section"
import ResourcesSection from "@/components/sections/resources-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("intro")

  const renderSection = () => {
    switch (activeSection) {
      case "intro":
        return <IntroSection />
      case "tools":
        return <ToolsSection />
      case "roles":
        return <RolesSection />
      case "technologies":
        return <TechnologiesSection />
      case "advanced":
        return <AdvancedSection />
      case "resources":
        return <ResourcesSection />
      default:
        return <IntroSection />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="transition-all duration-300 ease-in-out">{renderSection()}</main>

      <footer className="bg-muted/20 border-t border-border/30 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-base">
            © 2024 WebDev Academy. Creado con dedicación para la comunidad de desarrolladores.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Comparte este recurso con otros que estén comenzando su viaje en desarrollo web
          </p>
        </div>
      </footer>
    </div>
  )
}
