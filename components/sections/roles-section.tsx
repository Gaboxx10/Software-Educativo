import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FaUsers, FaLaptopCode, FaServer, FaLayerGroup, FaPaintBrush, FaCogs } from "react-icons/fa"

export default function RolesSection() {
  const webAreas = [
    {
      icon: FaLaptopCode,
      title: "Desarrollo Frontend",
      description:
        "Se enfoca en crear la interfaz visual y la experiencia del usuario que interactúa directamente con el sitio web.",
      image: "https://images.pexels.com/photos/29445973/pexels-photo-29445973.jpeg",
      characteristics: ["Interfaz visual", "Experiencia de usuario", "Interactividad", "Responsive design"],
      importance: "Es la cara visible de cualquier aplicación web",
    },
    {
      icon: FaServer,
      title: "Desarrollo Backend",
      description:
        "Maneja la lógica del servidor, bases de datos y todo lo que ocurre 'detrás de escena' en una aplicación web.",
      image: "https://images.pexels.com/photos/1624895/pexels-photo-1624895.jpeg",
      characteristics: ["Lógica de negocio", "Bases de datos", "APIs", "Seguridad"],
      importance: "Es el cerebro que procesa y almacena información",
    },
    {
      icon: FaLayerGroup,
      title: "Desarrollo Full Stack",
      description:
        "Combina conocimientos de frontend y backend para crear aplicaciones web completas de principio a fin.",
      image: "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg",
      characteristics: ["Visión completa", "Versatilidad", "Arquitectura", "Integración"],
      importance: "Permite entender todo el ecosistema web",
    },
    {
      icon: FaPaintBrush,
      title: "Diseño UX/UI",
      description:
        "Se centra en crear experiencias digitales intuitivas, atractivas y centradas en las necesidades del usuario.",
      image: "https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg",
      characteristics: ["Experiencia de usuario", "Interfaz visual", "Usabilidad", "Investigación"],
      importance: "Garantiza que la tecnología sea accesible y útil",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 animate-fade-in-up">
        <div className="flex items-center justify-center mb-4">
          <FaUsers className="text-primary text-4xl mr-3" />
          <h2 className="text-4xl font-bold text-foreground">Áreas del Desarrollo Web</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Conoce las diferentes especialidades que existen en el desarrollo web y cómo cada una contribuye a crear
          experiencias digitales completas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {webAreas.map((area, index) => {
          const Icon = area.icon
          return (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={area.image || "/placeholder.svg"}
                  alt={area.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="text-primary text-xl" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{area.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">{area.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-card-foreground text-sm mb-2">Características principales:</h4>
                  <div className="flex flex-wrap gap-1">
                    {area.characteristics.map((characteristic, charIndex) => (
                      <span
                        key={charIndex}
                        className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-md font-medium"
                      >
                        {characteristic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Importancia
                  </h5>
                  <p className="text-sm text-card-foreground">{area.importance}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-16 bg-muted rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          ¿Por qué especializarse en Desarrollo Web?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <FaLaptopCode className="text-primary text-2xl" />
            </div>
            <h4 className="text-lg font-semibold text-foreground">Creatividad Digital</h4>
            <p className="text-muted-foreground text-sm">
              Transforma ideas en experiencias digitales interactivas que millones de personas pueden usar.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <FaCogs className="text-primary text-2xl" />
            </div>
            <h4 className="text-lg font-semibold text-foreground">Resolución de Problemas</h4>
            <p className="text-muted-foreground text-sm">
              Cada proyecto presenta desafíos únicos que requieren pensamiento lógico y soluciones creativas.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <FaUsers className="text-primary text-2xl" />
            </div>
            <h4 className="text-lg font-semibold text-foreground">Impacto Social</h4>
            <p className="text-muted-foreground text-sm">
              Crea herramientas que mejoran la vida de las personas y conectan comunidades globalmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
