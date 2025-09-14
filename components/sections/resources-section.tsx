import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FaBook,
  FaGraduationCap,
  FaUsers,
  FaGamepad,
  FaExternalLinkAlt,
  FaYoutube,
  FaGithub,
  FaDiscord,
} from "react-icons/fa"

export default function ResourcesSection() {
  const resourceCategories = [
    {
      icon: FaGraduationCap,
      title: "Cursos Online",
      description: "Plataformas educativas de calidad",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      resources: [
        {
          name: "freeCodeCamp",
          url: "https://freecodecamp.org",
          description: "Cursos gratuitos completos",
          type: "Gratuito",
        },
        {
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org",
          description: "Documentación oficial",
          type: "Gratuito",
        },
        { name: "W3Schools", url: "https://w3schools.com", description: "Tutoriales interactivos", type: "Gratuito" },
        { name: "Platzi", url: "https://platzi.com", description: "Cursos en español", type: "Premium" },
      ],
    },
    {
      icon: FaUsers,
      title: "Comunidades",
      description: "Conecta con otros desarrolladores",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
      resources: [
        {
          name: "Stack Overflow",
          url: "https://stackoverflow.com",
          description: "Resuelve dudas técnicas",
          type: "Gratuito",
        },
        { name: "Dev.to", url: "https://dev.to", description: "Artículos y discusiones", type: "Gratuito" },
        {
          name: "Reddit r/webdev",
          url: "https://reddit.com/r/webdev",
          description: "Comunidad activa",
          type: "Gratuito",
        },
        { name: "Discord Servers", url: "#", description: "Chat en tiempo real", type: "Gratuito" },
      ],
    },
    {
      icon: FaGamepad,
      title: "Práctica y Retos",
      description: "Mejora tus habilidades con ejercicios",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      resources: [
        {
          name: "Frontend Mentor",
          url: "https://frontendmentor.io",
          description: "Proyectos de diseño real",
          type: "Freemium",
        },
        { name: "Codewars", url: "https://codewars.com", description: "Desafíos de programación", type: "Gratuito" },
        { name: "LeetCode", url: "https://leetcode.com", description: "Algoritmos y estructuras", type: "Freemium" },
        { name: "HackerRank", url: "https://hackerrank.com", description: "Competencias de código", type: "Freemium" },
      ],
    },
  ]

  const quickLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com", description: "Repositorios de código" },
    { name: "YouTube", icon: FaYoutube, url: "https://youtube.com", description: "Tutoriales en video" },
    { name: "Discord", icon: FaDiscord, url: "https://discord.com", description: "Comunidades de desarrolladores" },
  ]

  const learningTips = [
    {
      title: "Aprende Haciendo",
      description: "No solo veas tutoriales, construye proyectos reales desde el primer día.",
      icon: "🛠️",
    },
    {
      title: "Únete a Comunidades",
      description: "Conecta con otros desarrolladores, comparte dudas y aprende de experiencias.",
      icon: "👥",
    },
    {
      title: "Mantente Actualizado",
      description: "La tecnología web evoluciona rápido. Sigue blogs, newsletters y canales relevantes.",
      icon: "📰",
    },
    {
      title: "Practica Constantemente",
      description: "Dedica tiempo regular a resolver problemas y construir proyectos personales.",
      icon: "💪",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="flex items-center justify-center mb-4">
          <FaBook className="text-primary text-4xl mr-3" />
          <h2 className="text-4xl font-bold text-foreground">Recursos para Aprender</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Descubre las mejores plataformas, comunidades y herramientas para acelerar tu aprendizaje en desarrollo web.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {resourceCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <Icon className="text-2xl text-white" />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-muted-foreground">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.resources.map((resource, resourceIndex) => (
                    <div
                      key={resourceIndex}
                      className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-card-foreground">{resource.name}</h4>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              resource.type === "Gratuito"
                                ? "bg-green-100 text-green-800"
                                : resource.type === "Premium"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {resource.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                      <Button size="sm" variant="ghost" className="ml-2">
                        <FaExternalLinkAlt className="text-xs" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Links */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">🔗 Enlaces Rápidos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <Icon className="text-3xl text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-card-foreground mb-2">{link.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    Visitar <FaExternalLinkAlt className="ml-2 text-xs" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Learning Tips */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">💡 Consejos para Aprender Efectivamente</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningTips.map((tip, index) => (
            <div key={index} className="bg-background/50 rounded-lg p-6 border border-border">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">{tip.icon}</span>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{tip.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-muted rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">🚀 ¡Comienza tu Viaje Hoy!</h3>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          El desarrollo web es un campo emocionante y en constante evolución. Con dedicación y los recursos adecuados,
          puedes construir una carrera exitosa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            Comenzar con HTML/CSS
          </Button>
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            Explorar Comunidades
          </Button>
        </div>
      </div>
    </section>
  )
}
