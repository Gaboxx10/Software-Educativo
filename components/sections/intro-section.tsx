import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGlobe, FaHistory, FaServer, FaSearch } from "react-icons/fa";

export default function IntroSection() {
  const topics = [
    {
      icon: FaHistory,
      title: "¿Qué es la Web?",
      description:
        "La Web es un sistema de información global que, a través de internet, permite acceder y compartir documentos y recursos (como páginas, imágenes, videos y aplicaciones) conectados entre sí mediante enlaces y visualizados en navegadores web.",
      image:
        "https://i.pinimg.com/736x/4f/fe/63/4ffe63c58ef9f932e430b0146673c250.jpg",
    },
    {
      icon: FaServer,
      title: "¿Cómo Funciona Internet?",
      description:
        "Internet es una red mundial de computadoras interconectadas que utilizan un conjunto común de protocolos (TCP/IP) para comunicarse y compartir información, permitiendo el acceso a servicios como la web, el correo electrónico, las redes sociales, el streaming y muchas otras aplicaciones.",
      image:
        "https://i.pinimg.com/1200x/3d/d5/94/3dd5947df9e8664ccaced6f31ffd7f1f.jpg",
    },
    {
      icon: FaSearch,
      title: "Evolución de la Web",
      description:
        "La evolución de la web se refiere a las distintas etapas de desarrollo que ha tenido Internet desde su creación, pasando de páginas estáticas de solo lectura (Web 1.0), a una web interactiva y social (Web 2.0), luego a una web más inteligente y descentralizada (Web 3.0) y, en un futuro, hacia una web totalmente integrada con la inteligencia artificial y el mundo físico (Web 4.0).",
      image:
        "https://i.pinimg.com/1200x/7a/58/5d/7a585dec577faba0f42a8ef34870f6f3.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 bg-primary/10 rounded-2xl mr-4">
            <FaGlobe className="text-primary text-3xl" />
          </div>
          <h2 className="text-5xl font-bold text-foreground tracking-tight">
            ¿Qué es la Web?
          </h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Descubre qué es la World Wide Web, cómo funciona internet y por qué es
          importante entender estos conceptos fundamentales en el mundo digital
          actual.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border border-border/50 overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-t-lg">
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
                  <CardTitle className="text-xl text-card-foreground font-semibold">
                    {topic.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {topic.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-muted/30 rounded-3xl p-12 border border-border/30">
        <h3 className="text-3xl font-bold text-foreground mb-8 text-center tracking-tight">
          La Importancia de la Web en Nuestra Sociedad
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">
              Transformación Digital
            </h4>
            <p className="text-muted-foreground leading-relaxed text-base">
              La web ha revolucionado la forma en que nos comunicamos,
              trabajamos, aprendemos y nos entretenemos, convirtiéndose en la
              columna vertebral de la sociedad digital.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">
              Acceso Universal
            </h4>
            <p className="text-muted-foreground leading-relaxed text-base">
              La web democratiza el acceso a la información y oportunidades,
              permitiendo que personas de todo el mundo compartan conocimientos
              y se conecten instantáneamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
