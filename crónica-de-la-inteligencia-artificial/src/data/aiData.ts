export interface TimelineEvent {
  id: string;
  year: string;
  era: 'genesis' | 'inviernos' | 'renacimiento' | 'deeplearning' | 'generativa';
  eraLabel: string;
  title: string;
  protagonists: string[];
  summary: string;
  breakthrough: string;
  legacy: string;
  paradigm: 'Simbólico / Lógico' | 'Estadístico / Probabilístico' | 'Conexionista / Redes Neuronales';
  quote?: string;
  quoteAuthor?: string;
}

export interface ParadigmInfo {
  id: string;
  name: string;
  period: string;
  motto: string;
  mechanism: string;
  advantages: string[];
  limitations: string[];
  iconName: string;
  keyAlgorithm: string;
  exampleUse: string;
}

export interface ImpactSector {
  id: string;
  name: string;
  shortDesc: string;
  metric: string;
  metricLabel: string;
  description: string;
  caseStudyTitle: string;
  caseStudyText: string;
  opportunities: string[];
  risks: string[];
}

export interface MythItem {
  id: string;
  myth: string;
  reality: string;
  explanation: string;
  verdict: 'Mito Común' | 'Verdad a Medias' | 'Realidad Matizada';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface GlossaryTerm {
  term: string;
  category: 'Arquitectura' | 'Entrenamiento' | 'Uso' | 'Ética';
  definition: string;
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'turing-1950',
    year: '1950',
    era: 'genesis',
    eraLabel: 'Génesis y Fundamentos',
    title: 'El Test de Turing y "¿Pueden pensar las máquinas?"',
    protagonists: ['Alan Turing'],
    summary: 'Alan Turing publica su célebre artículo "Computing Machinery and Intelligence", proponiendo el "Juego de la Imitación" (Test de Turing) para evaluar si una máquina puede exhibir un comportamiento indistinguible del humano.',
    breakthrough: 'Cambió el debate filosófico abstracto a un criterio empírico de comportamiento observable.',
    legacy: 'Estableció el estándar fundacional sobre cómo medimos la conversación computacional y la inteligencia.',
    paradigm: 'Simbólico / Lógico',
    quote: 'Una computadora merecería ser llamada inteligente si pudiera engañar a un humano haciéndole creer que es humana.',
    quoteAuthor: 'Alan Turing'
  },
  {
    id: 'dartmouth-1956',
    year: '1956',
    era: 'genesis',
    eraLabel: 'Génesis y Fundamentos',
    title: 'La Conferencia de Dartmouth: Nace el término "IA"',
    protagonists: ['John McCarthy', 'Marvin Minsky', 'Claude Shannon', 'Nathaniel Rochester'],
    summary: 'Durante un taller de verano en Dartmouth College, John McCarthy acuña formalmente el término "Inteligencia Artificial" bajo la premisa de que todo aspecto del aprendizaje humano puede describirse con precisión suficiente para que una máquina lo simule.',
    breakthrough: 'Nacimiento oficial de la IA como disciplina académica independiente de la cibernética y las matemáticas puras.',
    legacy: 'Estableció la agenda de investigación inicial: procesamiento del lenguaje natural, redes neuronales primitivas y teoría de la computación.',
    paradigm: 'Simbólico / Lógico'
  },
  {
    id: 'eliza-1966',
    year: '1966',
    era: 'genesis',
    eraLabel: 'Génesis y Fundamentos',
    title: 'ELIZA: El primer terapeuta conversacional',
    protagonists: ['Joseph Weizenbaum'],
    summary: 'Desarrollado en el MIT, ELIZA simulaba un psicoterapeuta rogeriano mediante reglas de sustitución de patrones sintácticos simples, asombrando a los usuarios que le atribuían empatía real.',
    breakthrough: 'Demostró la facilidad con que los humanos proyectan sentimientos e inteligencia en respuestas mecánicas (el "Efecto ELIZA").',
    legacy: 'Pionero de los chatbots actuales y primer llamado de atención sobre la ética de la interacción humano-máquina.',
    paradigm: 'Simbólico / Lógico'
  },
  {
    id: 'winter-1-1974',
    year: '1974 – 1980',
    era: 'inviernos',
    eraLabel: 'Los Inviernos de la IA',
    title: 'Primer Invierno de la IA: Promesas incumplidas y recortes',
    protagonists: ['Sir James Lighthill', 'Agencias DARPA / SRC'],
    summary: 'El informe Lighthill en el Reino Unido y las evaluaciones de DARPA en EE.UU. concluyen que la IA no había alcanzado los objetivos prometidos de traducción automática y razonamiento general. Se cancela la mayoría de los fondos públicos.',
    breakthrough: 'Llamado a la sobriedad científica; se evidenció la barrera de la "explosión combinatoria" en problemas del mundo real.',
    legacy: 'Enseñó a la comunidad investigadora que las expectativas infladas destruyen la financiación a largo plazo.',
    paradigm: 'Simbólico / Lógico'
  },
  {
    id: 'expert-systems-1980',
    year: '1980 – 1987',
    era: 'renacimiento',
    eraLabel: 'Renacimiento Comercial y Sistemas Expertos',
    title: 'El Boom de los Sistemas Expertos y LISP Machines',
    protagonists: ['Edward Feigenbaum', 'Empresas Fortune 500'],
    summary: 'La IA se traslada a la industria mediante bases de conocimiento de reglas "SI... ENTONCES". Sistemas como XCON de Digital Equipment Corporation ahorran decenas de millones de dólares configurando pedidos de hardware.',
    breakthrough: 'Demostró por primera vez el retorno económico tangible de la IA en dominios empresariales concretos.',
    legacy: 'Bases de datos de conocimiento y motores de inferencia que todavía sostienen ramas del software corporativo.',
    paradigm: 'Simbólico / Lógico'
  },
  {
    id: 'backprop-1986',
    year: '1986',
    era: 'renacimiento',
    eraLabel: 'Renacimiento Conexionista',
    title: 'Popularización de Backpropagation: El retorno de las Redes',
    protagonists: ['Geoffrey Hinton', 'David Rumelhart', 'Ronald Williams'],
    summary: 'Publicación de "Learning representations by back-propagating errors" en Nature, resolviendo el histórico límite del Perceptrón monocapa para entrenar redes multicapa eficientemente mediante cálculo diferencial.',
    breakthrough: 'Hizo posible el entrenamiento matemático de representaciones jerárquicas intermedias.',
    legacy: 'El algoritmo nuclear que todavía entrena a los modelos de lenguaje y redes neuronales contemporáneos.',
    paradigm: 'Conexionista / Redes Neuronales'
  },
  {
    id: 'deepblue-1997',
    year: '1997',
    era: 'renacimiento',
    eraLabel: 'Dominio Heurístico',
    title: 'Deep Blue derrota a Garry Kasparov',
    protagonists: ['Garry Kasparov', 'Feng-hsiung Hsu', 'Equipo IBM'],
    summary: 'Por primera vez en la historia humana, una supercomputadora vence al campeón mundial de ajedrez en un match formal de 6 partidas, evaluando 200 millones de posiciones por segundo con hardware especializado.',
    breakthrough: 'Victoria de la búsqueda en árboles de decisión alfa-beta acelerada por silicio personalizado.',
    legacy: 'Demostró que el cálculo exhaustivo podía superar la intuición humana en dominios de información perfecta.',
    paradigm: 'Simbólico / Lógico'
  },
  {
    id: 'alexnet-2012',
    year: '2012',
    era: 'deeplearning',
    eraLabel: 'Revolución del Deep Learning',
    title: 'AlexNet e ImageNet: El Big Bang de la Visión Computacional',
    protagonists: ['Alex Krizhevsky', 'Ilya Sutskever', 'Geoffrey Hinton', 'Fei-Fei Li'],
    summary: 'AlexNet pulveriza el récord del concurso ImageNet reduciendo el error de clasificación del 26% al 15.3%, entrenando una red convolucional profunda en dos tarjetas gráficas Nvidia para videojuegos (GPUs).',
    breakthrough: 'La convergencia decisiva entre tres factores: Grandes Volúmenes de Datos (ImageNet), Redes Profundas y GPUs masivamente paralelas.',
    legacy: 'Inició la era dorada moderna del Machine Learning; la industria abandonó los filtros manuales por el aprendizaje de características de extremo a extremo.',
    paradigm: 'Conexionista / Redes Neuronales'
  },
  {
    id: 'alphago-2016',
    year: '2016',
    era: 'deeplearning',
    eraLabel: 'Revolución del Deep Learning',
    title: 'AlphaGo y el legendario Movimiento 37',
    protagonists: ['Demis Hassabis', 'David Silver', 'Lee Sedol', 'DeepMind'],
    summary: 'AlphaGo derrota 4-1 a Lee Sedol, maestro legendario de Go, un juego con más posiciones posibles que átomos en el universo observable. El "Movimiento 37" en la partida 2 dejó atónitos a los comentaristas mundiales.',
    breakthrough: 'Combinación innovadora de Redes Neuronales Profundas con Búsqueda en Árboles Monte Carlo (MCTS) y Aprendizaje por Refuerzo.',
    legacy: 'Probó que las máquinas pueden descubrir estrategias contraintuitivas que escapan a siglos de doctrina humana.',
    paradigm: 'Conexionista / Redes Neuronales'
  },
  {
    id: 'transformer-2017',
    year: '2017',
    era: 'generativa',
    eraLabel: 'Era Generativa y Fundacional',
    title: '"Attention Is All You Need" y la Arquitectura Transformer',
    protagonists: ['Ashish Vaswani', 'Noam Shazeer', 'Niki Parmar', 'Jakob Uszkoreit y equipo Google Brain'],
    summary: 'Publicación del artículo que reemplazó las redes recurrentes secuenciales (RNN/LSTM) por un mecanismo de autoatención puramente paralelo, permitiendo capturar dependencias de contexto a gran escala sin perder información.',
    breakthrough: 'Permitió entrenar modelos con miles de millones de parámetros sobre la totalidad de la web pública de forma masivamente paralelizable.',
    legacy: 'La arquitectura base de GPT, Claude, Gemini, LLaMA, Stable Diffusion y los sistemas de visión contemporáneos.',
    paradigm: 'Conexionista / Redes Neuronales',
    quote: 'La atención no solo conecta palabras: conecta relaciones semánticas en espacios vectoriales multidimensionales.',
    quoteAuthor: 'Vaswani et al.'
  },
  {
    id: 'alphafold-2020',
    year: '2020',
    era: 'generativa',
    eraLabel: 'Era Generativa y Fundacional',
    title: 'AlphaFold 2 resuelve el plegamiento de proteínas',
    protagonists: ['John Jumper', 'Demis Hassabis', 'DeepMind'],
    summary: 'AlphaFold predice la estructura tridimensional de prácticamente todas las 200+ millones de proteínas conocidas por la ciencia con precisión atómica, resolviendo un enigma biológico que duró 50 años.',
    breakthrough: 'Aplicación del Deep Learning a las leyes de la biofísica molecular con impacto biomédico sin precedentes.',
    legacy: 'Galardonado con el Premio Nobel de Química 2024; aceleró el diseño de medicamentos y enzimas degradadoras de plásticos.',
    paradigm: 'Conexionista / Redes Neuronales'
  },
  {
    id: 'chatgpt-agents-2022-2026',
    year: '2022 – 2026',
    era: 'generativa',
    eraLabel: 'Era Generativa y Agentes Autónomos',
    title: 'La Era de los Modelos Fundacionales y Sistemas Agénticos',
    protagonists: ['Comunidad científica mundial', 'Laboratorios de IA abierta y frontera'],
    summary: 'La IA se convierte en infraestructura general de la civilización. Pasamos del texto predictivo básico a modelos de razonamiento paso a paso, multimodalidad nativa (voz, visión, código) y agentes autónomos capaces de ejecutar flujos de trabajo completos.',
    breakthrough: 'Inferencia con razonamiento reforzado (test-time compute) y uso autónomo de herramientas y APIs.',
    legacy: 'Transformación del trabajo cognitivo, debates globales de gobernanza y carreras hacia la AGI.',
    paradigm: 'Conexionista / Redes Neuronales'
  }
];

export const PARADIGMS: ParadigmInfo[] = [
  {
    id: 'symbolic',
    name: 'IA Simbólica (GOFAI)',
    period: '1956 – 1985',
    motto: 'El conocimiento se programa con lógica y símbolos explícitos.',
    mechanism: 'Manipula proposiciones lógicas formales mediante reglas escritas a mano por expertos humanos (ej. "SI tiene plumas Y vuela ENTONCES es un ave").',
    advantages: [
      'Totalmente explicable e interpretable paso a paso',
      'No requiere grandes conjuntos de datos de entrenamiento',
      'Ideal para dominios cerrados con reglas fijas (ajedrez, matemáticas formales)'
    ],
    limitations: [
      'Frágil ante la ambigüedad y el ruido del mundo real',
      'El conocimiento humano tácito es imposible de codificar manualmente por completo',
      'Explosión combinatoria al escalar en complejidad'
    ],
    iconName: 'Binary',
    keyAlgorithm: 'Búsqueda en árboles A*, Encadenamiento hacia adelante/atrás, Motores de Inferencia LISP',
    exampleUse: 'Sistemas expertos médicos (MYCIN) y configuración de hardware (XCON)'
  },
  {
    id: 'classical_ml',
    name: 'Machine Learning Clásico',
    period: '1990 – 2011',
    motto: 'Los datos reemplazan a las reglas; el humano diseña las características.',
    mechanism: 'Algoritmos estadísticos que calculan fronteras de decisión y probabilidades a partir de "features" (características) extraídas por ingenieros humanos (ej. histogramas de bordes para detectar autos).',
    advantages: [
      'Maneja la incertidumbre y datos ruidosos con bases estadísticas sólidas',
      'Computacionalmente ligero; corre en CPUs convencionales',
      'Rendimiento comprobado en tablas, detección de spam y recomendaciones'
    ],
    limitations: [
      'Depende del "feature engineering" manual intensivo',
      'Límite de rendimiento al procesar datos no estructurados como imágenes o audio',
      'Dificultad para captar relaciones jerárquicas abstractas'
    ],
    iconName: 'Cpu',
    keyAlgorithm: 'Support Vector Machines (SVM), Random Forests, Regresión Logística, Naive Bayes',
    exampleUse: 'Filtros anti-spam de correo, scoring crediticio bancario, motores de búsqueda iniciales'
  },
  {
    id: 'deep_learning',
    name: 'Deep Learning (Redes Profundas)',
    period: '2012 – 2017',
    motto: 'Aprende las características de forma automática a través de múltiples capas jerárquicas.',
    mechanism: 'Redes neuronales artificiales con decenas o cientos de capas que transforman matrices de entrada en representaciones cada vez más abstractas (bordes → texturas → partes → objetos).',
    advantages: [
      'Extracción automática de características sin intervención manual',
      'Rendimiento superior con grandes volúmenes de datos ("scale is all you need")',
      'Unifica visión, audio y lenguaje bajo el mismo paradigma matricial'
    ],
    limitations: [
      'Caja negra: baja interpretabilidad del peso individual de millones de conexiones',
      'Demanda computacional masiva de hardware especializado (GPUs)',
      'Vulnerabilidad a ejemplos adversariales y sesgos en el dataset'
    ],
    iconName: 'Network',
    keyAlgorithm: 'Convoluciones (CNN), Redes Recurrentes (LSTM/GRU), Descenso de Gradiente Estocástico (Adam)',
    exampleUse: 'Reconocimiento facial en smartphones, traducción automática neuronal, conducción autónoma'
  },
  {
    id: 'transformers',
    name: 'Transformers & Modelos Fundacionales',
    period: '2017 – Presente',
    motto: 'Autoatención masiva sobre tokens en espacios semánticos continuos.',
    mechanism: 'Procesa secuencias completas en paralelo calculando matrices de atención cruzada (Query, Key, Value) para ponderar qué partes del contexto importan más para predecir el siguiente token.',
    advantages: [
      'Comprensión contextual holística a lo largo de miles de palabras',
      'Capacidades emergentes con el escalado (few-shot learning, traducción cero-shot)',
      'Arquitectura multimodal unificada (texto, audio, código, imágenes y video)'
    ],
    limitations: [
      'Riesgo de alucinaciones (afirmaciones convincentes pero falsas)',
      'Costo energético y de refrigeración de centros de datos de frontera',
      'Degradación ante razonamiento que exija planificación simbólica estricta sin cadena de pensamiento'
    ],
    iconName: 'Boxes',
    keyAlgorithm: 'Multi-Head Self-Attention, Positional Encoding, RLHF (Reinforcement Learning from Human Feedback)',
    exampleUse: 'Asistentes conversacionales universales, generación de código, síntesis de voz fotorrealista'
  },
  {
    id: 'agentic',
    name: 'Sistemas Agénticos & Razonamiento',
    period: '2024 – Futuro',
    motto: 'De responder preguntas a planificar, actuar y verificar en el mundo.',
    mechanism: 'Modelos que combinan inferencia con "tiempo de pensamiento" (test-time compute), llamada a herramientas externas (APIs, calculadoras, navegadores) y bucles de autocorrección reflexivos.',
    advantages: [
      'Capacidad de resolver flujos de trabajo de múltiples pasos sin supervisión constante',
      'Verificación y corrección de sus propios errores antes de emitir una respuesta',
      'Interacción bidireccional con el entorno digital real'
    ],
    limitations: [
      'Mayor latencia y consumo de cómputo por cada solicitud resuelta',
      'Superficie de ataque y riesgos de seguridad en ejecución de código autónomo',
      'Necesidad de guardarraíles rigurosos de alineación e intencionalidad humana'
    ],
    iconName: 'Bot',
    keyAlgorithm: 'MCTS durante inferencia, Chain-of-Thought formal, ReAct (Reason + Act), Function Calling',
    exampleUse: 'Agentes de investigación biomédica autónoma, asistentes de ingeniería de software extremo a extremo'
  }
];

export const IMPACT_SECTORS: ImpactSector[] = [
  {
    id: 'salud',
    name: 'Medicina & Biotecnología',
    shortDesc: 'Del diagnóstico asistido por visión a la medicina personalizada y el plegamiento proteico.',
    metric: '200M+',
    metricLabel: 'Estructuras de proteínas predichas por AlphaFold abiertas a la ciencia global',
    description: 'La IA está comprimiendo décadas de experimentación biológica en días. Algoritmos de visión analizan resonancias magnéticas, mamografías y biopsias con sensibilidades superiores al ojo humano en estadíos tempranos, mientras que modelos generativos diseñan anticuerpos y candidatos a fármacos desde cero.',
    caseStudyTitle: 'Detección temprana de cáncer de mama y retinopatía',
    caseStudyText: 'Sistemas de Deep Learning validados en centros hospitalarios de todo el mundo analizan mamografías reduciendo hasta un 30% los falsos positivos y detectando lesiones microscópicas hasta dos años antes de que sean palpables físicamente.',
    opportunities: [
      'Diseño acelerado de vacunas y antibióticos contra bacterias multirresistentes',
      'Medicina predictiva ajustada al perfil genético individual del paciente',
      'Acceso a diagnósticos de alta especialidad en zonas rurales remotas'
    ],
    risks: [
      'Sesgos en bases de datos clínicas que subrepresentan etnias o grupos minoritarios',
      'Riesgo de deshumanización en la relación médico-paciente si se delegan decisiones terminales',
      'Responsabilidad legal difusa ante diagnósticos erróneos'
    ]
  },
  {
    id: 'trabajo',
    name: 'Economía & Futuro del Trabajo',
    shortDesc: 'Reconfiguración del trabajo cognitivo, co-pilotos profesionales y productividad amplificada.',
    metric: '40% - 60%',
    metricLabel: 'De tareas rutinarias en oficinas automatizables o asistibles para 2030',
    description: 'A diferencia de la Revolución Industrial, que automatizó el esfuerzo físico y mecánico, la IA contemporánea actúa sobre el trabajo intelectual: redacción legal, programación de software, análisis financiero y diseño gráfico. El paradigma pasa de "reemplazo total" a "humano amplificado por IA".',
    caseStudyTitle: 'Co-pilotos en el desarrollo de software',
    caseStudyText: 'Estudios empíricos demuestran que los programadores que utilizan asistentes de código basados en modelos fundacionales completan tareas un 55% más rápido, dedicando menos tiempo a la sintaxis repetitiva y más a la arquitectura y seguridad de sistemas.',
    opportunities: [
      'Eliminación de tareas burocráticas aburridas: actas, conciliaciones contables, transcripción',
      'Nuevas profesiones: ingenieros de fiabilidad de IA, auditores de sesgos, curadores de datos',
      'Nivelación de habilidades: los trabajadores junior mejoran su rendimiento con mayor velocidad'
    ],
    risks: [
      'Polarización laboral y riesgo de desplazamiento en roles de soporte al cliente o redacción básica',
      'Dependencia cognitiva y atrofia de habilidades críticas si no se verifica el resultado',
      'Concentración de la riqueza tecnológica en un puñado de gigantes de infraestructura en la nube'
    ]
  },
  {
    id: 'educacion',
    name: 'Educación & Aprendizaje Personalizado',
    shortDesc: 'El sueño del preceptor socrático individual accesible a cualquier estudiante del planeta.',
    metric: '1 a 1',
    metricLabel: 'Relación ideal de tutoría adaptativa que la IA permite democratizar',
    description: 'Cada persona aprende a un ritmo distinto y con estilos cognitivos únicos. Los tutores basados en IA pueden reformular un concepto de física cuántica como una metáfora musical para un guitarrista, o con analogías deportivas para un atleta, guiando mediante preguntas socráticas en lugar de dar la respuesta masticada.',
    caseStudyTitle: 'Tutoría socrática adaptativa para matemáticas y ciencias',
    caseStudyText: 'Plataformas educativas integran modelos entrenados para no resolver el problema del alumno, sino diagnosticar en qué paso del álgebra cometió el error conceptual, guiándolo con pistas graduales hasta que logre la comprensión por sí mismo.',
    opportunities: [
      'Educación inclusiva adaptada para alumnos con dislexia, TDAH o discapacidades visuales/auditivas',
      'Disponibilidad ininterrumpida las 24 horas del día sin juicio ni impaciencia',
      'Herramientas para docentes que automatizan la corrección de ejercicios y diseño de rúbricas'
    ],
    risks: [
      'Plagio y entrega de ensayos sin procesamiento crítico por parte del estudiante',
      'Brecha digital entre instituciones con acceso a herramientas de vanguardia y escuelas sin conectividad',
      'Aislamiento social si se sustituye el debate colectivo por la interacción solitaria con la máquina'
    ]
  },
  {
    id: 'ciencia',
    name: 'Ciencia de Frontera & Clima',
    shortDesc: 'Acelerando la física de partículas, nuevos materiales para baterías y predicción meteorológica.',
    metric: '10,000x',
    metricLabel: 'Aceleración en predicción de trayectorias climáticas frente a modelos numéricos tradicionales',
    description: 'La ciencia moderna enfrenta problemas con espacios de búsqueda demasiado grandes para el cerebro humano o las simulaciones tradicionales. La IA permite modelar la contención de plasma magnético en reactores de fusión nuclear y descubrir aleaciones metálicas más ligeras y eficientes.',
    caseStudyTitle: 'Pronóstico meteorológico de escala global en segundos',
    caseStudyText: 'Modelos de Deep Learning entrenados con 40 años de datos meteorológicos satelitales (como GraphCast) predicen trayectorias de huracanes e inundaciones con mayor precisión que los supercomputadores de predicción numérica, consumiendo mil veces menos energía por cálculo.',
    opportunities: [
      'Descubrimiento de electrolitos sólidos para baterías de vehículos eléctricos de carga ultra rápida',
      'Monitoreo satelital en tiempo real de deforestación y pesca ilegal en los océanos',
      'Simulaciones astronómicas para el filtrado de señales de ondas gravitacionales y exoplanetas'
    ],
    risks: [
      'Consumo eléctrico y de agua de refrigeración que demanda la propia infraestructura de supercómputo de IA',
      'Riesgo de optimización en aplicaciones de doble uso (ej. generación accidental de toxinas químicas)',
      'Falsa confianza en correlaciones estadísticas no fundamentadas en leyes causales físicas'
    ]
  },
  {
    id: 'etica',
    name: 'Ética, Desinformación & Gobernanza',
    shortDesc: 'Los retos existenciales del siglo XXI: verdad, privacidad, alineación y regulación.',
    metric: '95%+',
    metricLabel: 'De precisión en clonación de voz y video fotorrealista (desafío a la veracidad)',
    description: 'La democratización de la generación multimedia plantea desafíos urgentes a la democracia: deepfakes electorales, clonación de voz para estafas y la contaminación del ecosistema de información con contenido automatizado. Simultáneamente, surge el reto de la "Alineación de la IA" para asegurar que sistemas superinteligentes actúen en beneficio de la humanidad.',
    caseStudyTitle: 'El Reglamento Europeo de Inteligencia Artificial (AI Act)',
    caseStudyText: 'La Unión Europea aprobó el primer marco regulatorio integral del mundo, clasificando los sistemas de IA según su nivel de riesgo: desde el riesgo inaceptable (puntuación social ciudadana, prohibido) hasta el alto riesgo (empleo, justicia, salud), exigiendo transparencia y auditorías obligatorias.',
    opportunities: [
      'Criptografía y marcas de agua criptográficas (C2PA) para certificar el origen humano del contenido',
      'Herramientas automatizadas de detección de fraudes y ciberataques en tiempo real',
      'Consensos globales para una IA transparente, soberana y centrada en los derechos humanos'
    ],
    risks: [
      'Erosión de la confianza colectiva en noticias, grabaciones judiciales y testimonios audiovisuales',
      'Sesgos persistentes que discriminan en contratación o concesión de préstamos bancarios',
      'Dilema de la carrera armamentista entre potencias geopolíticas que desestime las medidas de seguridad'
    ]
  }
];

export const MYTHS_REALITIES: MythItem[] = [
  {
    id: 'sentience',
    myth: 'Los modelos de lenguaje actuales ya tienen consciencia y sienten emociones reales.',
    reality: 'Son modelos probabilísticos avanzados que predicen secuencias de tokens.',
    explanation: 'Un modelo como GPT o Gemini no tiene vivencias, dolor, intenciones ni ego. Ha sido entrenado sobre miles de millones de textos para predecir con extrema precisión qué palabra tiene sentido a continuación en función de un contexto numérico.',
    verdict: 'Mito Común'
  },
  {
    id: 'job_loss',
    myth: 'La IA va a dejar sin empleo a la totalidad de los humanos en pocos años.',
    reality: 'La IA transforma las tareas de un puesto, no necesariamente elimina la ocupación entera.',
    explanation: 'Históricamente la automatización desplaza tareas concretas pero crea industrias adyacentes. Lo más probable a corto y medio plazo es que un profesional que use IA reemplace a otro que se niegue a adoptarla.',
    verdict: 'Verdad a Medias'
  },
  {
    id: 'infallibility',
    myth: 'Si una IA lo dice con tono seguro y elocuente, la respuesta debe ser verdadera.',
    reality: 'Las IAs alucinan con gran elocuencia cuando no tienen certeza.',
    explanation: 'La fluidez verbal no es sinónimo de rigor factual. Los modelos pueden inventar citas académicas, leyes o fechas con la misma serenidad que cuando enuncian datos correctos. La supervisión crítica humana sigue siendo indispensable.',
    verdict: 'Mito Común'
  },
  {
    id: 'black_box',
    myth: 'Es absolutamente imposible saber cómo una red neuronal toma una decisión.',
    reality: 'Existe el campo de la Mecanística de la Interpretabilidad y XAI.',
    explanation: 'Aunque una red profunda contiene miles de millones de multiplicaciones de matrices que un cerebro no puede seguir a pulso, los investigadores desarrollan técnicas de sondas lineales y activación de neuronas para entender cómo se representan conceptos abstractos internamente.',
    verdict: 'Realidad Matizada'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿En qué célebre evento se acuñó oficialmente el término "Inteligencia Artificial" en 1956?',
    options: [
      'En la Conferencia de Dartmouth College',
      'En la presentación del Test de Turing en Manchester',
      'En la Exposición Universal de París',
      'En los laboratorios Bell Telephone'
    ],
    correctIndex: 0,
    explanation: 'John McCarthy organizó el taller de verano de Dartmouth en 1956 junto a Marvin Minsky, Claude Shannon y Nathaniel Rochester, consagrando formalmente el nombre del campo.'
  },
  {
    id: 2,
    question: '¿Cuál fue la innovación central que introdujo el paper "Attention Is All You Need" en 2017?',
    options: [
      'Las unidades de procesamiento gráfico (GPUs)',
      'La arquitectura Transformer basada en autoatención',
      'El algoritmo de búsqueda en árbol Monte Carlo',
      'El perceptrón de Frank Rosenblatt'
    ],
    correctIndex: 1,
    explanation: 'El equipo de investigadores de Google Brain presentó la arquitectura Transformer, eliminando la necesidad de procesar palabras de forma estrictamente secuencial y permitiendo el entrenamiento masivo en paralelo.'
  },
  {
    id: 3,
    question: '¿Qué se conoce históricamente como un "Invierno de la IA"?',
    options: [
      'Una temporada en la que las supercomputadoras requerían refrigeración con nitrógeno líquido',
      'Un período de desilusión, promesas exageradas y severos recortes de financiamiento',
      'Un ataque cibernético global contra centros de datos',
      'El apagón de la red eléctrica provocado por Deep Blue en 1997'
    ],
    correctIndex: 1,
    explanation: 'Los Inviernos de la IA (notablemente en 1974-1980 y 1987-1993) ocurrieron cuando el entusiasmo inicial no se tradujo en resultados prácticos rápidos, lo que llevó a gobiernos y empresas a retirar la inversión.'
  },
  {
    id: 4,
    question: '¿Qué logro histórico de la IA fue reconocido con el Premio Nobel de Química en 2024?',
    options: [
      'La victoria de AlphaGo sobre Lee Sedol',
      'El desarrollo del primer procesador cuántico de IBM',
      'La predicción del plegamiento tridimensional de proteínas por AlphaFold',
      'La creación del formato MP3 asistido por algoritmos'
    ],
    correctIndex: 2,
    explanation: 'Demis Hassabis y John Jumper de DeepMind compartieron el Nobel de Química 2024 por utilizar AlphaFold para predecir la estructura tridimensional de cientos de millones de proteínas.'
  },
  {
    id: 5,
    question: '¿Qué significa el término "alucinación" en el contexto de los Modelos de Lenguaje (LLMs)?',
    options: [
      'Que el modelo entra en un bucle infinito y congela el servidor',
      'Que el modelo genera información falsa o inventada con apariencia de verdad',
      'Que el modelo detecta rostros humanos en imágenes de nubes',
      'Que el modelo ha desarrollado emociones y conciencia propia'
    ],
    correctIndex: 1,
    explanation: 'Una alucinación ocurre cuando un modelo genera datos, hechos o citas que no existen en la realidad ni en su entrenamiento, pero las presenta con perfecta gramática y convicción sintáctica.'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Token',
    category: 'Arquitectura',
    definition: 'Unidad mínima de texto (palabra, subpalabra o carácter) en la que un modelo fragmenta la información para convertirla en números enteros.'
  },
  {
    term: 'Embedding',
    category: 'Arquitectura',
    definition: 'Representación matemática de un concepto o palabra como un vector de cientos o miles de dimensiones, donde palabras con significados similares quedan situadas cerca en el espacio geométrico.'
  },
  {
    term: 'Backpropagation',
    category: 'Entrenamiento',
    definition: 'Algoritmo de cálculo que propaga el error cometido por la red desde la capa de salida hacia atrás, ajustando los pesos de cada conexión mediante derivadas parciales.'
  },
  {
    term: 'RLHF',
    category: 'Entrenamiento',
    definition: 'Reinforcement Learning from Human Feedback: técnica para alinear modelos enseñándoles qué respuestas son más útiles, veraces y seguras a partir de evaluaciones de evaluadores humanos.'
  },
  {
    term: 'RAG',
    category: 'Uso',
    definition: 'Retrieval-Augmented Generation: técnica que consulta una base de datos o documentos externos en tiempo real e inyecta esa información en el prompt para evitar alucinaciones.'
  },
  {
    term: 'Inferencia',
    category: 'Uso',
    definition: 'La fase operativa donde el modelo entrenado procesa una entrada del usuario y calcula la predicción o respuesta final sin modificar sus pesos internos.'
  },
  {
    term: 'Sesgo Algorítmico',
    category: 'Ética',
    definition: 'Desviaciones sistemáticas o prejuicios reproducidos por el modelo derivados de datos de entrenamiento desbalanceados o discriminatorios hacia ciertos colectivos.'
  },
  {
    term: 'AGI',
    category: 'Ética',
    definition: 'Inteligencia Artificial General: hipotético sistema de software capaz de igualar o superar la capacidad cognitiva humana en prácticamente cualquier tarea económicamente valiosa.'
  }
];
