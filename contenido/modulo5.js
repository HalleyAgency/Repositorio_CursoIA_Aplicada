const moduleData = {
  "module_number": 5,
  "title": "De la Idea al Producto: Flujo de Producción con IA",
  "subtitle": "Aplicando las habilidades de los módulos anteriores para construir un proyecto completo, desde la conceptualización hasta la presentación final.",
  "sections": [
    {
      "title": "1. Fase 1: Conceptualización y Planificación Asistida por IA",
      "content": [
        {
          "type": "paragraph",
          "text": "Todo gran proyecto de ingeniería comienza con una idea. En esta fase, utilizaremos la IA no solo para explorar esa idea, sino para transformarla en un plan de acción concreto y profesional, sentando las bases para todo el ciclo de producción."
        },
        {
          "type": "card",
          "title": "De la Idea a la Especificación Técnica",
          "text": "A menudo, los requerimientos iniciales son vagos. La primera tarea del ingeniero es convertir esa vaguedad en claridad. Usaremos un LLM como un socio de brainstorming para refinar el concepto y definir el alcance del proyecto.",
          "items": [
            "<b>Requerimiento Inicial (Vago):</b> 'Quiero hacer una herramienta para visualizar datos.'",
            "<b>Interacción con IA (Prompt):</b> 'Actúa como un jefe de producto de software. Dada la idea de 'una herramienta para visualizar datos', ayúdame a definir los requerimientos. Genera 5 preguntas clave que debo responder para acotar el alcance y las funcionalidades mínimas viables (MVP). '",
            "<b>Resultado (Especificación):</b> La IA nos guiará para definir que será una 'herramienta web que permita a un usuario cargar un archivo CSV y visualizarlo como una tabla HTML interactiva'."
          ]
        },
        {
          "type": "card",
          "title": "Generación del Plan de Proyecto",
          "text": "Con el alcance definido, podemos usar la IA para estructurar el trabajo. Le pediremos que genere un plan de proyecto detallado, identificando las tareas, las dependencias y la arquitectura tecnológica.",
          "code": "# PDR: Generador de Plan de Proyecto\n\n## Rol\nActúa como un Project Manager Técnico con experiencia en desarrollo web.\n\n## Contexto\nEl objetivo es construir una 'herramienta web para visualizar archivos CSV'. La tecnología a usar es HTML, CSS y Vanilla JavaScript, todo en un único archivo para simplicidad.\n\n## Acción\nGenera un plan de proyecto en formato Markdown. Debe incluir: 1) Una lista de tareas principales (ej. 'Diseñar UI', 'Escribir HTML', 'Implementar lógica JS'). 2) Una arquitectura de archivos simple. 3) Una lista de 3 posibles riesgos o desafíos a considerar."
        }
      ]
    },
    {
      "title": "2. Fase 2: Desarrollo y Documentación Aumentada",
      "content": [
        {
          "type": "paragraph",
          "text": "En esta fase, pasamos de la planificación a la ejecución. Utilizaremos herramientas de IA integradas en nuestro entorno de desarrollo para acelerar la escritura de código y, crucialmente, la documentación del mismo."
        },
        {
          "type": "card",
          "title": "Generación de Código Base y Funcionalidades",
          "text": "Usando un editor 'IA-first' como Cursor, o extensiones como Copilot en VS Code, podemos generar el esqueleto de nuestra aplicación y las funciones clave a partir de prompts precisos, basados en nuestro plan de proyecto.",
          "items": [
            "<b>Ejemplo de Prompt (en el editor):</b> 'Genera la estructura base de un archivo HTML5. Debe incluir un `<h1>` con el título 'Visualizador de CSV', un `<input type='file'>` para seleccionar el archivo, y un `<div>` vacío con el id `tabla-container` donde se mostrará la tabla.'"
          ]
        },
        {
          "type": "card",
          "title": "Documentación Continua y Automática",
          "text": "Un buen ingeniero documenta su trabajo. La IA puede convertir esta tarea, a menudo tediosa, en un proceso fluido. Una vez que el código está funcional, podemos pedirle a la IA que genere la documentación esencial.",
          "code": "# PDR: Generador de Documentación\n\n## Rol\nActúa como un redactor técnico especializado en software.\n\n## Contexto\nSe te proporcionará el código completo de una aplicación HTML/JS. \n\n## Acción\nAnaliza el código y genera un archivo `README.md` completo que incluya: 1) Una descripción del proyecto. 2) Instrucciones de uso para un usuario final. 3) Una explicación breve de cómo funciona el código para otro desarrollador."
        }
      ]
    },
    {
      "title": "3. Fase 3: Creación de Identidad Visual y Recursos",
      "content": [
        {
          "type": "paragraph",
          "text": "Ningún producto está completo sin una identidad. Aplicando las técnicas del Módulo 4, podemos crear rápidamente una identidad de marca y los recursos visuales necesarios para que nuestro proyecto luzca profesional."
        },
        {
          "type": "card",
          "title": "Branding del Proyecto en Minutos",
          "text": "Generaremos un logo simple pero efectivo para nuestra herramienta 'Visualizador CSV'.",
          "items": [
            "<b>Prompt de Imagen (para DALL-E 3, Midjourney):</b> 'Logo minimalista y moderno para una herramienta de software llamada 'Visualizador CSV'. El diseño debe combinar de forma abstracta una tabla de datos y un ojo o una lupa. Estilo vector, plano, sobre fondo blanco. Paleta de colores azul tecnológico y gris.'",
            "Este proceso nos da una identidad visual única en minutos, no días."
          ]
        }
      ]
    },
    {
      "title": "4. Fase 4: Empaquetado y Presentación del Proyecto",
      "content": [
        {
          "type": "paragraph",
          "text": "El trabajo de un ingeniero no termina cuando el código funciona; debe ser capaz de comunicar el valor de su solución. En esta fase final, empaquetamos y presentamos nuestro proyecto."
        },
        {
          "type": "card",
          "title": "Creación de una Presentación de Impacto",
          "text": "Usaremos una herramienta como Gamma.app para generar una presentación profesional. El truco es usar la documentación que ya creamos como fuente de verdad.",
          "items": [
            "<b>Instrucción para Gamma.app:</b> 'Crea una presentación basada en el siguiente texto (pegar aquí el contenido del `README.md`). El tono debe ser profesional y dirigido a un gerente de producto. La presentación debe cubrir qué es la herramienta, cómo funciona y cuáles son sus beneficios.'"
          ]
        },
        {
          "type": "card",
          "title": "Elaboración del Discurso de Presentación (Pitch)",
          "text": "Finalmente, podemos usar un LLM para preparar el discurso que acompañará a la presentación.",
          "items": [
            "<b>Prompt:</b> 'Actúa como un experto en comunicación. Basado en esta presentación (pegar texto de la presentación de Gamma), escribe el guion para un 'pitch' de 3 minutos para demostrar el 'Visualizador CSV' a un cliente potencial.'"
          ]
        }
      ]
    },
    {
      "title": "5. Laboratorio Práctico: Construye tu Propio 'Visualizador CSV'",
      "content": [
        {
          "type": "card",
          "title": "Proyecto Integrador del Módulo",
          "items": [
            "<b>Objetivo:</b> Aplicar el flujo de producción completo visto en este módulo para construir una herramienta web desde cero.",
            "<b>Tu Tarea:</b> Siguiendo las 4 fases descritas, deberás producir los siguientes entregables:",
            "1. <b>Plan de Proyecto:</b> Un archivo de texto con el plan generado por la IA.",
            "2. <b>Producto de Software:</b> Un único archivo `visualizador.html` que contenga el HTML, CSS y JavaScript de la aplicación funcional.",
            "3. <b>Recurso Visual:</b> Un archivo de imagen con el logo de tu aplicación.",
            "4. <b>Documentación:</b> Un archivo `README.md` explicando el proyecto.",
            "5. <b>Presentación:</b> Un PDF exportado desde Gamma.app con la presentación de tu herramienta."
          ]
        }
      ]
    },
    {
      "title": "Material Extra - Modulo 5 - Proyecto de Visualizador CSV",
      "content": [
        {
          "type": "video",
          "youtubeId": "H4eTXCaYQSM"
        }
      ]
    },
    {
      "title": "Siguiente Contenido",
      "content": [
        {
          "type": "card",
          "text": "<a href='../modulos/modulo6.html' class='btn'>Ir al Módulo 6</a>"
        }
      ]
    }
  ]
}