const products = [
  {
    id: 1,
    name: "Secure Login React",
    category: "Authentication",
    type: "Código",
    price: 29.9,
    level: "Beginner",
    technologies: ["React", "JavaScript"],
    description:
      "Componente de inicio de sesión en React con validaciones básicas y buenas prácticas de seguridad.",
    featured: true,
    image:
      "https://res.cloudinary.com/erlandruiz/image/upload/v1790741392/twsdccykw6nzwebjo0cm.png",
  },
  {
    id: 2,
    name: "JWT Starter Kit",
    category: "Authentication",
    type: "Código",
    price: 39.9,
    level: "Intermediate",
    technologies: ["Node.js", "Express", "JWT"],
    description:
      "Kit inicial para implementar autenticación mediante JSON Web Tokens en una API.",
    featured: true,
    image:
      "https://res.cloudinary.com/erlandruiz/image/upload/v1790741431/kdswdvkrbh3ykk2qwfvh.png",
  },
  {
    id: 3,
    name: "RBAC Starter",
    category: "Access Control",
    type: "Código",
    price: 44.9,
    level: "Intermediate",
    technologies: ["Node.js", "JWT", "RBAC"],
    description:
      "Ejemplo práctico para implementar control de acceso basado en roles dentro de una aplicación.",
    featured: true,
    image:
      "https://res.cloudinary.com/erlandruiz/image/upload/v1790741455/cbfrlfpbidswqli9cld1.png",
  },
  {
    id: 4,
    name: "Audit Logging Starter",
    category: "Monitoring",
    type: "Código",
    price: 34.9,
    level: "Intermediate",
    technologies: ["Node.js", "Express", "Logs"],
    description:
      "Sistema inicial para registrar acciones importantes realizadas dentro de una aplicación.",
    featured: false,
    image:
      "https://res.cloudinary.com/erlandruiz/image/upload/v1790741490/bwdsl4iayfypivulwa4m.png",
  },
  {
    id: 5,
    name: "API Security Checklist",
    category: "API Security",
    type: "PDF",
    price: 14.9,
    level: "Beginner",
    technologies: ["OWASP", "API", "Security"],
    description:
      "Checklist práctico con recomendaciones para revisar la seguridad básica de una API.",
    featured: true,
    image:
      "https://res.cloudinary.com/erlandruiz/image/upload/v1790741511/km4p8gim8ihe74umelq3.png",
  },
  {
    id: 6,
    name: "Password Security Guide",
    category: "Security Guides",
    type: "PDF",
    price: 12.9,
    level: "Beginner",
    technologies: ["Passwords", "Hashing", "Security"],
    description:
      "Guía introductoria sobre almacenamiento y manejo seguro de contraseñas.",
    featured: false,
    image:
      "https://res.cloudinary.com/erlandruiz/image/upload/v1790741534/rgzuzbm7tp9i89yo6uas.png",
  },
  {
    id: 7,
    name: "Security Headers Config",
    category: "Web Security",
    type: "TXT",
    price: 9.9,
    level: "Beginner",
    technologies: ["HTTP", "Headers", "Web"],
    description:
      "Archivo de referencia con configuraciones básicas de cabeceras de seguridad para aplicaciones web.",
    featured: false,
    image:
      "https://res.cloudinary.com/erlandruiz/image/upload/v1790741556/nlmh64my0mchrthwpvvc.png",
  },
  {
    id: 8,
    name: "Secure API Bundle",
    category: "Bundles",
    type: "Bundle",
    price: 69.9,
    level: "Advanced",
    technologies: ["Node.js", "Express", "JWT", "OWASP"],
    description:
      "Paquete de recursos para construir y revisar una API aplicando prácticas de desarrollo seguro.",
    featured: true,
    image:
      "https://res.cloudinary.com/erlandruiz/image/upload/v1790741575/vrmdrbusccle0iirda4m.png",
  },
];

export default products;