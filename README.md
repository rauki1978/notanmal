# #NoTanMal - Web oficial

Web completa para la marca #NoTanMal: humor inteligente y productos físicos para gente sensata.

## 🎯 Sobre el proyecto

#NoTanMal es una marca de humor inteligente y productos físicos para gente sensata que está cansada del postureo, las promesas vacías y los gurús de pacotilla. Esta web es el hogar digital de la marca.

**Stack tecnológico:**
- ⚡ Astro (última versión estable)
- 🎨 Tailwind CSS
- 📝 Markdown para contenido
- 🔤 Tipografía: Inter (Google Fonts)

## 🚀 Inicio rápido

### Prerequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:4321
```

## 📁 Estructura del proyecto

```text
/
├── public/              # Archivos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── layouts/         # Layouts base
│   │   ├── BaseLayout.astro      # Layout principal con header/footer
│   │   └── PageLayout.astro      # Layout para páginas internas
│   │
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.astro          # Navegación principal
│   │   ├── Footer.astro          # Footer del sitio
│   │   ├── HeroHome.astro        # Hero de la home
│   │   ├── CTASection.astro      # Sección de CTA/Newsletter
│   │   ├── QuoteGrid.astro       # Grid de frases
│   │   ├── PostCard.astro        # Card de post
│   │   ├── ProductCard.astro     # Card de producto
│   │   └── ManifestoBlock.astro  # Bloque de manifiesto
│   │
│   ├── pages/           # Páginas del sitio
│   │   ├── index.astro           # Home
│   │   ├── universo.astro        # Página Universo
│   │   ├── libro.astro           # Página del Libro
│   │   ├── tienda.astro          # Tienda
│   │   ├── posts.astro           # Listado de posts
│   │   ├── posts/[slug].astro    # Post individual
│   │   ├── contacto.astro        # Formulario de contacto
│   │   └── 404.astro             # Página de error 404
│   │
│   ├── content/         # Colecciones de contenido
│   │   ├── config.ts             # Configuración de colecciones
│   │   ├── posts/                # Posts del blog (.md)
│   │   ├── productos/            # Productos (.json)
│   │   └── frases/               # Frases (.json)
│   │
│   └── styles/
│       └── global.css            # Estilos globales y variables
│
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.mjs  # Configuración de Tailwind
├── tsconfig.json        # Configuración de TypeScript
└── package.json
```

## 🎨 Diseño y estilo

### Paleta de colores

- **Fondo:** `#f9fafb` (casi blanco)
- **Texto principal:** `#111827` (gris muy oscuro)
- **Color de marca:** `#facc15` (amarillo pálido)
- **Color secundario:** `#a855f7` (morado suave)
- **Texto muted:** `#6b7280` (gris medio)

### Principios de diseño

- ✨ Mucho espacio en blanco
- 🔲 Bordes redondeados sutiles (`rounded-lg`, `rounded-xl`)
- 🎭 Sombras muy ligeras
- 📱 Mobile-first y completamente responsive
- ♿ Accesibilidad prioritaria

## 📝 Gestión de contenido

### Crear un nuevo post

1. Crear archivo `.md` en `src/content/posts/`
2. Añadir frontmatter:

```markdown
---
title: "Título del post"
excerpt: "Resumen breve del post"
category: "Categoría"
date: "2025-01-15"
author: "#NoTanMal"
---

# Contenido del post en Markdown
```

### Añadir un producto

1. Crear archivo `.json` en `src/content/productos/`
2. Estructura:

```json
{
  "name": "Nombre del producto",
  "description": "Descripción del producto",
  "price": 24.90,
  "category": "Categoría",
  "available": true
}
```

### Añadir una frase

1. Crear archivo `.json` en `src/content/frases/`
2. Estructura:

```json
{
  "text": "La frase ingeniosa",
  "context": "Contexto opcional"
}
```

## 🧞 Comandos disponibles

| Comando | Acción |
|:--------|:-------|
| `npm install` | Instalar dependencias |
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Build de producción en `./dist/` |
| `npm run preview` | Vista previa del build |
| `npm run astro check` | Verificar tipos TypeScript |

## 🚢 Despliegue

### Build de producción

```bash
npm run build
```

El sitio estático se genera en `./dist/`

### Opciones de hosting

Este sitio funciona en cualquier hosting de sitios estáticos:

- **Netlify:** Configuración automática
- **Vercel:** Deploy directo desde GitHub
- **Cloudflare Pages:** Build command: `npm run build`, output: `dist`
- **GitHub Pages:** Requiere configuración de base path

## 🎯 Características implementadas

- ✅ Diseño minimalista y responsive
- ✅ Sistema de Content Collections de Astro
- ✅ Blog con posts en Markdown
- ✅ Catálogo de productos
- ✅ Sistema de frases aleatorias
- ✅ Navegación sticky con menú hamburguesa
- ✅ SEO básico (meta tags, Open Graph)
- ✅ Página 404 personalizada
- ✅ Formularios de contacto y newsletter
- ✅ Compartir en redes sociales
- ✅ Accesibilidad (HTML semántico, ARIA labels)

## 📋 Checklist de calidad

- ✅ Proyecto Astro configurado correctamente
- ✅ Tailwind funcionando con colores de marca
- ✅ Todas las páginas creadas y navegables
- ✅ Header y Footer en todas las páginas
- ✅ Contenido del blueprint implementado fielmente
- ✅ Responsive en móvil, tablet y desktop
- ✅ 3 posts de ejemplo funcionando
- ✅ Página 404 personalizada
- ✅ README con instrucciones

## 🎨 Filosofía de diseño

El diseño de #NoTanMal se basa en tres principios:

1. **Minimalismo:** Menos es más. Espacios generosos, diseño limpio.
2. **Ironía calibrada:** Humor inteligente sin caer en el cinismo.
3. **Anti-postureo:** Cero filtros, cero poses. Solo honestidad.

## 📞 Soporte

Si tienes problemas o preguntas sobre el desarrollo de esta web:

- 📧 Email: dev@notanmal.com
- 🐛 Issues: [GitHub Issues](enlace-al-repo)
- 💬 Documentación de Astro: https://docs.astro.build

## 📄 Licencia

© 2025 #NoTanMal. Todos los derechos reservados.

---

**Nota:** Este proyecto usa Astro 5+ con Tailwind CSS 4+. Asegúrate de tener las versiones correctas instaladas.

*Sobrevivir ya es logro. Construir una web así... también.* 🚀
