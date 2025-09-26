const moduleData = {
  "module_number": 2,
  "title": "Metodologías de Comunicación con Sistemas de IA",
  "subtitle": "Deje de ‘chatear’ con la IA y empiece a ‘darle instrucciones’ con la precisión y rigurosidad de un ingeniero.",
  "sections": [
    {
      "title": "1. El Prompt como Especificación Técnica: El Paradigma del Ingeniero",
      "content": [
        {
          "type": "paragraph",
          "text": "En ingeniería, la precisión es fundamental. Un comando ambiguo en un sistema CNC, un error en una línea de código de un PLC o una especificación incorrecta en un plano pueden tener consecuencias significativas. Debemos abordar la comunicación con los Grandes Modelos de Lenguaje (LLMs) con la misma mentalidad. Un prompt no es una pregunta casual, es una **especificación de requisitos** para un procesar de lenguaje increíblemente potente pero literal."
        },
        {
          "type": "card",
          "title": "¿Qué es un PDR (Prompt Design Recipe)?",
          "text": "Para estandarizar, reutilizar y versionar nuestro trabajo, introducimos el concepto de **PDR (Prompt Design Recipe)** o ‘Receta de Diseño de Prompts’. Un PDR es un documento formal que define un prompt con la misma rigurosidad con la que se documenta una función en una librería de software.",
          "items": [
            "<b>Estandarización:</b> Asegura que todo un equipo construya prompts bajo una misma estructura probada.",
            "<b>Reusabilidad:</b> Permite crear una librería de ‘soluciones’ a problemas de ingeniería comunes.",
            "<b>Control de Versiones:</b> Al ser un documento de texto (como Markdown), los PDRs pueden y deben ser gestionados con Git, permitiendo un seguimiento de cambios, mejoras y colaboración.",
            "<b>Claridad y Diseño:</b> Obliga al ‘ingeniero de prompts’ a pensar en todos los componentes de una instrucción eficaz antes de escribirla."
          ]
        }
      ]
    },
    {
      "title": "2. El Framework C.R.A.F.T.: Anatomía de un Prompt de Precisión",
      "content": [
        {
          "type": "paragraph",
          "text": "El corazón de un PDR es la instrucción. Para construirla con la máxima eficacia, usamos el sistema **C.R.A.F.T.**, un acrónimo mnemotécnico que nos guía para incluir toda la información que el LLM necesita para entregar un resultado de alta calidad."
        },
        {
          "type": "card",
          "title": "C - Context (Contexto)",
          "text": "Proporciona el trasfondo técnico, los datos y las restricciones. Es el `GIVEN` en un problema de ingeniería. Ejemplos:<ul><li><i>‘Analiza el siguiente log de errores de un servidor Apache...’</i></li><li><i>‘Dados los siguientes datos de un ensayo de tracción en formato CSV (columnas: Esfuerzo, Deformación)...’</i></li><li><i>‘Basado en el estándar de la industria ASME Y14.5 para tolerancias geométricas...’</i></li></ul>"
        },
        {
          "type": "card",
          "title": "R - Role (Rol)",
          "text": "Asigna una especialidad y una jerarquía al LLM. Define ‘quién’ debe ser el que responde, lo que ajusta su base de conocimiento y su tono. Ejemplos:<ul><li><i>‘Actúa como un ingeniero de software senior con 15 años de experiencia en C++ y optimización de algoritmos.’</i></li><li><i>‘Asume el rol de un experto en análisis de elementos finitos (FEA) con experiencia en el software ANSYS.’</i></li><li><i>‘Eres un redactor técnico encargado de crear la documentación para una API RESTful.’</i></li></ul>"
        },
        {
          "type": 'card',
          "title": "A - Action (Acción)",
          "text": "El verbo imperativo que define la tarea principal. Debe ser claro, directo y específico. Evita verbos ambiguos como ‘ayúdame’ o ‘dame’. Ejemplos:<ul><li><i>‘<b>Genera</b> un script de Python que...’</i></li><li><i>‘<b>Analiza</b> este código y devuelve una tabla con su complejidad ciclomática.’</i></li><li><i>‘<b>Refactoriza</b> la siguiente función para mejorar su legibilidad y añadir manejo de excepciones.’</i></li><li><i>‘<b>Crea</b> una tabla Markdown comparando las especificaciones de estos tres materiales.’</i></li></ul>"
        },
        {
          "type": "card",
          "title": "F - Format (Formato)",
          "text": "La especificación exacta del formato de salida. Es crucial para la automatización y la integración con otras herramientas. Sé explícito. Ejemplos:<ul><li><i>‘La salida debe ser únicamente un objeto JSON válido, sin texto introductorio ni comentarios.’</i></li><li><i>‘Presenta los resultados en una tabla Markdown con las columnas: Parámetro, Valor y Unidades.’</i></li><li><i>‘Genera únicamente el código Python. No incluyas explicaciones.’</i></li></ul>"
        },
        {
          "type": "card",
          "title": "T - Target (Objetivo/Audiencia)",
          "text": "Define el objetivo final o la audiencia de la respuesta. Ayuda al modelo a ajustar el nivel de detalle, la complejidad y el tono. Ejemplos:<ul><li><i>‘...el objetivo es crear un informe ejecutivo para un gerente no técnico.’</i></li><li><i>‘...la documentación generada será utilizada por otros desarrolladores senior del equipo.’</i></li><li><i>‘...el script debe ser lo más simple y comentado posible para que un estudiante pueda entenderlo.’</i></li></ul>"
        }
      ]
    },
    {
        "title": "3. Laboratorio Práctico: Aplicando C.R.A.F.T.",
        "content": [
            {
                "type": "card",
                "title": "Ejercicio 1: Diseño de un PDR para Comunicación Técnica",
                "items": [
                    "<b>Objetivo:</b> Crear un PDR completo para generar un correo electrónico formal y técnico.",
                    "<b>Escenario:</b> Necesitas solicitar a un proveedor (ej. 'ACME Sensors Corp.') la ficha técnica (datasheet), el precio por volumen (1000 unidades) y el tiempo de entrega para un componente específico: un sensor de presión modelo `SEN-P-45b`.",
                    "<b>Tu Tarea:</b>",
                    "1. Crea un documento de texto y copia la plantilla de PDR (puedes encontrarla en la sección de Recursos de este módulo).",
                    "2. Rellena todas las secciones del PDR: `ID_Prompt`, `Objetivo`, `Contexto_Requerido` (las variables serán: nombre del proveedor, modelo del componente, cantidad).",
                    "3. Escribe la `Instrucción_CRAFT` completa, asegurándote de definir el Rol (ej. 'ingeniero de compras'), la Acción ('redacta un correo'), el Formato ('Asunto: [texto], Cuerpo: [texto]') y el Target ('el correo debe ser profesional y conciso')."
                ]
            },
            {
                "type": "card",
                "title": "Ejercicio 2: Generación de Código con C.R.A.F.T.",
                "items": [
                    "<b>Objetivo:</b> Escribir un prompt de alta precisión para generar una función de cálculo de ingeniería.",
                    "<b>Escenario:</b> Necesitas una función en Python para calcular el esfuerzo de flexión (bending stress) en el punto medio de una viga simplemente apoyada con una carga puntual en el centro.",
                    "<b>Fórmula Clave:</b> El esfuerzo (σ) es `(M*c)/I`, donde M es el momento máximo, c es la distancia desde el eje neutro y I es el momento de inercia.",
                    "<b>Tu Tarea:</b>",
                    "Escribe un prompt usando C.R.A.F.T. que le pida a un LLM generar esta función. **Requisitos para el prompt**:",
                    "- **Rol:** El LLM debe actuar como un ingeniero mecánico y programador de Python.",
                    "- **Acción:** Debe generar una única función de Python llamada `calcular_esfuerzo_viga`.",
                    "- **Contexto:** La función debe aceptar como argumentos: la carga `P` (en Newtons), la longitud de la viga `L` (en metros), y las dimensiones de la sección transversal (para calcular `c` e `I`).",
                    "- **Formato:** La función debe incluir un docstring claro explicando qué hace, sus parámetros y lo que retorna. Debe incluir manejo de errores para evitar divisiones por cero. El prompt debe pedir que no se incluya nada más que el código de la función."
                ]
            }
        ]
    },
    {
        "title": "4. Avanzando: Construcción de Agentes Personalizados (GPTs)",
        "content": [
            {
                "type": "paragraph",
                "text": "Un agente personalizado (o ‘GPT’ en la plataforma de OpenAI) es una versión de un LLM que ha sido pre-configurada para una tarea muy específica. En lugar de empezar cada conversación con un prompt C.R.A.F.T. desde cero, puedes encapsular esas instrucciones en un agente reutilizable."
            },
            {
                "type": "card",
                "title": "Caso Práctico: Agente ‘Asistente de Normativa’",
                "text": "Imagina que tu equipo necesita consultar frecuentemente el Código Eléctrico Nacional. Podrías crear un agente para esta tarea:",
                "items": [
                    "<b>Nombre del Agente:</b> Asistente de Normativa Eléctrica (NEC)",
                    "<b>Instrucción Base (Contexto, Rol, Acción):</b> <i>‘Actúas como un ingeniero eléctrico senior, experto en el Código Eléctrico Nacional. Tu única función es responder preguntas sobre artículos, secciones y tablas del código. Siempre que sea posible, cita el número de artículo en tu respuesta. Si no sabes la respuesta, indícalo claramente.’</i>",
                    "<b>Base de Conocimiento (Knowledge):</b> La plataforma te permite subir archivos. Aquí subirías el PDF completo del Código Eléctrico Nacional. Esto enfoca al agente para que base sus respuestas principalmente en este documento, reduciendo la probabilidad de que ‘alucine’ o invente información.",
                    "<b>Ejemplos de Interacción:</b> Una vez creado, cualquier miembro del equipo puede preguntarle directamente: <i>‘¿Cuál es el calibre de conductor de cobre requerido para un circuito de 30A que alimenta una carga continua?’</i> o <i>‘¿La sección 250.52 permite el uso de una tubería de agua como electrodo de puesta a tierra?’</i>"
                ]
            }
        ]
    },
    {
      "title": "5. Bibliografía y Recursos para Profundizar",
      "content": [
        {
          "type": "paragraph",
          "text": "Para dominar el arte y la ciencia del Prompt Engineering, se recomienda la lectura y exploración de los siguientes recursos:"
        },
        {
          "type": "bibliography",
          "items": [
            {
              "title": "OpenAI's Prompt Engineering Guide",
              "author": "Una guía oficial de OpenAI con estrategias, tácticas y mejores prácticas para obtener los mejores resultados de sus modelos. <a href='https://platform.openai.com/docs/guides/prompt-engineering' target='_blank'>Visitar</a>"
            },
            {
              "title": "Google's Introduction to Prompt Design",
              "author": "Recursos de Google que cubren los fundamentos del diseño de prompts, incluyendo técnicas como el 'few-shot prompting'. <a href='https://cloud.google.com/vertex-ai/docs/generative-ai/design/introduction-prompt-design' target='_blank'>Visitar</a>"
            },
            {
              "title": "Introduction to Custom GPTs",
              "author": "La documentación oficial de OpenAI sobre cómo crear, configurar y compartir tus propios agentes personalizados (GPTs). <a href='https://platform.openai.com/docs/guides/gpts/introduction-to-gpts' target='_blank'>Visitar</a>"
            },
            {
              "title": "The Art of Prompt Engineering (Microsoft)",
              "author": "Un artículo de investigación de Microsoft que explora técnicas avanzadas y la teoría detrás de la interacción efectiva con LLMs. <a href='https://www.microsoft.com/en-us/research/blog/the-art-of-prompt-engineering-a-new-era-of-ai-empowerment/' target='_blank'>Visitar</a>"
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
          "text": "Una demostración práctica de las técnicas de Prompt Engineering."
        },
        {
          "type": "video",
          "youtubeId": "d_q_d0D2G3w"
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
              "src": "imagenes/4.jpg",
              "alt": "Imagen conceptual de Prompt Engineering 1",
              "caption": "Diagrama del framework C.R.A.F.T."
            },
            {
              "src": "imagenes/5.jpg",
              "alt": "Imagen conceptual de Prompt Engineering 2",
              "caption": "Ejemplo de un PDR bien estructurado."
            },
            {
              "src": "imagenes/6.jpg",
              "alt": "Imagen conceptual de Prompt Engineering 3",
              "caption": "Construcción de un agente personalizado."
            }
          ]
        }
      ]
    }
  ]
}
