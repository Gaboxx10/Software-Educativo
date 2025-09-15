import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

export default function TechnologiesSection() {
  const techCategories = [
    {
      title: "Lenguajes Fundamentales",
      icon: FaHtml5,
      color: "text-orange-500",
      description: "Los pilares básicos de toda aplicación web",
      image: "https://i.pinimg.com/1200x/0d/13/46/0d1346fe637831714d4a0a704c4c48a8.jpg",
      technologies: [
        {
          name: "HTML",
          icon: FaHtml5,
          purpose: "Estructura del contenido",
          color: "bg-orange-100 text-orange-800",
        },
        {
          name: "CSS",
          icon: FaCss3Alt,
          purpose: "Diseño y presentación visual",
          color: "bg-blue-100 text-blue-800",
        },
        {
          name: "JavaScript",
          icon: FaJs,
          purpose: "Interactividad y lógica",
          color: "bg-yellow-100 text-yellow-800",
        },
      ],
    },
    {
      title: "Frameworks y Librerías",
      icon: FaReact,
      color: "text-cyan-500",
      description: "Herramientas que aceleran el desarrollo",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      technologies: [
        {
          name: "React",
          icon: FaReact,
          purpose: "Interfaces de usuario dinámicas",
          color: "bg-cyan-100 text-cyan-800",
        },
        {
          name: "Vue.js",
          icon: FaVuejs,
          purpose: "Desarrollo progresivo",
          color: "bg-green-100 text-green-800",
        },
        {
          name: "Angular",
          icon: FaAngular,
          purpose: "Aplicaciones empresariales",
          color: "bg-red-100 text-red-800",
        },
      ],
    },
    {
      title: "Tecnologías Backend",
      icon: FaNodeJs,
      color: "text-green-500",
      description: "El motor que impulsa las aplicaciones",
      image:
        "https://i.pinimg.com/736x/d2/b6/27/d2b6278888516d742ea799182401e31a.jpg",
      technologies: [
        {
          name: "Node.js",
          icon: FaNodeJs,
          purpose: "JavaScript en el servidor",
          color: "bg-green-100 text-green-800",
        },
        {
          name: "Python",
          icon: FaPython,
          purpose: "Desarrollo rápido y versátil",
          color: "bg-blue-100 text-blue-800",
        },
        {
          name: "Bases de Datos",
          icon: FaDatabase,
          purpose: "Almacenamiento de información",
          color: "bg-purple-100 text-purple-800",
        },
      ],
    },
  ];

  const webEvolution = [
    {
      era: "Web 1.0",
      period: "1990-2000",
      description: "Páginas estáticas con HTML básico",
      characteristics: ["Solo lectura", "Contenido estático", "Diseño simple"],
    },
    {
      era: "Web 2.0",
      period: "2000-2010",
      description: "Interactividad y contenido dinámico",
      characteristics: [
        "Interacción usuario",
        "Redes sociales",
        "AJAX y JavaScript",
      ],
    },
    {
      era: "Web 3.0",
      period: "2010-presente",
      description: "Web semántica e inteligente",
      characteristics: [
        "IA integrada",
        "Personalización",
        "Aplicaciones complejas",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="flex items-center justify-center mb-4">
          <FaCode className="text-primary text-4xl mr-3" />
          <h2 className="text-4xl font-bold text-foreground">
            Tecnologías Web Modernas
          </h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Descubre las tecnologías que impulsan la web moderna y cómo han
          evolucionado para crear experiencias digitales cada vez más
          sofisticadas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {techCategories.map((category, index) => {
          const CategoryIcon = category.icon;
          return (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <CategoryIcon className={`text-2xl ${category.color}`} />
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
              <CardHeader>
                <CardDescription className="text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIndex) => {
                    const TechIcon = tech.icon;
                    return (
                      <div key={techIndex} className="p-3 bg-muted rounded-lg">
                        <div className="flex items-center space-x-3 mb-2">
                          <TechIcon className="text-lg text-muted-foreground" />
                          <span className="font-medium text-card-foreground">
                            {tech.name}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {tech.purpose}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
          Evolución de las Tecnologías Web
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {webEvolution.map((era, index) => (
            <div key={index} className="relative">
              <div className="bg-background rounded-lg p-6 text-center shadow-sm border border-border h-full">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="font-bold text-foreground mb-2 text-lg">
                  {era.era}
                </h4>
                <p className="text-sm text-primary font-medium mb-3">
                  {era.period}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {era.description}
                </p>
                <div className="space-y-1">
                  {era.characteristics.map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="block text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
              {index < webEvolution.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
