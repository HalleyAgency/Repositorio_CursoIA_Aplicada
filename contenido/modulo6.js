const moduleData = {
  "module_number": 6,
  "title": "Evaluación y Socialización de Experiencias",
  "subtitle": "Del conocimiento a la acción: aplicando tus nuevas habilidades en un proyecto final y aprendiendo a compartir tus innovaciones.",
  "sections": [
    {
      "title": "1. El Proyecto Final: Integrando Todo lo Aprendido",
      "content": [
        {
          "type": "paragraph",
          "text": "Este módulo final es la culminación de tu aprendizaje. El objetivo no es realizar un examen, sino aplicar las metodologías y herramientas que hemos visto para crear un activo de IA tangible, valioso y relevante para tu campo de la ingeniería. El proyecto final es tu oportunidad para resolver un problema real de tu entorno de trabajo y empezar a construir tu portafolio de soluciones de IA."
        },
        {
          "type": "card",
          "title": "Alcance y Objetivos del Proyecto",
          "items": [
            "<b>Resolución de un Problema Real:</b> El proyecto debe abordar un problema o una ineficiencia existente en tu trabajo o en un área de tu interés.",
            "<b>Aplicación de Metodologías:</b> Deberás utilizar el enfoque de PDR (Prompt Design Recipe) y el framework C.R.A.F.T. para diseñar la solución.",
            "<b>Generación de un Activo con IA:</b> El núcleo del proyecto debe ser un ‘activo’ generado por una IA (un script, una presentación, un análisis de datos, un conjunto de diseños, etc.).",
            "<b>Documentación Clara:</b> El proyecto debe estar documentado de forma simple y efectiva para que otros puedan entenderlo y utilizarlo."
          ]
        }
      ]
    },
    {
      "title": "2. Propuestas de Proyectos Finales para Ingenieros",
      "content": [
        {
          "type": "paragraph",
          "text": "A continuación, se presentan varias ideas de proyectos adaptadas a diferentes especialidades de la ingeniería. Utilízalas como inspiración para tu propio proyecto."
        },
        {
          "type": "card",
          "title": "Para Ingeniería Mecánica/Materiales",
          "text": "<b>Proyecto:</b> Crear un agente personalizado (GPT) llamado ‘Asistente de Materiales’.<br><b>Detalles:</b> Entrena al agente subiendo las fichas técnicas (datasheets) en PDF de 5 a 10 materiales comunes en tu industria (ej. Acero 1020, Aluminio 6061, Titanio Grado 5, PEEK, etc.). El objetivo es que el agente pueda responder preguntas como: <i>‘Genera una tabla comparando la resistencia a la tracción, el módulo de Young y la densidad del Acero 1020 y el Aluminio 6061’</i> o <i>‘¿Cuál de estos materiales tiene la mejor resistencia a la corrosión en un ambiente salino?’</i>."
        },
        {
          "type": "card",
          "title": "Para Ingeniería de Software/Sistemas",
          "text": "<b>Proyecto:</b> Herramienta de Documentación Automática.<br><b>Detalles:</b> Desarrolla un PDR y un prompt para una herramienta de línea de comandos (CLI) que reciba como entrada un archivo de código fuente en Python. La IA debe analizar el código, identificar todas las funciones que no tengan un ‘docstring’ y generar los docstrings faltantes siguiendo un formato estándar (ej. el formato de Google o el de Sphinx)."
        },
        {
          "type": "card",
          "title": "Para Ingeniería Civil/Arquitectura",
          "text": "<b>Proyecto:</b> Paquete de Presentación de Proyecto.<br><b>Detalles:</b> Utiliza Gamma.app para generar una presentación técnica completa sobre un método constructivo innovador (ej. ‘Construcción con Cross-Laminated Timber (CLT)’). Luego, utiliza un generador de imágenes (Midjourney, DALL-E 3) para crear una serie de imágenes conceptuales fotorrealistas del proyecto (ej. <i>‘Render arquitectónico de una casa moderna de dos pisos construida con CLT, en un entorno boscoso, iluminación de atardecer, estilo cinemático’</i>) para ser añadidas a la presentación."
        },
        {
          "type": "card",
          "title": "Para Ingeniería Industrial/Procesos",
          "text": "<b>Proyecto:</b> Diseño de un Flujo de Automatización de Reportes.<br><b>Detalles:</b> Diseña (de forma conceptual, con un diagrama de flujo) un sistema en n8n o Make que automatice la creación de informes de producción. El flujo debe: 1) Dispararse cada viernes a las 5 PM. 2) Leer los datos de producción de una hoja de Google Sheets. 3) Enviar esos datos a una IA con un prompt que le pida generar un resumen ejecutivo de una página, destacando los KPIs clave, las desviaciones y las posibles causas. 4) Enviar el resumen generado por correo electrónico a una lista de gerentes."
        }
      ]
    },
    {
      "title": "3. Documentación Simple, Fácil e Interactiva",
      "content": [
        {
          "type": "paragraph",
          "text": "Un proyecto sin documentación es una solución a medias. La documentación no solo ayuda a otros a entender tu trabajo, sino que te ayuda a ti mismo a consolidar el conocimiento. La herramienta estándar para esto en el mundo del desarrollo es el archivo `README.md`."
        },
        {
          "type": "card",
          "title": "Plantilla para un `README.md` Efectivo",
          "code": "# Título del Proyecto\n\n## Descripción\n(¿Qué problema resuelve este proyecto? ¿Cuál es la solución? Una o dos frases claras.)\n\n## ¿Cómo Usarlo?\n(Instrucciones paso a paso para replicar tu trabajo. Si es un script, ¿cómo se ejecuta? Si es un conjunto de prompts, ¿dónde se usan?)\n\n## PDR (Prompt Design Recipe) Utilizado\n(Pega aquí el PDR completo que diseñaste para tu proyecto. Es la pieza central de tu documentación.)\n\n## Ejemplo de Resultado\n(Muestra una captura de pantalla, un bloque de código o el texto generado por la IA como resultado de tu proyecto.)"
        }
      ]
    },
    {
      "title": "4. Creación de Recursos de Capacitación (Socialización)",
      "content": [
        {
          "type": "paragraph",
          "text": "El valor de una innovación se multiplica cuando se comparte. Una vez que tu proyecto funciona, el siguiente paso es ‘socializarlo’ con tu equipo, tus clientes o tus empleados. La IA también puede ayudarte a crear estos materiales de capacitación."
        },
        {
          "type": "card",
          "title": "De Proyecto a Recurso de Equipo",
          "text": "A partir de tu proyecto finalizado y tu `README.md`, puedes usar un LLM para generar rápidamente los siguientes recursos de capacitación:",
          "items": [
            "<b>Guía Rápida (One-Pager):</b> Pídele a la IA: <i>‘Lee el siguiente archivo README.md y genera una guía de usuario de una sola página en formato de viñetas, explicando cómo usar esta herramienta.’</i>",
            "<b>Comunicado por Email:</b> <i>‘Redacta un correo electrónico para mi equipo de ingeniería anunciando una nueva herramienta que he creado. Explica brevemente que automatiza [el problema que resolviste] y enlaza al archivo README.md para más detalles.’</i>",
            "<b>Script para Demo:</b> <i>‘Escribe un guion corto y conciso para un video de 2 minutos que demuestre cómo funciona mi proyecto. El guion debe tener dos columnas: ‘Acción en Pantalla’ y ‘Narración’.’</i>"
          ]
        }
      ]
    },
    {
      "title": "5. Laboratorio Final: Tu Proyecto de IA",
      "content": [
        {
          "type": "card",
          "title": "Entregable Final del Curso",
          "items": [
            "<b>Objetivo:</b> Consolidar todo tu aprendizaje en un único entregable.",
            "<b>Tu Tarea:</b>",
            "1. Elige una de las propuestas de proyecto de este módulo (o una idea propia equivalente).",
            "2. Desarrolla el proyecto utilizando las herramientas y metodologías vistas en el curso.",
            "3. Crea una carpeta para tu proyecto y dentro de ella, prepara tu entregable final, que debe consistir en un **paquete de 3 elementos**:<ul><li>El **PDR** que diseñaste para la tarea.</li><li>El **activo principal generado por la IA** (ej. el script de Python, la presentación de Gamma, las imágenes del logo, etc.).</li><li>Un archivo **`README.md`** bien documentado que explique tu proyecto, siguiendo la plantilla proporcionada.</li></ul>",
            "4. Prepárate para compartir y discutir tu proyecto y tu experiencia en la sesión de socialización."
          ]
        }
      ]
    },
    {
      "title": "Contenido Extra (Video)",
      "content": [
        {
          "type": "paragraph",
          "text": "Consejos para presentar tu proyecto final de IA."
        },
        {
          "type": "video",
          "youtubeId": "c-M2hs3n_fA"
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
              "src": "imagenes/7.jpg",
              "alt": "Imagen de proyecto final 1",
              "caption": "Ejemplo de un README.md bien documentado."
            },
            {
              "src": "imagenes/8.jpg",
              "alt": "Imagen de proyecto final 2",
              "caption": "Presentación de un proyecto de IA a stakeholders."
            },
            {
              "src": 'imagenes/9.jpg',
              "alt": "Imagen de proyecto final 3",
              "caption": "Portafolio de proyectos de IA."
            }
          ]
        }
      ]
    }
  ]
}