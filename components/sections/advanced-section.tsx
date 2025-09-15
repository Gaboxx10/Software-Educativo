import { useState } from "react";
import { FaCode, FaLightbulb } from "react-icons/fa";

export default function MiniCodeEditor() {
  const [html, setHtml] = useState(
    `<h1>¡Bienvenido a tu primera web!</h1>
<p>Esta es una mini web que puedes modificar y experimentar.</p>
<div>
  <p>Prueba agregar más elementos usando los botones de arriba.</p>
  <button>Haz clic aquí</button>
</div>`
  );
  const [css, setCss] = useState(`
body {
  background-color: #1e1e1e;
  color: #f5f5f5;
  font-family: 'Fira Code', monospace;
  padding: 20px;
}
h1 {
  color: #4f46e5;
  text-align: center;
}
p {
  color: #facc15;
}
button {
  background-color: #3b82f6;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}
div {
  border: 1px dashed #ccc;
  padding: 10px;
  margin-top: 10px;
  border-radius: 6px;
`);

  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>${html}</body>
    </html>
  `;

  // Función para insertar etiquetas con contenido y estilo predeterminado
  const addTag = (tag) => {
    let content = "";
    switch (tag) {
      case "h1":
        content = "<h1>Título</h1>";
        break;
      case "p":
        content = "<p>Párrafo de ejemplo</p>";
        break;
      case "button":
        content = "<button>Botón</button>";
        break;
      case "div":
        content = "<div>Contenedor</div>";
        break;
      default:
        content = "";
    }
    setHtml((prev) => prev + "\n" + content);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Encabezado con icono y descripción */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <FaLightbulb className="text-primary text-4xl mr-3" />
          <h2 className="text-4xl font-bold text-foreground">
            ¡Escribe tu primer código!
          </h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Comienza a crear tu primera página web y experimenta cómo el HTML y el
          CSS se combinan para dar vida a tus ideas. ¡Diviértete mientras
          aprendes!
        </p>
      </div>

      {/* Barra de botones */}
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => addTag("h1")}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          &lt;h1&gt;
        </button>
        <button
          onClick={() => addTag("p")}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
        >
          &lt;p&gt;
        </button>
        <button
          onClick={() => addTag("button")}
          className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 cursor-pointer"
        >
          &lt;button&gt;
        </button>
        <button
          onClick={() => addTag("div")}
          className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 cursor-pointer"
        >
          &lt;div&gt;
        </button>
      </div>

      {/* Editor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-muted-foreground">
            HTML
          </label>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full h-40 p-2 border border-border rounded-lg font-mono text-sm text-foreground bg-gray-900 text-white resize-none font-mono"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-muted-foreground">
            CSS
          </label>
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            className="w-full h-40 p-2 border border-border rounded-lg font-mono text-sm text-foreground bg-gray-900 text-white resize-none font-mono"
          />
        </div>
      </div>

      {/* Preview */}
      <div className="mt-4 border border-border rounded-lg overflow-hidden">
        <iframe
          srcDoc={srcDoc}
          title="preview"
          sandbox="allow-scripts"
          frameBorder="0"
          className="w-full h-96"
        />
      </div>
    </section>
  );
}
