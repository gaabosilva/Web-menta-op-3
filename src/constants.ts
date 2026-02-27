export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "branding",
    title: "Branding",
    description: "Creamos identidades visuales que cuentan la historia de tu cocina y conectan con tus comensales.",
    icon: "UtensilsCrossed",
  },
  {
    id: "audiovisual",
    title: "Producción Audiovisual",
    description: "Capturamos la esencia de tus platos y la atmósfera de tu local con calidad cinematográfica.",
    icon: "Camera",
  },
  {
    id: "activaciones",
    title: "Activaciones de Marca",
    description: "Experiencias memorables que ponen tu marca en boca de todos.",
    icon: "Sparkles",
  },
  {
    id: "eventos",
    title: "Producción de Eventos",
    description: "Desde cenas clandestinas hasta grandes aperturas, nos encargamos de cada detalle.",
    icon: "Calendar",
  },
  {
    id: "menus",
    title: "Diseño de Menús",
    description: "Ingeniería de menús que equilibra estética y rentabilidad.",
    icon: "BookOpen",
  },
  {
    id: "social-media",
    title: "Social Media",
    description: "Gestión estratégica de comunidades que despiertan el apetito digital.",
    icon: "Instagram",
  },
  {
    id: "conceptualizacion",
    title: "Conceptualización de Espacios",
    description: "Diseñamos la narrativa de tu local para que cada rincón cuente una historia.",
    icon: "Layout",
  },
  {
    id: "asesorias",
    title: "Asesorías",
    description: "Acompañamiento estratégico para optimizar tu negocio gastronómico.",
    icon: "TrendingUp",
  },
];
