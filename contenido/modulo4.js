const moduleData = {
  "module_number": 4,
  "title": "Sistemas Multimodales y Generación de Contenido Visual",
  "subtitle": "De la idea al impacto visual: utilizando la IA para generar imágenes, marcas y presentaciones de nivel profesional.",
  "sections": [
    {
      "title": "1. ¿Qué es un Sistema Multimodal?",
      "content": [
        {
          "type": "paragraph",
          "text": "Hasta ahora, nos hemos centrado principalmente en la interacción con texto. Los sistemas multimodales representan la siguiente frontera de la IA: modelos capaces de comprender y generar información a través de múltiples ‘modalidades’ o tipos de datos simultáneamente. Un modelo multimodal puede, por ejemplo, ‘ver’ una imagen y describirla en texto, o leer un texto y generar una imagen, un audio o incluso un video."
        },
        {
          "type": "card",
          "title": "La Tecnología Clave: Modelos de Difusión",
          "text": "La explosión en la calidad de la generación de imágenes se debe en gran parte a los **Modelos de Difusión**. De forma intuitiva, estos modelos se entrenan en un proceso de dos pasos: 1) Añaden progresivamente ‘ruido’ (distorsión aleatoria) a una imagen hasta que es irreconocible. 2) Aprenden a revertir ese proceso, es decir, a ‘limpiar’ el ruido para reconstruir la imagen original. Una vez entrenado, el modelo puede partir de puro ruido y, guiado por un prompt de texto, ‘esculpir’ una imagen completamente nueva y coherente. Herramientas como DALL-E 3, Midjourney y Stable Diffusion se basan en esta poderosa técnica."
        }
      ]
    },
    {
      "title": "2. Generación de Imágenes: El Arte del ‘Prompting’ Visual",
      "content": [
        {
          "type": "paragraph",
          "text": "Escribir un prompt para una imagen es diferente a hacerlo para texto. Es más parecido a darle instrucciones a un director de fotografía. Los componentes clave de un prompt de imagen eficaz son:"
        },
        {
          "type": "card",
          "title": "Anatomía de un Prompt de Imagen",
          "items": [
            "<b>Sujeto (Subject):</b> ¿Qué es lo principal en la imagen? Sé descriptivo. <i>(Ej: ‘Un robot industrial de seis ejes soldando una pieza de titanio con precisión.’)</i>",
            "<b>Estilo (Style):</b> ¿Cuál es la estética? <i>(Ej: ‘Fotorrealista’, ‘Arte conceptual cinemático’, ‘Dibujo de patente estilo blueprint’, ‘Minimalista isométrico’, ‘Estilo acuarela’.)</i>",
            "<b>Iluminación (Lighting):</b> ¿Cómo está iluminada la escena? <i>(Ej: ‘Iluminación dramática de estudio’, ‘Luz suave de atardecer’, ‘Luz de neón cyberpunk’.)</i>",
            "<b>Composición y Cámara:</b> ¿Desde qué ángulo se ve? <i>(Ej: ‘Primer plano extremo (extreme close-up)’, ‘Vista de gran angular (wide-angle shot)’, ‘Desde arriba (top-down view)’.)</i>",
            "<b>Parámetros Adicionales:</b> Muchas herramientas permiten añadir parámetros técnicos como la relación de aspecto (`--ar 16:9`) o el nivel de estilización (`--stylize 750`)."
          ]
        }
      ]
    },
    {
      "title": "3. Caso Práctico: Construcción de una Identidad de Marca con IA",
      "content": [
        {
          "type": "paragraph",
          "text": "La IA generativa es una herramienta increíblemente potente para el branding, permitiendo a una startup o a un profesional independiente crear una identidad visual completa en cuestión de horas, no semanas."
        },
        {
          "type": "card",
          "title": "Escenario: Creando la Marca ‘TerraForma Engineering’",
          "text": "<b>Concepto:</b> Una consultora de ingeniería ambiental especializada en soluciones sostenibles y tecnología verde.",
          "items": [
            "<b>Paso 1: Generación del Logo.</b> Se busca un logo que combine naturaleza y tecnología. Un buen prompt podría ser: <br><i>‘Logo minimalista y moderno para una empresa de ingeniería ambiental. Una hoja de árbol estilizada cuyas venas se transforman en un circuito impreso. Paleta de colores verde esmeralda y gris técnico. Fondo blanco, estilo vector plano.’</i>",
            "<b>Paso 2: Creación de Paleta de Colores y Mood Board.</b> Se le puede pedir a la IA que genere imágenes que definan el ‘feeling’ de la marca: <br><i>‘Mood board de inspiración para una marca de tecnología sostenible. Imágenes de arquitectura moderna integrada con la naturaleza, turbinas eólicas en un campo verde, texturas de madera reciclada y metal pulido. Paleta de colores tierra y verdes con acentos de azul tecnológico.’</i>",
            "<b>Paso 3: Iconografía.</b> Generar un set de iconos consistentes para la web o las presentaciones: <br><i>‘Set de 5 iconos de línea, estilo minimalista, sobre un fondo blanco. Los iconos deben representar: una gota de agua, un panel solar, una hoja, un engranaje y un gráfico de crecimiento.’</i>"
          ]
        }
      ]
    },
    {
      "title": "4. Creación de Presentaciones Innovadoras con Gamma.app",
      "content": [
        {
          "type": "paragraph",
          "text": "Herramientas como <b>Gamma.app</b> llevan la generación de contenido al siguiente nivel, creando no solo texto o imágenes, sino presentaciones y documentos completos a partir de un simple prompt."
        },
        {
          "type": "card",
          "title": "¿Cómo funciona?",
          "text": "En lugar de empezar con una diapositiva en blanco, le das a Gamma una instrucción inicial. La IA primero genera un esquema de la presentación, que puedes editar y aprobar. Una vez aprobado el esquema, Gamma genera todas las diapositivas, incluyendo texto, diseño y buscando imágenes de stock relevantes. El resultado es una presentación completa y bien diseñada en menos de un minuto, que luego puedes refinar y personalizar."
        }
      ]
    },
    {
      "title": "5. Laboratorio Práctico de Creación Visual",
      "content": [
        {
          "type": "card",
          "title": "Ejercicio 1: Generación de un Concepto de Producto",
          "items": [
            "<b>Objetivo:</b> Usar un generador de texto-a-imagen para visualizar un producto de ingeniería.",
            "<b>Herramienta Recomendada:</b> <a href='https://copilot.microsoft.com' target='_blank'>Microsoft Copilot</a> (que usa DALL-E 3 de forma gratuita).",
            "<b>Tu Tarea:</b> Escribe un prompt para generar una imagen de un ‘dron de reparto autónomo para zonas urbanas densas’. Sé específico en tu prompt. Considera los siguientes elementos: ¿Cómo es su forma para ser aerodinámico y seguro? ¿Tiene luces? ¿De qué material parece estar hecho? ¿En qué entorno está volando (ciudad futurista, de día, de noche)? Experimenta al menos con 3 prompts diferentes para ver cómo cambian los resultados."
          ]
        },
        {
          "type": "card",
          "title": "Ejercicio 2: Creación de una Presentación en 60 Segundos",
          "items": [
            "<b>Objetivo:</b> Utilizar una herramienta de IA para generar una presentación técnica completa.",
            "<b>Herramienta:</b> <a href='https://gamma.app' target='_blank'>Gamma.app</a>.",
            "<b>Tu Tarea:</b>",
            "1. Regístrate y entra a Gamma.",
            "2. Elige la opción ‘Generar con IA’ y luego ‘Presentación’.",
            "3. Escribe el siguiente tema en el prompt: <b>‘Una presentación para ingenieros sobre los fundamentos y aplicaciones del Hormigón Reforzado con Fibra de Vidrio (GFRP).’</b>",
            "4. Revisa y aprueba el esquema que te propone la IA.",
            "5. Observa cómo se genera la presentación completa. Una vez generada, explora las opciones de edición para cambiar el tema, el diseño de una tarjeta o reescribir un párrafo con IA."
          ]
        }
      ]
    },
    {
      "title": "6. Bibliografía y Herramientas",
      "content": [
        {
          "type": "bibliography",
          "items": [
            {
              "title": "Midjourney",
              "author": "Uno de los generadores de imágenes de mayor calidad y más artísticos, accesible a través de Discord. <a href='https://www.midjourney.com/' target='_blank'>Visitar</a>"
            },
            {
              "title": "DALL-E 3 (vía Microsoft Copilot)",
              "author": "El modelo de generación de imágenes de OpenAI, excelente en seguir prompts complejos y generar texto dentro de las imágenes. <a href='https://copilot.microsoft.com/' target='_blank'>Probar</a>"
            },
            {
              "title": "Gamma.app",
              "author": "La herramienta de generación de presentaciones y documentos utilizada en el laboratorio. <a href='https://gamma.app/' target='_blank'>Visitar</a>"
            },
            {
              "title": "RunwayML Gen-2",
              "author": "Uno de los modelos de texto-a-video más accesibles y potentes del mercado actual. <a href='https://runwayml.com/' target='_blank'>Explorar</a>"
            }
          ]
        }
      ]
    },
    {
      "title": "Contenido Extra (Video)",
      "content": [
        {
          "type": "paragraph",
          "text": "Un tutorial sobre cómo generar imágenes y presentaciones con IA."
        },
        {
          "type": "video",
          "youtubeId": "s_g-g_q_c9s"
        }
      ]
    },
    {
      "title": "Galería del Módulo",
      "content": [
        {
          "type": "gallery",
          "images": [
            {
              "src": "imagenes/1.jpg",
              "alt": "Imagen generada por IA 1",
              "caption": "Logo para una empresa de consultoría ambiental."
            },
            {
              "src": "imagenes/2.jpg",
              "alt": "Imagen generada por IA 2",
              "caption": "Concepto de un dron de reparto autónomo."
            },
            {
              "src": "imagenes/3.jpg",
              "alt": "Imagen generada por IA 3",
              "caption": "Diapositiva de una presentación generada con Gamma.app."
            }
          ]
        }
      ]
    }
  ]
}
