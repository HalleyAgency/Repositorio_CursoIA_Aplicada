const moduleData = {
  "module_number": 1,
  "title": "Introducción Conceptual a la IA Generativa",
  "subtitle": "Una inmersión profunda en los fundamentos, capacidades y el impacto de la Inteligencia Artificial Generativa en el campo de la ingeniería.",
  "sections": [
    {
      "title": "1. Historia y Evolución de la IA Generativa: De Turing a los Transformers",
      "content": [
        {
          "type": "paragraph",
          "text": "La Inteligencia Artificial Generativa no surgió de la nada; es la culminación de más de 70 años de investigación en computación, lingüística y neurociencia. Comprender su evolución nos permite apreciar la magnitud de los avances actuales y anticipar el futuro."
        },
        {
          "type": "card",
          "title": "Los Fundamentos Teóricos (1950-1990)",
          "text": "Las semillas se plantaron con figuras como **Alan Turing**, quien en su artículo de 1950 \"Computing Machinery and Intelligence\" propuso el famoso 'Juego de la Imitación' (Test de Turing), cuestionando si las máquinas podían pensar. Los primeros intentos prácticos como **ELIZA** (1966) de Joseph Weizenbaum eran 'charlatanes' que usaban reconocimiento de patrones y reglas predefinidas para simular una conversación, pero carecían de comprensión real. Durante este período, el campo de la IA experimentó 'inviernos', donde el progreso se estancaba por la falta de poder computacional y datos."
        },
        {
          "type": "card",
          "title": "La Revolución Silenciosa del Deep Learning (1990-2017)",
          "text": "El trabajo de los 'padrinos de la IA', **Geoffrey Hinton, Yann LeCun y Yoshua Bengio** (ganadores del Premio Turing 2018), fue fundamental. Desarrollaron los algoritmos de 'backpropagation' y las Redes Neuronales Convolucionales (CNNs) que permitieron a las redes neuronales 'profundas' (con muchas capas) aprender patrones complejos a partir de datos. Hitos clave de esta era incluyen:\n<ul><li><b>Redes Generativas Antagónicas (GANs, 2014):</b> La invención de Ian Goodfellow, donde dos redes (un 'Generador' y un 'Discriminador') compiten, forzando al generador a crear imágenes sintéticas cada vez más realistas. Fue un salto cuántico en la generación de medios.</li></ul>"
        },
        {
          "type": "card",
          "title": "La Era de los Transformers (2017-Presente)",
          "text": "El verdadero punto de inflexión para el lenguaje fue el paper de Google **\"Attention Is All You Need\" (2017)**. Introdujo la **arquitectura Transformer**, que abandonó las estructuras recurrentes (lentas y secuenciales) por un **mecanismo de atención**. Este mecanismo permite al modelo sopesar la importancia de todas las palabras en una secuencia simultáneamente, capturando el contexto de manera mucho más eficaz y permitiendo una paralelización masiva en el entrenamiento. Este fue el nacimiento de los **Grandes Modelos de Lenguaje (LLMs)** y la explosión de la IA Generativa que vemos hoy con herramientas como GPT, Gemini y Claude."
        }
      ]
    },
    {
      "title": "2. Conceptos Fundamentales: El Motor de la IA",
      "content": [
        {
          "type": "paragraph",
          "text": "Para un ingeniero, es crucial entender los principios de funcionamiento de estas herramientas, no como una caja negra, sino como sistemas con fundamentos lógicos."
        },
        {
          "type": "card",
          "title": "Machine Learning (Aprendizaje Automático)",
          "text": "Es la disciplina de la IA que dota a los sistemas de la capacidad de aprender y mejorar a partir de la experiencia (datos) sin ser programados explícitamente. Se divide principalmente en:<ul><li><b>Supervisado:</b> El modelo aprende de datos etiquetados (ej. un email es 'spam' o 'no spam').</li><li><b>No Supervisado:</b> El modelo encuentra patrones en datos no etiquetados (ej. agrupar clientes por comportamiento de compra).</li><li><b>Por Refuerzo:</b> El modelo aprende tomando acciones en un entorno para maximizar una recompensa (ej. entrenar una IA para jugar ajedrez).</li></ul>"
        },
        {
          "type": "card",
          "title": "Deep Learning y Redes Neuronales",
          "text": "Es un subcampo del Machine Learning que utiliza **Redes Neuronales Artificiales** con múltiples capas. Una red neuronal es un modelo inspirado en el cerebro humano, compuesto por 'neuronas' (nodos) organizadas en 'capas'. Cada neurona recibe entradas, las procesa y las pasa a la siguiente capa. Al entrenar la red con millones de ejemplos, los pesos de las conexiones entre neuronas se ajustan para que la red pueda reconocer patrones increíblemente complejos, como el lenguaje natural o los objetos en una imagen."
        },
        {
            "type": "card",
            "title": "Modelos de Difusión",
            "text": "Son la tecnología de vanguardia para la generación de imágenes (DALL-E 3, Midjourney). El proceso es ingenioso: 1) Se toma una imagen de entrenamiento y se le añade 'ruido' (distorsión aleatoria) gradualmente hasta que es irreconocible. 2) Se entrena una red neuronal para revertir ese proceso, es decir, para aprender a 'limpiar' el ruido y reconstruir la imagen original. Una vez entrenado, el modelo puede partir de puro ruido aleatorio y 'esculpir' una imagen completamente nueva que coincida con una descripción de texto (prompt)."
        }
      ]
    },
    {
        "title": "3. Casos de Éxito Aplicados a la Ingeniería",
        "content": [
            {
                "type": "paragraph",
                "text": "La IA Generativa no es una promesa a futuro; ya está generando valor tangible en múltiples disciplinas de la ingeniería."
            },
            {
                "type": "card",
                "title": "Ingeniería de Software: Productividad Aumentada",
                "text": "<b>GitHub Copilot</b>, basado en los modelos de OpenAI, se ha convertido en una herramienta estándar. No solo autocompleta código, sino que sugiere bloques lógicos completos, genera pruebas unitarias y traduce código entre lenguajes. Estudios de GitHub muestran que los desarrolladores que lo usan completan sus tareas hasta un <b>55% más rápido</b>, permitiéndoles enfocarse en el diseño de la arquitectura y la resolución de problemas complejos en lugar de en la sintaxis repetitiva."
            },
            {
                "type": "card",
                "title": "Ingeniería Civil y Arquitectura: Diseño Optimizado",
                "text": "El <b>diseño generativo</b> permite a los ingenieros definir metas (ej. minimizar peso, maximizar resistencia) y restricciones. La IA explora miles de permutaciones de diseño que un humano jamás podría considerar. El estudio <b>Zaha Hadid Architects</b> usa herramientas como Midjourney para la ideación rápida de formas complejas, mientras que empresas como <b>Autodesk</b> integran diseño generativo en sus herramientas para crear estructuras como puentes o componentes mecánicos con una reducción de material de hasta un 40% sin comprometer la integridad."
            },
            {
                "type": "card",
                "title": "Ingeniería Industrial: Optimización de Procesos",
                "text": "<b>Siemens</b> utilizó IA en una de sus plantas para optimizar la inspección de placas de circuito, reduciendo en un 30% las costosas pruebas de rayos X. En la cadena de suministro, <b>Procter & Gamble</b> implementó IA para gestionar su inventario, logrando una reducción de costos del 20% mientras aseguraba la disponibilidad de productos. Estos sistemas analizan datos históricos y en tiempo real para predecir la demanda, optimizar rutas y prevenir cuellos de botella."
            }
        ]
    },
    {
      "title": "4. Laboratorio Práctico de Nivel Profesional",
      "content": [
        {
          "type": "paragraph",
          "text": "Estos ejercicios están diseñados para simular tareas reales de ingeniería donde la IA puede actuar como un potente multiplicador de fuerza."
        },
        {
          "type": "card",
          "title": "Ejercicio 1: Traductor Técnico Universal",
          "items": [
            "<b>Contexto:</b> Has encontrado un párrafo en un paper de investigación sobre un nuevo material compuesto que podría ser útil para tu proyecto.",
            "<b>Texto Técnico (Ejemplo):</b> <i>'The nanocomposite exhibits anisotropic thermal conductivity, primarily due to the preferential alignment of carbon nanotubes along the polymer matrix during the extrusion process, leading to a significant reduction in the phonon scattering rate in the longitudinal direction.'</i>",
            "<b>Tu Tarea:</b>",
            "1. Pide a un LLM (Gemini, Claude) que **actúe como un experto en ciencia de materiales** y te explique el párrafo anterior en términos técnicos sencillos.",
            "2. Luego, pídele que **adapte esa explicación para un gerente de proyecto no técnico**, enfocándose en el beneficio práctico (ej. 'disipa el calor muy bien en una dirección').",
            "3. Finalmente, pídele que **genere 3 preguntas clave** que le harías al autor del paper para evaluar la viabilidad de usar este material en un producto real."
          ]
        },
        {
          "type": "card",
          "title": "Ejercicio 2: Generador de Script de Análisis de Datos",
          "items": [
            "<b>Contexto:</b> Tienes un archivo `temperaturas.csv` con datos de un sensor. El archivo tiene dos columnas: `Timestamp` (en formato `YYYY-MM-DD HH:MM:SS`) y `Temperatura_C`. Algunos valores de temperatura están vacíos (`null` o `NaN`).",
            "<b>Tu Tarea:</b>",
            "Escribe un prompt detallado usando la técnica C.R.A.F.T. para que un LLM genere un script completo en Python. El prompt debe instruir a la IA para que el script realice lo siguiente:",
            "1. Use las librerías `pandas` para leer el CSV y `matplotlib` para graficar.",
            "2. Convierta la columna `Timestamp` a un formato de fecha y hora de pandas.",
            "3. Identifique y cuente los valores nulos en la columna `Temperatura_C`.",
            "4. Rellene los valores nulos utilizando una **interpolación lineal**.",
            "5. Genere una gráfica que muestre la temperatura a lo largo del tiempo, con etiquetas claras en los ejes y un título.",
            "6. Guarde la gráfica resultante como un archivo `temperatura_analisis.png`."
          ]
        }
      ]
    },
    {
      "title": "5. Bibliografía y Recursos Fundamentales",
      "content": [
        {
            "type": "paragraph",
            "text": "La siguiente es una lista curada de recursos para una comprensión profunda y rigurosa de los temas tratados en este módulo."
        },
        {
          "type": "bibliography",
          "items": [
            {
              "title": "\"Computing Machinery and Intelligence\" (Alan Turing, 1950)",
              "author": "El artículo filosófico que sentó las bases de la IA, proponiendo el Test de Turing. Un documento histórico."
            },
            {
              "title": "\"Attention Is All You Need\" (Vaswani et al., 2017)",
              "author": "El paper técnico que introdujo la arquitectura Transformer. Su lectura (o la de sus resúmenes) es clave para entender cómo funcionan los LLMs modernos."
            },
            {
              "title": "\"Deep Learning with Python\" (François Chollet)",
              "author": "Libro fundamental y práctico escrito por el creador de Keras, una de las librerías de Deep Learning más importantes. Ideal para ingenieros que quieren entender la implementación."
            },
            {
              "title": "Stanford University - Human-Centered AI Institute (HAI)",
              "author": "Un centro de investigación interdisciplinario líder. Su sitio web y publicaciones son una fuente de información de vanguardia sobre el estado del arte y la ética de la IA. <a href='https://hai.stanford.edu/' target='_blank'>Visitar</a>"
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
          "text": "Una explicación visual de los conceptos clave de este módulo."
        },
        {
          "type": "video",
          "youtubeId": "C_78Cx_K_GY" 
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
              "alt": "Imagen conceptual de IA 1",
              "caption": "Visualización de una red neuronal."
            },
            {
              "src": "imagenes/2.jpg",
              "alt": "Imagen conceptual de IA 2",
              "caption": "Abstracción de datos y algoritmos."
            },
            {
              "src": "imagenes/3.jpg",
              "alt": "Imagen conceptual de IA 3",
              "caption": "Interacción humano-robot."
            }
          ]
        }
      ]
    }
  ]
}