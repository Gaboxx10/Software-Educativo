import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaLightbulb, FaShieldAlt, FaRocket, FaCode, FaUniversalAccess, FaRobot } from "react-icons/fa"

export default function AdvancedSection() {
  const advancedTopics = [
    {
      icon: FaShieldAlt,
      title: "Seguridad Web",
      description: "Protege tus aplicaciones de vulnerabilidades comunes",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      topics: ["HTTPS", "CORS", "XSS Prevention", "SQL Injection", "Authentication", "Authorization"],
      importance: "Crítico",
    },
    {
      icon: FaRocket,
      title: "Optimización y Rendimiento",
      description: "Mejora la velocidad y eficiencia de tus aplicaciones",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      topics: ["Core Web Vitals", "Lazy Loading", "Code Splitting", "Caching", "CDN", "Image Optimization"],
      importance: "Alto",
    },
    {
      icon: FaCode,
      title: "Buenas Prácticas",
      description: "Código limpio, mantenible y escalable",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      topics: ["Clean Code", "SOLID Principles", "Design Patterns", "Code Review", "Documentation", "Testing"],
      importance: "Alto",
    },
    {
      icon: FaUniversalAccess,
      title: "Accesibilidad Web",
      description: "Crea aplicaciones inclusivas para todos los usuarios",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop",
      topics: [
        "WCAG Guidelines",
        "ARIA Labels",
        "Keyboard Navigation",
        "Screen Readers",
        "Color Contrast",
        "Semantic HTML",
      ],
      importance: "Esencial",
    },
    {
      icon: FaRobot,
      title: "Futuro de la Web",
      description: "Tecnologías emergentes y tendencias",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      topics: ["Web 3.0", "AI Integration", "WebAssembly", "Progressive Web Apps", "Serverless", "Edge Computing"],
      importance: "Emergente",
    },
  ]

  const bestPractices = [
    {
      category: "Desarrollo",
      practices: [
        "Usa control de versiones (Git) desde el primer día",
        "Escribe código autodocumentado y comentarios útiles",
        "Implementa tests automatizados",
        "Sigue principios de diseño como DRY y KISS",
      ],
    },
    {
      category: "Seguridad",
      practices: [
        "Nunca confíes en datos del cliente",
        "Usa HTTPS en producción siempre",
        "Implementa autenticación y autorización robustas",
        "Mantén dependencias actualizadas",
      ],
    },
    {
      category: "Rendimiento",
      practices: [
        "Optimiza imágenes y recursos estáticos",
        "Implementa lazy loading para contenido no crítico",
        "Usa herramientas de análisis de rendimiento",
        "Minimiza y comprime archivos CSS/JS",
      ],
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="flex items-center justify-center mb-4">
          <FaLightbulb className="text-primary text-4xl mr-3" />
          <h2 className="text-4xl font-bold text-foreground">Temas Complementarios</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Profundiza en aspectos avanzados del desarrollo web que marcan la diferencia entre un desarrollador junior y
          uno senior.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {advancedTopics.map((topic, index) => {
          const Icon = topic.icon
          const importanceColors = {
            Crítico: "bg-red-100 text-red-800",
            Alto: "bg-orange-100 text-orange-800",
            Esencial: "bg-green-100 text-green-800",
            Emergente: "bg-purple-100 text-purple-800",
          }

          return (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={topic.image || "/placeholder.svg"}
                  alt={topic.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${importanceColors[topic.importance as keyof typeof importanceColors]}`}
                  >
                    {topic.importance}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="text-primary text-xl" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{topic.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">{topic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-card-foreground text-sm">Temas clave:</h4>
                  <div className="flex flex-wrap gap-1">
                    {topic.topics.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-md font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Best Practices Section */}
      <div className="bg-muted rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">⭐ Mejores Prácticas por Categoría</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestPractices.map((category, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4 text-center">{category.category}</h4>
              <ul className="space-y-3">
                {category.practices.map((practice, practiceIndex) => (
                  <li key={practiceIndex} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">🚀 ¿Listo para el siguiente nivel?</h3>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Estos temas avanzados te ayudarán a destacar como desarrollador y crear aplicaciones de calidad profesional
          que los usuarios y empleadores valorarán.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="bg-background/50 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Para Principiantes</h4>
            <p className="text-sm text-muted-foreground">Enfócate primero en seguridad básica y buenas prácticas</p>
          </div>
          <div className="bg-background/50 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2">Para Intermedios</h4>
            <p className="text-sm text-muted-foreground">Profundiza en optimización y accesibilidad</p>
          </div>
        </div>
      </div>
    </section>
  )
}
