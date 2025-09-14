"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FaGlobe, FaTools, FaUsers, FaCode, FaLightbulb, FaBook, FaBars, FaTimes } from "react-icons/fa"

const navigationItems = [
  { id: "intro", label: "Introducción", icon: FaGlobe },
  { id: "tools", label: "Herramientas", icon: FaTools },
  { id: "roles", label: "Roles", icon: FaUsers },
  { id: "technologies", label: "Tecnologías", icon: FaCode },
  { id: "advanced", label: "Avanzado", icon: FaLightbulb },
  { id: "resources", label: "Recursos", icon: FaBook },
]

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    /* Cleaner navigation with more subtle backdrop and minimal border */
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <FaCode className="text-primary text-xl" />
            </div>
            <span className="text-2xl font-semibold text-foreground tracking-tight">Desarrollo Web</span>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => onSectionChange(item.id)}
                  className="flex items-center space-x-2 px-4 py-2 h-11 transition-all duration-200 hover:bg-accent/50"
                >
                  <Icon className="text-sm" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Button>
              )
            })}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-10 w-10 p-0"
            >
              {isMobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50">
            <div className="flex flex-col space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "ghost"}
                    onClick={() => {
                      onSectionChange(item.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className="flex items-center justify-start space-x-3 w-full px-4 py-3 h-12"
                  >
                    <Icon className="text-lg" />
                    <span className="font-medium">{item.label}</span>
                  </Button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
