const moduleData = {
  "module_number": 3,
  "title": "Aplicación en Documentación y Gestión de Archivos",
  "subtitle": "Utilizando la IA como una herramienta activa en tu entorno de desarrollo local para organizar y documentar proyectos.",
  "sections": [
    {
      "title": "1. El Siguiente Nivel: La IA en Tu Entorno de Desarrollo Local",
      "content": [
        {
          "type": "paragraph",
          "text": "En los módulos anteriores, interactuamos con la IA a través de interfaces web. Ahora, llevaremos ese conocimiento a nuestro entorno de trabajo diario: el editor de código y la terminal. El objetivo es que la IA no sea solo una fuente de consulta, sino un participante activo que lee, escribe y organiza nuestros archivos de proyecto."
        },
        {
          "type": "card",
          "title": "Herramientas Clave para el Flujo de Trabajo Local",
          "items": [
            "<b>Editores de Código con IA Integrada:</b> Herramientas como <b>Cursor</b> están diseñadas desde cero con la IA en su núcleo, permitiendo chatear con el contexto de todo tu código, generar archivos, etc.",
            "<b>Extensiones para Editores Existentes:</b> La forma más común de trabajar. Consiste en instalar extensiones como <b>GitHub Copilot</b> o la extensión oficial de <b>Gemini</b> en un editor como <b>Visual Studio Code</b>.",
            "<b>Interfaces de Línea de Comandos (CLI):</b> Para la máxima potencia y automatización, herramientas como <b>Gemini-CLI</b> permiten ejecutar prompts directamente desde la terminal, pudiendo encadenar comandos y crear scripts para manipular el sistema de archivos."
          ]
        }
      ]
    },
    {
      "title": "2. Caso de Estudio: El Indexador de Proyectos",
      "content": [
        {
          "type": "paragraph",
          "text": "A continuación, analizaremos un caso práctico completo que demuestra el flujo de trabajo de un ingeniero al usar IA para resolver un problema de organización de archivos. Este es el mismo proceso que usamos para construir este repositorio."
        },
        {
          "type": "card",
          "title": "Paso 1: El Requerimiento del Cliente (La Idea)",
          "text": "Todo empieza con una necesidad, a menudo expresada en términos generales. Este es el requerimiento original que da pie al proyecto: <br><br><i>‘Necesito una solución para organizar mis archivos de hojas de cálculo que tengo desorganizados en mi carpeta de proyectos. Debería agruparlos en subcarpetas por mes y por tema. Finalmente, como resultado, debes crear un archivo HTML que funcione como un índice digital donde pueda ver las carpetas y archivos y expandirlos para revisar su contenido, todo en un solo lugar.’</i>"
        },
        {
          "type": "card",
          "title": "Paso 2: La Tarea del Ingeniero (La Especificación)",
          "text": "El rol del ingeniero es traducir esa idea general en una especificación técnica precisa y sin ambigüedades que la IA pueda ejecutar. Para esto, usamos el PDR y el framework C.R.A.F.T. que vimos en el Módulo 2."
        },
        {
          "type": "card",
          "title": "Paso 3: El PDR C.R.A.F.T. en Acción",
          "text": "Este es el prompt detallado que se le entregaría a la IA. Analiza cómo cada sección de C.R.A.F.T. aborda una parte del requerimiento original, añadiendo los detalles técnicos necesarios.",
          "code": "# PDR: Generador de Índice de Archivos Inteligente\n\n## C - Contexto\nUn usuario tiene una gran cantidad de archivos CSV desorganizados. La solución requiere dos partes: un script de Python para organizar los archivos en carpetas por categoría y mes, y una interfaz web HTML/JS para visualizar el resultado de forma interactiva.\n\n## R - Rol\nActúa como un Desarrollador Full-Stack Senior, experto en automatización con Python y en la creación de interfaces web con Vanilla JavaScript.\n\n## A - Acción\nGenera dos componentes: 1) Un script `organize_files.py` que lea los archivos de `data_desorganizada`, identifique temas y fechas en los nombres, y los mueva a una estructura de carpetas en `Data_Organizada_PDR`. 2) Un archivo `Halley_Indexer.html` que muestre una vista de árbol del directorio `Data_Organizada_PDR` y que, al hacer clic en un archivo CSV, cargue y muestre su contenido en una tabla colapsable.\n\n## F - Formato\nLa salida debe ser dos bloques de código: el primero para el script de Python y el segundo para el documento HTML autocontenido (con CSS y JS dentro).\n\n## T - Target\nEl usuario final no es técnico. La interfaz debe ser extremadamente intuitiva, permitiendo encontrar y visualizar reportes con un par de clics."
        }
      ]
    },
    {
      "title": "3. El Resultado: Código Generado por IA",
      "content": [
        {
          "type": "paragraph",
          "text": "Una vez que el PDR es procesado por un modelo de IA potente, este genera los archivos de código solicitados. En los recursos de este curso, puedes encontrar los archivos reales generados para este ejemplo (`organize_files.py` y `Halley_Indexer.html`) para estudiarlos en detalle."
        }
      ]
    },
    {
      "title": "4. Laboratorio Práctico: Tu Propio Organizador de Metadatos",
      "content": [
        {
          "type": "card",
          "title": "Ejercicio: Extractor de Metadatos de Reportes",
          "items": [
            "<b>Objetivo:</b> Escribir un PDR completo para instruir a una IA a leer un conjunto de archivos y generar un resumen en formato CSV.",
            "<b>Escenario:</b> Imagina que tienes una carpeta `reportes_mensuales` con archivos de texto con nombres como `informe_ventas_2023_01.txt`, `reporte_logistica_2023_01.txt`, `informe_ventas_2023_02.txt`, etc.",
            "<b>Tu Tarea:</b>",
            "Escribe un PDR completo que le pida a una IA (como Gemini-CLI) que realice las siguientes acciones:",
            "1. Lea todos los archivos `.txt` dentro de la carpeta `reportes_mensuales`.",
            "2. Por cada archivo, extraiga la siguiente información de su nombre: el mes, el año y el tema ('ventas', 'logistica', etc.).",
            "3. Genere como única salida un archivo llamado `resumen.csv`.",
            "4. El archivo `resumen.csv` debe contener las siguientes columnas: `Mes`, `Año`, `Tema`, `Nombre_Archivo`."
          ]
        }
      ]
    },
    {
      "title": "5. Bibliografía y Herramientas",
      "content": [
        {
          "type": "bibliography",
          "items": [
            {
              "title": "Visual Studio Code",
              "author": "El editor de código más popular del mundo. Instálalo para poder usar extensiones de IA. <a href='https://code.visualstudio.com/' target='_blank'>Descargar</a>"
            },
            {
              "title": "GitHub Copilot",
              "author": "La extensión de autocompletado de código por IA más famosa. Se integra directamente en VS Code. <a href='https://github.com/features/copilot' target='_blank'>Visitar</a>"
            },
            {
              "title": "Cursor",
              "author": "Un editor de código ‘IA-first’ que integra funcionalidades de chat y edición de código de forma nativa. <a href='https://cursor.sh/' target='_blank'>Visitar</a>"
            },
            {
              "title": "Gemini-CLI (Conceptual)",
              "author": "La idea de una Interfaz de Línea de Comandos para interactuar con modelos como Gemini, permitiendo la automatización de tareas de sistema de archivos. El concepto es clave para este módulo."
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
          "text": "Un tutorial sobre cómo usar la IA para organizar archivos."
        },
        {
          "type": "video",
          "youtubeId": "L2P2q_c_rvo"
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
              "alt": "Imagen conceptual de gestión de archivos 1",
              "caption": "Flujo de trabajo de un indexador de proyectos."
            },
            {
              "src": "imagenes/8.jpg",
              "alt": "Imagen conceptual de gestión de archivos 2",
              "caption": "Ejemplo de un README.md generado por IA."
            },
            {
              "src": "imagenes/9.jpg",
              "alt": "Imagen conceptual de gestión de archivos 3",
              "caption": "Integración de la IA en un editor de código."
            }
          ]
        }
      ]
    }
  ]
}