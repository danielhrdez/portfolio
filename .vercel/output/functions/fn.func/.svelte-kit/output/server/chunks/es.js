const page = {
  about: {
    title: "Sobre Mí",
    me: {
      job: "Ingeniero de Software",
      description: [
        "Desarrollador de aplicaciones con experiencia e Ingeniero en Inteligencia Artificial. Experto en crear aplicaciones dinámicas con tecnologías avanzadas, y crear soluciones innovadoras y decisiones basadas en datos. Comprometido con el aprendizaje continuo para ofrecer innovación y practicidad."
      ]
    },
    experience: {
      title: "Experiencia",
      companies: [
        {
          entity: "TITSA",
          url: "https://www.titsa.com/",
          title: "Especialista en Machine Learning",
          from: "02/2023",
          to: "05/2023",
          description: [
            "Destreza demostrada en aprendizaje automático, a través de modelos avanzados que utilizan PyTorch. Logrando niveles de confianza superiores al 95% al predecir el número de clientes.",
            "Resolución del Problema de Enrutamiento de Vehículos Abierto, implementando algoritmos de vanguardia. Estas soluciones no solo abordaron la complejidad del problema, sino que también demostraron la capacidad para aprovechar enfoques de última generación.",
            "Desarrollo de una aplicación web dinámica Full-Stack mediante React.JS y Flask. Proporcionando a los usuarios una vía interactiva para visualizar los algoritmos en acción, mejorando la comprensión y la participación.",
            "Aprovechando los datos mediante un análisis y automatización eficiente con SQL Server. Resultó en la aceleración de procesos críticos y en la facilitación de la toma de decisiones basada en datos.",
            "Siempre integrando las mejores prácticas basadas en metodologías ágiles, asegurando una colaboración armoniosa y un desarrollo iterativo."
          ]
        }
      ]
    },
    education: {
      title: "Estudios",
      degrees: [
        {
          entity: "ULL",
          url: "https://www.ull.es/",
          from: "09/2019",
          to: "07/2023",
          title: "Ingeniería Informática",
          description: [
            "Desarrollo de un agente de bot para juegos de disparos en C# dentro del marco de Unity, demostrando destreza en desarrollo de juegos e IA.",
            "Versatilidad al crear un intérprete y compilador en JavaScript, y habilidad en diseño centrado en el usuario al elaborar sitios web frontend utilizando TypeScript.",
            "Diseño de software de clasificación de texto utilizando procesamiento del lenguaje natural y aprendizaje automático, resaltando experiencia en visión por computadora a través de la implementación de un reconocedor de gestos de mano con Python.",
            "Programación de redes y comunicación en tiempo real construyendo sockets en C/C++.",
            "Capacidades en SQL para la gestión de bases de datos, abarcando así una amplia gama de experiencia técnica."
          ]
        }
      ]
    }
  },
  projects: {
    title: "Proyectos",
    description: "Descripción"
  },
  contact: {
    title: "Contacto",
    mail: "Correo",
    subject: "Asunto",
    subjectPlaceholder: "¡Hola Daniel!",
    message: "Mensaje",
    messagePlaceholder: "Estimado señor,\n...",
    send: "Enviar",
    reset: "Reiniciar"
  }
};
const settings = {
  title: "Configuración",
  mode: "Modo",
  light: "Claro",
  dark: "Oscuro",
  lang: "Lenguaje",
  en: "Inglés",
  es: "Español"
};
const error = {
  notFound: "Página no encontrada",
  notFoundDescription: "La página que estás buscando no existe.",
  notFoundButton: "Volver al inicio"
};
const es = {
  page,
  settings,
  error
};
export {
  es as default,
  error,
  page,
  settings
};
