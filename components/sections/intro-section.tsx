import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGlobe, FaHistory, FaServer, FaSearch } from "react-icons/fa"

export default function IntroSection() {
  const topics = [
    {
      icon: FaHistory,
      title: "¿Qué es la Web?",
      description:
        "La World Wide Web es un sistema de información interconectado que permite acceder a documentos y recursos a través de internet usando navegadores web.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    },
    {
      icon: FaServer,
      title: "¿Cómo Funciona Internet?",
      description:
        "Internet es una red global de computadoras interconectadas que se comunican usando protocolos estándar como HTTP, TCP/IP y DNS.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    },
    {
      icon: FaSearch,
      title: "Evolución de la Web",
      description:
        "Desde la Web 1.0 estática hasta la Web 3.0 descentralizada, la web ha evolucionado hacia experiencias más interactivas y personalizadas.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 bg-primary/10 rounded-2xl mr-4">
            <FaGlobe className="text-primary text-3xl" />
          </div>
          <h2 className="text-5xl font-bold text-foreground tracking-tight">¿Qué es la Web?</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Descubre qué es la World Wide Web, cómo funciona internet y por qué es importante entender estos conceptos
          fundamentales en el mundo digital actual.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {topics.map((topic, index) => {
          const Icon = topic.icon
          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border border-border/50 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={topic.image || "/placeholder.svg"}
                  alt={topic.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Icon className="text-primary text-lg" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground font-semibold">{topic.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {topic.description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="bg-muted/30 rounded-3xl p-12 border border-border/30">
        <h3 className="text-3xl font-bold text-foreground mb-8 text-center tracking-tight">
          La Importancia de la Web en Nuestra Sociedad
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">Transformación Digital</h4>
            <p className="text-muted-foreground leading-relaxed text-base">
              La web ha revolucionado la forma en que nos comunicamos, trabajamos, aprendemos y nos entretenemos,
              convirtiéndose en la columna vertebral de la sociedad digital.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">Acceso Universal</h4>
            <p className="text-muted-foreground leading-relaxed text-base">
              La web democratiza el acceso a la información y oportunidades, permitiendo que personas de todo el mundo
              compartan conocimientos y se conecten instantáneamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
