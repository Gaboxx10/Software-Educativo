import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaCode, FaGitAlt, FaTerminal } from "react-icons/fa"

export default function ToolsSection() {
  const webConcepts = [
    {
      icon: FaCode,
      title: "¿Qué es el Desarrollo Web?",
      description:
        "El desarrollo web es el proceso de crear y mantener sitios web y aplicaciones web que funcionan en internet.",
      image: "https://i.pinimg.com/736x/d2/b6/27/d2b6278888516d742ea799182401e31a.jpg",
      details: [
        "Creación de interfaces",
        "Programación de funcionalidades",
        "Gestión de bases de datos",
        "Optimización de rendimiento",
      ],
    },
    {
      icon: FaGitAlt,
      title: "Frontend vs Backend",
      description:
        "El frontend es lo que ven los usuarios, mientras que el backend maneja la lógica del servidor y las bases de datos.",
      image: "https://i.pinimg.com/1200x/82/ca/89/82ca89cbb1536365d658abf414a098f4.jpg",
      details: [
        "Frontend: HTML, CSS, JavaScript",
        "Backend: Servidores, APIs, Bases de datos",
        "Comunicación entre ambos",
        "Experiencia de usuario completa",
      ],
    },
    {
      icon: FaTerminal,
      title: "Tecnologías Web Modernas",
      description:
        "Las tecnologías web evolucionan constantemente para crear experiencias más rápidas, seguras e interactivas.",
      image: "https://i.pinimg.com/1200x/0d/fa/e6/0dfae65f15d971b19689cd1288adb4e5.jpg",
      details: [
        "Frameworks modernos",
        "APIs y servicios web",
        "Aplicaciones móviles web",
        "Inteligencia artificial web",
      ],
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="flex items-center justify-center mb-4">
          <FaCode className="text-primary text-4xl mr-3" />
          <h2 className="text-4xl font-bold text-foreground">¿Qué es el Desarrollo Web?</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explora el fascinante mundo del desarrollo web, sus diferentes áreas y cómo las tecnologías web transforman
          ideas en experiencias digitales interactivas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {webConcepts.map((concept, index) => {
          const Icon = concept.icon
          return (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={concept.image || "/placeholder.svg"}
                  alt={concept.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="text-primary text-xl" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{concept.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">{concept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-card-foreground text-sm">Aspectos clave:</h4>
                  <div className="flex flex-wrap gap-2">
                    {concept.details.map((detail, detailIndex) => (
                      <span
                        key={detailIndex}
                        className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-md font-medium"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">¿Por qué elegir el Desarrollo Web?</h3>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            El desarrollo web ofrece oportunidades únicas en el mundo digital actual:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-background/50 rounded-lg p-4">
              <FaCode className="text-primary text-2xl mx-auto mb-2" />
              <h4 className="font-semibold text-foreground">Creatividad + Lógica</h4>
              <p className="text-sm text-muted-foreground">Combina diseño visual con programación</p>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <FaGitAlt className="text-primary text-2xl mx-auto mb-2" />
              <h4 className="font-semibold text-foreground">Alta Demanda</h4>
              <p className="text-sm text-muted-foreground">Mercado laboral en constante crecimiento</p>
            </div>
            <div className="bg-background/50 rounded-lg p-4">
              <FaTerminal className="text-primary text-2xl mx-auto mb-2" />
              <h4 className="font-semibold text-foreground">Impacto Global</h4>
              <p className="text-sm text-muted-foreground">Crea soluciones que llegan a millones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
