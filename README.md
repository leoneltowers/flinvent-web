# Flinvent Web - Soluciones Digitales Innovadoras

Sitio web moderno para Flinvent con animaciones 3D, componentes interactivos y diseño responsivo.

## Stack Tecnológico

- **Next.js 15** - Framework React de producción
- **Three.js + React Three Fiber** - Gráficos 3D interactivos
- **Framer Motion** - Animaciones suaves
- **Tailwind CSS** - Estilos modernos
- **TypeScript** - Type safety

## Características

✨ Hero 3D con esfera animada y rotación automática
🎨 Cards de servicios con hover interactivo
📊 Portfolio filtrable por categorías
📧 Formulario de contacto funcional
🚀 Optimizado para performance
📱 Diseño completamente responsive

## Instalación Local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deployment en Coolify

1. Conecta tu repo a Coolify
2. Configura variables de entorno si es necesario
3. Coolify detectará Next.js automáticamente
4. Deploy automático en cada push

### Environment Variables

```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.flinvent.net
```

## Estructura de Directorios

```
app/
├── components/     # Componentes React
├── lib/           # Utilidades
├── page.tsx       # Página principal
├── layout.tsx     # Layout root
└── globals.css    # Estilos globales
```

## Componentes

- **Hero3D** - Sección hero con animación 3D
- **Services** - Grid de servicios con animaciones
- **Portfolio** - Proyectos filtrados por categoría
- **Contact** - Formulario de contacto
- **Footer** - Footer con links y info

## Performance

- Image optimization
- Code splitting automático
- CSS optimizado con Tailwind purging
- Animaciones GPU-aceleradas

## Licencia

MIT
