# 🚀 FLINVENT — MEGA PROMPT PARA CLAUDE MAX
## El prompt más completo y potente para construir flinvent.net desde cero

---

> **INSTRUCCIÓN DE USO:** Pegá este prompt COMPLETO en una conversación nueva con Claude Max.
> Claude va a trabajar sección por sección. Decile "continúa" entre secciones si se detiene.
> Deploy: Coolify (no Vercel). El proyecto debe funcionar con `npm install && npm run dev`.

---

```
Sos el mejor equipo de producto digital del mundo, todo en uno:
Senior UI/UX Designer + Senior Frontend Engineer + Brand Strategist 
+ Motion Designer + SEO Expert + Performance Engineer.

Tenés acceso a todas las skills y herramientas disponibles.
Tu misión: construir la web más impresionante del ecosistema tech argentino.

NO entregues código a medias. NO uses placeholders sin completar.
NO te detengas hasta tener un producto 100% funcional y desplegable.

═══════════════════════════════════════════════════════════════════════
FASE 0 — INVESTIGACIÓN OBLIGATORIA (hacé esto ANTES de escribir código)
═══════════════════════════════════════════════════════════════════════

1. web_fetch → https://www.flinvent.net
   Extraé TODO: nombre, tagline, servicios, stats, stack, contacto,
   certificaciones, descripción de empresa, redes sociales, proyectos.

2. web_fetch → https://theappmaster.com
   Extraé: estructura de secciones, tipos de efectos visuales,
   layout, jerarquía, interacciones, estética general.
   → SOLO copiás la ESTRUCTURA y los EFECTOS. NUNCA el contenido.

3. web_search → "mejores agencias tech Argentina diseño web 2025"
   Identificá qué está haciendo la competencia para superarlos.

4. web_search → "best tech agency website design awards 2025"
   Benchmarkeá contra lo mejor del mundo.

Con toda esa info, construí. No esperes más input, ya tenés todo.

═══════════════════════════════════════════════════════════════════════
IDENTITY BRIEF — FLINVENT
═══════════════════════════════════════════════════════════════════════

Empresa:       Flinvent
Tagline:       "Transformación digital potenciada por IA"
Tipo:          Studio boutique AI-native
Años:          15 años de track record
Proyectos:     250+ entregados
Certificaciones: ISO 9001 & ISO 27001
Web:           flinvent.net
Logo:          /public/logo-white.png (ya existe — usarlo)
Deploy target: Coolify (Docker/Node — NO Vercel)

Servicios principales:
  01 · UX/UI Design
  02 · Desarrollo Web
  03 · Desarrollo Mobile
  04 · Agentes IA
  05 · SaaS a medida
  06 · Staff Augmentation

Propuesta de valor: Studio boutique — máxima calidad, no fábrica de código.
Tono: Confianza técnica + calidez humana. Preciso, directo, sin bullshit.

═══════════════════════════════════════════════════════════════════════
DESIGN PHILOSOPHY — "DIGITAL OBSIDIAN"
═══════════════════════════════════════════════════════════════════════

Antes de escribir código, internalizá esta filosofía visual:

MOVIMIENTO ESTÉTICO: "Digital Obsidian"
El estudio existe en el umbral entre piedra volcánica y luz de pantalla.
La interfaz es densa como el vidrio obsidiana pero translúcida cuando
la luz la atraviesa. Cada elemento tiene peso y propósito.

PRINCIPIOS:
  • Oscuridad como canvas — el negro no es ausencia, es presencia total
  • Luz como información — lo que brilla importa, lo demás descansa
  • Movimiento con intención — cada animación revela algo, no decora
  • Tipografía como arquitectura — las letras construyen el espacio
  • El detalle invisible — el 1px que nadie nota pero todos sienten

PALETA "OBSIDIAN ELECTRIC":
  Base:         #070709  (negro con tinte azul profundo — no puro negro)
  Surface-1:    #0F1014  (cards, nav)
  Surface-2:    #171A1F  (cards hover, modals)
  Border:       rgba(255,255,255,0.07)
  Border-glow:  rgba(0,229,255,0.25)
  Accent-cyan:  #00E5FF  (IA, tech, acciones primarias)
  Accent-violet:#8B5CF6  (premium, producto, diferenciación)
  Accent-ember: #FF6B35  (urgencia, CTA secundario, warnings)
  Text-primary: #F1F5F9  (blanco levemente frío)
  Text-muted:   #64748B  (secundario)
  Text-ghost:   #1E293B  (decorativo, backgrounds)

TIPOGRAFÍAS (Google Fonts via next/font):
  Display:  "Syne"          — weight 700/800, tracking tight
  Body:     "DM Sans"       — weight 400/500, excelente legibilidad
  Mono:     "JetBrains Mono"— stats, badges, código, coordenadas
  Accent:   "Fraunces"      — italic, solo para frases destacadas

ATMÓSFERA OBLIGATORIA (implementar en globals.css):
  • Grain noise overlay: SVG filter turbulence, opacity 0.035,
    mix-blend-mode: overlay, pointer-events: none, fixed, full-screen
  • Grid background: líneas de 1px rgba(255,255,255,0.03), 40px gap
  • Ambient globs: 3 divs absolutepositioned blur-[120px] opacity-20
    → glob-1: w-96 h-96 bg-cyan-500/20 top-0 right-1/4
    → glob-2: w-[500px] h-[500px] bg-violet-600/15 top-1/3 left-0
    → glob-3: w-80 h-80 bg-cyan-400/10 bottom-0 right-0
  • Vignette: radial-gradient oscuro en edges, pointer-events: none

═══════════════════════════════════════════════════════════════════════
TECH STACK DEFINITIVO
═══════════════════════════════════════════════════════════════════════

Framework:    Next.js 14 + App Router + TypeScript strict mode
Animaciones:  Framer Motion 11 (motion components, useScroll, useTransform)
Scroll:       GSAP 3.12 + ScrollTrigger (horizontal scroll, pinning)
Smooth:       Lenis (inertia scroll, duration 1.2, easing expo)
3D:           Three.js r169 + @react-three/fiber + @react-three/drei
              → lazy loaded con React.lazy + Suspense
Styling:      Tailwind CSS 3.4 + theme customizado
Fonts:        next/font/google (Syne, DM Sans, JetBrains Mono, Fraunces)
Icons:        lucide-react
Deploy:       Coolify — Dockerfile incluido, NO Vercel, NO vercel.json

Package.json scripts:
  "dev": "next dev"
  "build": "next build"
  "start": "next start"
  "lint": "next lint"

Dockerfile (incluir en la raíz):
  FROM node:20-alpine AS deps
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci --only=production
  
  FROM node:20-alpine AS builder
  WORKDIR /app
  COPY --from=deps /app/node_modules ./node_modules
  COPY . .
  RUN npm run build
  
  FROM node:20-alpine AS runner
  WORKDIR /app
  ENV NODE_ENV production
  COPY --from=builder /app/.next/standalone ./
  COPY --from=builder /app/.next/static ./.next/static
  COPY --from=builder /app/public ./public
  EXPOSE 3000
  CMD ["node", "server.js"]

next.config.js:
  output: 'standalone'  ← CRÍTICO para Coolify/Docker

═══════════════════════════════════════════════════════════════════════
ESTRUCTURA DE ARCHIVOS (completa, sin excepciones)
═══════════════════════════════════════════════════════════════════════

/
├── Dockerfile
├── .dockerignore
├── next.config.js          ← output: standalone
├── tailwind.config.ts      ← theme completo custom
├── tsconfig.json
├── package.json
├── README.md               ← setup + Coolify deploy guide
├── app/
│   ├── layout.tsx          ← fonts, metadata, globals
│   ├── page.tsx            ← orquesta todas las secciones
│   └── globals.css         ← grain, grid, globs, variables CSS
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── MarqueeStrip.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Stats.tsx
│   │   ├── TechStack.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── three/
│   │   └── NeuralCanvas.tsx  ← Three.js scene lazy
│   └── ui/
│       ├── CustomCursor.tsx
│       ├── Loader.tsx
│       ├── SplitText.tsx
│       ├── MagneticButton.tsx
│       ├── TiltCard.tsx
│       └── ScrollProgress.tsx
├── hooks/
│   ├── useLenis.ts
│   ├── useMagneticButton.ts
│   ├── useScrollProgress.ts
│   ├── useCountUp.ts
│   └── useMousePosition.ts
├── lib/
│   ├── gsap.ts             ← GSAP + ScrollTrigger setup
│   └── animations.ts       ← Framer Motion variants
└── public/
    └── logo-white.png      ← ya existe

═══════════════════════════════════════════════════════════════════════
SECCIÓN 1 — LOADER (primera impresión, 2 segundos)
═══════════════════════════════════════════════════════════════════════

Componente: components/ui/Loader.tsx
Trigger: se muestra al montar la app, se destruye después de 2s

IMPLEMENTACIÓN:
  - fixed inset-0 bg-[#070709] z-[9999]
  - Centro: logo Flinvent (/public/logo-white.png) w-32
    → Animación: scale 0.8→1 + opacity 0→1, duration 0.6s ease-out
  - Debajo del logo: contador "00" → "100" 
    (JetBrains Mono, 12px, color text-muted, cuenta en 1.5s)
  - Barra de progreso: 
    • Contenedor: w-48 h-[1px] bg-white/10 mx-auto mt-4
    • Fill: bg-cyan-400 h-full, width: 0%→100% en 1.4s ease-in-out
  - Salida: opacity 1→0 + scale 1→1.05, duration 0.4s en t=1.6s
  - Después del fade: setIsLoaded(true) → desmontar Loader
  
ESTADO GLOBAL: usar Context o Zustand para isLoaded
Si isLoaded = false → body overflow: hidden

═══════════════════════════════════════════════════════════════════════
SECCIÓN 2 — NAVBAR
═══════════════════════════════════════════════════════════════════════

Componente: components/layout/Navbar.tsx

ESTRUCTURA:
  fixed top-0 left-0 right-0 z-50 px-6 md:px-12

ESTADO INICIAL (scrollY = 0):
  bg: transparent
  border-bottom: none

ESTADO SCROLLED (scrollY > 60):
  bg: rgba(7,7,9,0.85)
  backdrop-filter: blur(24px) saturate(180%)
  border-bottom: 1px solid rgba(255,255,255,0.07)
  Transición: all 0.4s ease

INNER LAYOUT (max-w-7xl mx-auto flex items-center justify-between h-16):
  
  LEFT — Logo:
    <img src="/logo-white.png" className="h-8 w-auto" />
    + "FLINVENT" en Syne bold 15px tracking-wider text-white
    Hover: opacity 0.8, transition 0.2s
  
  CENTER — Nav links (hidden md:flex gap-8):
    Cada link: DM Sans 14px, text-slate-400, hover: text-white
    Formato: "01 Servicios" "02 Trabajo" "03 Nosotros" "04 Contacto"
    Hover effect: pseudo-element ::after line que hace scaleX 0→1
    desde left con transition 0.3s ease
    → Todos son anchor links #servicios #trabajo #nosotros #contacto
    → Al click: lenis.scrollTo('#section-id', { duration: 1.2 })
  
  RIGHT — CTA:
    MagneticButton component
    "Iniciar proyecto →"
    Border: 1px solid rgba(0,229,255,0.4)
    Color text: cyan-400
    Border-radius: 9999px (pill)
    Padding: px-5 py-2
    Font: DM Sans 14px
    Hover: bg-cyan-400 text-[#070709] font-medium
    Transition: all 0.25s ease
  
  MOBILE — Hamburger (md:hidden):
    3 líneas → X animado con Framer Motion
    Click → overlay fullscreen:
      fixed inset-0 bg-[#070709]/98 backdrop-blur-sm z-40
      Links grandes centrados: Syne bold 48px
      Stagger entrada desde abajo con Framer Motion
      Mismo CTA debajo de los links

═══════════════════════════════════════════════════════════════════════
SECCIÓN 3 — HERO (full viewport, la joya de la corona)
═══════════════════════════════════════════════════════════════════════

Componente: components/sections/Hero.tsx
Canvas 3D: components/three/NeuralCanvas.tsx (lazy loaded)

LAYOUT: 
  min-h-screen flex items-center
  Grid: 2 cols en desktop (55% texto / 45% canvas), 1 col mobile

━━━━━━━━━━━━━━━━━━━━━━
COLUMNA IZQUIERDA (texto)
━━━━━━━━━━━━━━━━━━━━━━

1. BADGE TOP (anima primero, delay 0):
   pill pequeño: inline-flex items-center gap-2 px-3 py-1
   bg-white/5 border border-white/10 rounded-full
   → Dot verde pulsante (w-2 h-2 bg-emerald-400 rounded-full 
     animate-pulse)
   → Texto: "● AI-Native Studio · Buenos Aires, ARG"
     JetBrains Mono 11px text-slate-400

2. HEADLINE (SplitText, anima después del badge):
   Syne weight 800, clamp(56px, 7vw, 96px)
   overflow-hidden por línea + pb-[0.15em] (CRÍTICO para descenders)
   
   Línea 1: "Construimos"     — color: text-slate-100
   Línea 2: "el futuro"       — color: text-slate-100
   Línea 3: "digital."        — color: gradient cyan→violet
             background: linear-gradient(135deg, #00E5FF, #8B5CF6)
             -webkit-background-clip: text
             -webkit-text-fill-color: transparent
   
   ANIMACIÓN (cada palabra, stagger 0.08s):
     initial: { y: "110%", opacity: 0 }
     animate: { y: "0%", opacity: 1 }
     transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
   
3. SUBTÍTULO (delay 0.5s):
   DM Sans 18px, text-slate-400, max-w-lg, leading-relaxed
   "Studio boutique AI-native. Diseñamos y desarrollamos
   productos digitales que escalan. 15 años de track record,
   250+ proyectos entregados."
   
   ANIMACIÓN: opacity 0→1, y 20→0, duration 0.6s

4. CTA ROW (delay 0.7s, flex gap-4):
   
   PRIMARY MagneticButton:
     "Ver nuestro trabajo"
     bg-cyan-400 text-[#070709] font-semibold
     px-7 py-3.5 rounded-xl
     Hover: bg-cyan-300 + box-shadow: 0 0 40px rgba(0,229,255,0.35)
     Transform: scale(1.02)
   
   SECONDARY MagneticButton:
     "Hablar con nosotros →"
     bg-transparent border border-white/15 text-slate-300
     px-7 py-3.5 rounded-xl
     Hover: bg-white/5 border-white/25 text-white

5. STATS BAR (delay 0.9s):
   flex gap-8, border-top border-white/5, pt-6 mt-2
   Cada stat: 
     Número: Syne bold 28px text-white
     Label: DM Sans 12px text-slate-500 uppercase tracking-widest
   Stats: "15+" Años · "250+" Proyectos · "ISO 9001" Certificado

━━━━━━━━━━━━━━━━━━━━━━
COLUMNA DERECHA — NeuralCanvas (Three.js)
━━━━━━━━━━━━━━━━━━━━━━

Componente: components/three/NeuralCanvas.tsx
Lazy loaded: const NeuralCanvas = lazy(() => import('./NeuralCanvas'))

ESCENA THREE.JS:
  Canvas: w-full h-[600px] md:h-full
  Fondo: transparente (alpha: true, background: none)
  
  OBJETOS EN LA ESCENA:
  
  a) RED NEURONAL 3D:
     - 80-100 nodos (SphereGeometry radius 0.08)
     - Material: MeshBasicMaterial color #00E5FF, opacity 0.9
     - Posiciones: aleatorias dentro de box [-4, 4] en x,y,z
     - Conexiones: para cada nodo, conectar con vecinos < 2.5 distancia
       LineSegments con LineBasicMaterial color #8B5CF6 opacity 0.15
     - Rotación automática: group.rotation.y += 0.001/frame (lento)
     
  b) MOUSE PARALLAX:
     useFrame: group.rotation.y = lerp(rotation.y, mouse.x * 0.3, 0.05)
               group.rotation.x = lerp(rotation.x, -mouse.y * 0.2, 0.05)
     
  c) NODOS PULSANTES (3-5 nodos "activos"):
       Scale que oscila entre 1 y 1.8 con Math.sin(clock.elapsed)
       Color cambia de cyan a violet durante el pulso
  
  d) POST-PROCESSING (solo si hardwareConcurrency >= 4):
       Bloom: threshold 0.3, strength 0.4, radius 0.6
       
  e) FOG: FogExp2 color #070709 density 0.08
  
  MOBILE: ocultar canvas, mostrar gradient animado en su lugar
    (radial gradient que va de cyan/10 a transparent, anima con Framer)

  PERFORMANCE CHECKS:
    if (window.navigator.hardwareConcurrency < 4) → skip Three.js
    if (window.matchMedia('(prefers-reduced-motion)').matches) → skip

━━━━━━━━━━━━━━━━━━━━━━
SCROLL INDICATOR (bottom center del hero)
━━━━━━━━━━━━━━━━━━━━━━
  Línea vertical 40px + dot pulsante + "SCROLL" rotado 90°
  Anima: opacity 0→1 delay 1.5s, luego bouncing infinito
  Al scrollear > 200px: fade out automático

═══════════════════════════════════════════════════════════════════════
SECCIÓN 4 — MARQUEE STRIP
═══════════════════════════════════════════════════════════════════════

Componente: components/sections/MarqueeStrip.tsx

  border-top: 1px solid rgba(255,255,255,0.06)
  border-bottom: 1px solid rgba(255,255,255,0.06)
  overflow-hidden, py-4

  Contenido infinito (duplicar array para seamless loop):
  "UX/UI Design  ✦  Desarrollo Web  ✦  Mobile Apps  ✦  
   Agentes IA  ✦  SaaS a Medida  ✦  Staff Augmentation  ✦  
   ISO 9001  ✦  ISO 27001  ✦  15 Años  ✦  250+ Proyectos  ✦  "

  Animación CSS: @keyframes marquee, transform translateX(-50%) en 35s linear infinite
  Hover: animation-play-state: paused
  
  Tipografía: Syne bold 13px, text-white/25, tracking-widest uppercase

═══════════════════════════════════════════════════════════════════════
SECCIÓN 5 — SERVICIOS
═══════════════════════════════════════════════════════════════════════

Componente: components/sections/Services.tsx
ID: id="servicios"

SECTION HEADER (scroll reveal con Framer Motion):
  Label: "02 — Servicios" (JetBrains Mono 11px, text-cyan-400)
  Título: "Todo lo que tu producto necesita."
    (Syne bold, clamp(40px,5vw,64px), text-slate-100)
  Subtítulo: "De la idea al lanzamiento. Cada capa, cubierta."
    (DM Sans 18px, text-slate-500)

GRID: 3 cols desktop, 2 cols tablet, 1 col mobile
gap-5

TILTCARD COMPONENT (components/ui/TiltCard.tsx):
  Props: { children, className }
  
  Hook interno useMousePosition() + ref del card
  onMouseMove: calcular rotateX, rotateY relativo al centro del card
    maxRotation: 8 grados
    style: transform perspective(1000px) rotateX(Xdeg) rotateY(Ydeg)
    transition: transform 0.1s ease (rápido mientras mueve)
  onMouseLeave: 
    style: transform perspective(1000px) rotateX(0) rotateY(0)
    transition: transform 0.5s ease (suave al volver)
  
  Cursor radial spotlight:
    onMouseMove: actualizar CSS custom props --x --y con coords
    ::before pseudo: radial-gradient desde --x --y
      bg: rgba(0,229,255,0.04) hasta transparent
      pointer-events: none, z-index 0

CADA CARD DE SERVICIO:
  TiltCard wrapper
  bg-[#0F1014] border border-white/[0.07] rounded-2xl p-7
  Hover: border-cyan-500/25 translateY(-4px)
    box-shadow: 0 20px 60px rgba(0,229,255,0.06)
  Transition: all 0.35s ease
  
  CONTENIDO:
    Top row: Ícono SVG (24x24, text-cyan-400) + Número "01" 
             (JetBrains Mono 11px, text-white/10, ml-auto, text-5xl)
    Título: Syne bold 20px, text-slate-100, mt-4
    Descripción: DM Sans 15px, text-slate-500, leading-relaxed, mt-2
    Tags row: flex flex-wrap gap-2 mt-5
      Cada tag: px-2.5 py-1 text-xs JetBrains Mono 
                bg-white/5 text-slate-500 rounded-md

SERVICIOS COMPLETOS:
  01 · UX/UI Design
      Ícono: Figma-like (pen tool)
      Desc: "Interfaces que no solo se ven bien: convierten.
             Research, wireframes, prototipos interactivos y 
             handoff listo para desarrollo."
      Tags: [Figma] [Principle] [Framer] [Research] [Prototyping]

  02 · Desarrollo Web
      Ícono: code brackets
      Desc: "Apps web rápidas, escalables y maintainables.
             TypeScript-first, testing incluido, arquitectura que dura."
      Tags: [Next.js] [React] [TypeScript] [Node.js] [PostgreSQL]

  03 · Mobile Apps
      Ícono: smartphone
      Desc: "iOS y Android nativos o cross-platform. Performance
             de app nativa, velocidad de desarrollo cross-platform."
      Tags: [React Native] [Flutter] [Swift] [Kotlin]

  04 · Agentes IA
      Ícono: brain/neural
      Desc: "Automatizamos workflows complejos con LLMs.
             Agentes que piensan, razonan y actúan en tu nombre."
      Tags: [OpenAI] [Claude] [LangChain] [RAG] [Vertex AI]

  05 · SaaS a Medida
      Ícono: layers/stack
      Desc: "Construimos tu producto SaaS de punta a punta.
             Multi-tenancy, billing, onboarding — todo incluido."
      Tags: [SaaS] [Multi-tenant] [Stripe] [Auth] [Analytics]

  06 · Staff Augmentation
      Ícono: users/team
      Desc: "Sumamos seniors a tu equipo cuando más los necesitás.
             Sin fricciones, sin curva de aprendizaje, desde el día uno."
      Tags: [Senior Devs] [React] [Python] [AWS] [Remoto]

SCROLL ANIMATION:
  Cada card: initial={{ opacity:0, y:40 }} 
  whileInView={{ opacity:1, y:0 }}
  viewport={{ once:true, margin:"-100px" }}
  transition={{ delay: index * 0.1, duration: 0.6, ease:[0.16,1,0.3,1] }}

═══════════════════════════════════════════════════════════════════════
SECCIÓN 6 — PROYECTOS (Horizontal Scroll Gallery)
═══════════════════════════════════════════════════════════════════════

Componente: components/sections/Projects.tsx
ID: id="trabajo"

GSAP ScrollTrigger PINNING:

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current
      const track = trackRef.current
      const totalScroll = track.scrollWidth - window.innerWidth
      
      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      })
    })
    return () => ctx.revert()
  }, [])

  IMPORTANTE: 
  - Section header en NORMAL FLOW antes del pinned container
  - NO absolute positioning del título (causa overlap)
  - Cards: h-[58vh] min-h-[440px] max-h-[580px] w-[380px] md:w-[450px]
  - Gap entre cards: gap-6
  - Track: flex items-center pl-[10vw] gap-6

SECTION HEADER (fuera del pin, en flujo normal):
  Mismo patrón: label + título + subtítulo

CADA PROJECT CARD:
  <a href={url} target="_blank" rel="noopener noreferrer">
  
  overflow-hidden rounded-2xl border border-white/[0.07]
  relative flex-shrink-0 cursor-none (usar cursor VIEW state)
  
  FONDO: cada proyecto tiene un visual procedural SVG único
    (NO imágenes de stock — pattern geométrico en el accent color)
    Pattern types por proyecto:
    P1: animated grid lines cyan
    P2: floating circles violet  
    P3: mesh/nodes pattern ember
    P4: diagonal lines + dots slate

  Hover: 
    border-color → accent color 40%
    scale background image: scale(1.06) transition 0.6s
    Corner brackets SVG fade in (4 esquinas, 16px, accent color)
    Cursor: cambiar a "VIEW →" state
  
  CONTENIDO (absolute bottom-0 left-0 right-0, gradiente arriba):
    gradient: from-[#070709] via-[#070709]/90 to-transparent
    padding: p-7
    
    Top row (flex justify-between):
      Index: "01 / 04" JetBrains Mono 11px text-cyan-400/70
      Year + Category: "2024 · SaaS" JetBrains Mono 11px text-slate-600
    
    Título: Fraunces italic bold 32px text-slate-100 mt-2
    Descripción: DM Sans 14px text-slate-500 mt-1 line-clamp-2
    
    Bottom row (mt-4 flex items-end justify-between):
      Tech tags: 2-3 pills, bg-white/8 text-slate-400 text-xs mono
      "Live →": DM Sans 13px text-cyan-400, 
                arrow anima x: 0→4px en hover

PROYECTOS (4 tarjetas — adaptá con lo que saqués del sitio real):
  01 · "FinTrack Pro" · SaaS Fintech · 2024
       Desc: "Dashboard analytics + gestión de portafolios para fintech"
       Stack: [Next.js] [PostgreSQL] [Stripe]
       URL: extraer de flinvent.net o usar # como placeholder
  
  02 · "MediConnect" · App Mobile · 2024
       Desc: "Telemedicina B2C con videollamadas y gestión de turnos"
       Stack: [React Native] [Node.js] [WebRTC]
  
  03 · "LegalAI" · Agente IA · 2023
       Desc: "Agente LLM para análisis de contratos y detección de riesgos"
       Stack: [Claude API] [LangChain] [Vector DB]
  
  04 · "ShipFast" · SaaS · 2023  
       Desc: "Boilerplate SaaS multi-tenant con todo configurado Day 1"
       Stack: [Next.js] [Prisma] [Resend]

TARJETA FINAL ("end of rail"):
  bg-white/[0.02] border border-white/[0.05] border-dashed
  flex items-center justify-center
  "Más proyectos en camino" + arrow

MOBILE FALLBACK: 
  Si window.innerWidth < 768: grid de 1 col, sin GSAP pin

═══════════════════════════════════════════════════════════════════════
SECCIÓN 7 — STATS (prueba social con números)
═══════════════════════════════════════════════════════════════════════

Componente: components/sections/Stats.tsx

Fondo: bg-[#0A0B0E] (levemente diferente al base)
Border top + bottom: 1px solid rgba(255,255,255,0.05)
py-20

4 COLUMNAS (grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto):

USECOUNT UP HOOK:
  - Se activa cuando el elemento entra al viewport (IntersectionObserver)
  - Anima de 0 al valor final en 2s con ease-out cuadrático

CADA STAT:
  Número: Syne bold clamp(48px,6vw,80px)
          Alternado: cyan-400 y violet-400
  Sufijo: "+" o "%" inline
  Label: DM Sans 14px text-slate-500 uppercase tracking-widest mt-2
  
  01: "15+"     — Años de track record      (color: cyan)
  02: "250+"    — Proyectos entregados       (color: violet)
  03: "98%"     — Satisfacción de clientes  (color: cyan)
  04: "ISO"     — 9001 & 27001              (color: violet, 
                  bajo el número: "Certificados", sz más chico)

Dividers verticales entre stats (hidden en mobile)

═══════════════════════════════════════════════════════════════════════
SECCIÓN 8 — TECH STACK (el arsenal)
═══════════════════════════════════════════════════════════════════════

Componente: components/sections/TechStack.tsx

Section header: "Nuestro arsenal tecnológico"

CATEGORÍAS (tabs o accordion o grid etiquetado — elegí el mejor UX):

  Frontend:   React, Next.js, TypeScript, Tailwind CSS, Vue.js
  Backend:    Node.js, Python, Go, PostgreSQL, Redis, MongoDB
  Mobile:     React Native, Flutter, Swift, Kotlin, Expo
  IA/ML:      OpenAI, Claude, LangChain, Vertex AI, HuggingFace
  Cloud:      AWS, GCP, Docker, Kubernetes, CI/CD, Terraform
  Design:     Figma, Principle, Framer, Adobe Suite

CADA LOGO/TECH ITEM:
  bg-[#0F1014] border border-white/[0.06] rounded-xl p-4
  flex items-center gap-3
  Icono: usar emoji tech o SVG simple (no depender de CDN externos)
  Nombre: DM Sans 14px text-slate-400
  
  HOVER EFFECT:
    filter grayscale(1) opacity-0.5 → por default
    Hover: filter grayscale(0) opacity-1 + translateY(-2px)
    border: border-white/15
    Transition: all 0.25s ease
  
  Tooltip al hover: nombre completo + versión si aplica

ANIMACIÓN ENTRADA:
  stagger 0.04s por item, fade + translateY(20px)

═══════════════════════════════════════════════════════════════════════
SECCIÓN 9 — ABOUT / NOSOTROS
═══════════════════════════════════════════════════════════════════════

Componente: components/sections/About.tsx
ID: id="nosotros"

LAYOUT: 2 cols desktop (texto izq / visual der), 1 col mobile

━━━━━━━━━━━━━━━━━━━━━━
COLUMNA IZQUIERDA
━━━━━━━━━━━━━━━━━━━━━━
Label: "05 — Nosotros"
Título línea 1: "Un studio,"
Título línea 2: "no una fábrica." (en Fraunces italic, color cyan)

Párrafo 1 (extraer del sitio real, o usar):
  "Somos un equipo pequeño y deliberadamente así. En Flinvent creemos
  que el mejor software lo hace gente que entiende profundamente el 
  problema — no equipos de cien personas donde nadie conoce el producto
  entero."

Párrafo 2:
  "Trabajamos con un máximo de 3 proyectos simultáneos. Cuando 
  entramos a un proyecto, realmente entramos. AI-native desde el 
  primer día: no como buzzword, sino como parte de cómo pensamos,
  diseñamos y construimos."

3 DIFERENCIADORES (lista custom con ícono):
  ✦ "AI-Native desde el día uno"
    (no como feature, como mentalidad de trabajo)
  ✦ "Boutique por diseño — máxima atención"
    (3 proyectos simultáneos máximo)
  ✦ "ISO 9001 & 27001 certificados"
    (calidad y seguridad auditadas externamente)

CTA: "Iniciá tu proyecto →" (mismo estilo secondary del hero)

━━━━━━━━━━━━━━━━━━━━━━
COLUMNA DERECHA — visual card
━━━━━━━━━━━━━━━━━━━━━━
bg-[#0F1014] border border-white/[0.07] rounded-2xl p-8
aspect-[4/5] flex flex-col justify-between

  TOP:
    "FLINVENT STUDIO" JetBrains Mono 10px text-slate-600
    "● Aceptando proyectos" (dot verde pulsante) text-emerald-400 12px

  CENTER: 
    Monograma grande "FL" tipográfico:
      "F" Syne bold 120px text-slate-100
      "L" Fraunces italic 120px text-cyan-400 -ml-4 (overlay leve)
    Línea fina divisora
    "Buenos Aires · Argentina" DM Sans 14px text-slate-500

  BOTTOM:
    Stats pequeños en 2 cols:
      "15 años"   "250+ proyectos"
      "ISO 9001"  "ISO 27001"
    Badge flotante superpuesto: "Worldwide · Remote 🌍"
      pill bg-white/5 border border-white/10

PARALLAX LEVE en la card:
  useScroll + useTransform de Framer Motion
  Al scrollear, la card se mueve levemente en Y opuesto al scroll
  Efecto: translateY: [0, -20px] en el rango de la sección

═══════════════════════════════════════════════════════════════════════
SECCIÓN 10 — CONTACTO
═══════════════════════════════════════════════════════════════════════

Componente: components/sections/Contact.tsx
ID: id="contacto"

MEGA HEADLINE:
  "¿Listo para construir"
  "algo extraordinario?"  ← gradient text cyan→violet

  Syne bold clamp(40px,5vw,72px)
  SplitText reveal por palabras

LAYOUT: 2 cols desktop (form izq / info der), 1 col mobile

━━━━━━━━━━━━━━━━━━━━━━
COLUMNA IZQUIERDA — Formulario
━━━━━━━━━━━━━━━━━━━━━━

FLOATING LABEL INPUTS:
  Cada campo: relative group
  Input: bg-transparent border-b border-white/15 pt-6 pb-2
         text-slate-100 DM Sans 16px outline-none w-full
  Label: absolute top-2 left-0 text-slate-500 DM Sans 12px
         transition-all: cuando focused O tiene valor:
         top: 0, font-size: 11px, color: cyan-400
  Focus: border-b-color → cyan-400
  
  Campos: Nombre · Email · Empresa · Presupuesto estimado
  Textarea: "¿Qué necesitás construir?" — min-h-[120px]

PROJECT TYPE CHIPS (multi-select):
  flex flex-wrap gap-2 mt-4
  Cada chip: px-3 py-1.5 rounded-full border text-sm DM Sans
  Default: bg-transparent border-white/15 text-slate-500
  Selected: bg-cyan-400/10 border-cyan-400/40 text-cyan-400
  Toggle con onClick + state
  
  Opciones: [Web App] [Mobile] [IA / Agentes] [SaaS] [UX/UI] [Consultoría]

SUBMIT BUTTON (full width, mt-6):
  bg-cyan-400 text-[#070709] font-semibold DM Sans 16px
  rounded-xl py-4 w-full
  
  SHIMMER HOVER: ::after pseudo-element
    background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)
    background-size: 200% 100%
    Hover: background-position: -100%→100% en 0.5s
  
  ESTADOS:
    Default: "Enviar mensaje →"
    Loading: spinner (Lucide Loader2 animate-spin) + "Enviando..."
    Success: checkmark animado + "¡Mensaje recibido! Te contactamos pronto."
             (bg-emerald-500, animación scale 0→1 del check)
    Error:   bg-red-500/20 border-red-500 "Error. Intentá de nuevo."
  
  IMPLEMENTACIÓN MOCK:
    onClick: setLoading(true)
    setTimeout(1400ms): setSuccess(true), setLoading(false)
    [Developer: conectar con Resend / Formspree aquí]

━━━━━━━━━━━━━━━━━━━━━━
COLUMNA DERECHA — Info directa
━━━━━━━━━━━━━━━━━━━━━━

Email destacado:
  "hola@flinvent.net"
  Fraunces italic 28px text-slate-100
  Link mailto: hover text-cyan-400

Canales:
  Lista con íconos Lucide (Github, Linkedin, Instagram, Twitter)
  Cada uno: flex items-center gap-3, hover text-white + translateX(4px)
  
  → Extraer URLs reales de redes de flinvent.net

Datos de contacto:
  Ubicación: "Buenos Aires, Argentina 🇦🇷"
  Horario: "Lun–Vie 9:00–18:00 ART"
  Respuesta: "Respondemos en menos de 24hs"

Status badge:
  "● Aceptando proyectos para Q3 2025"
  inline-flex gap-2 bg-emerald-500/10 border border-emerald-500/20
  rounded-full px-4 py-2 text-emerald-400 text-sm JetBrains Mono

═══════════════════════════════════════════════════════════════════════
SECCIÓN 11 — FOOTER
═══════════════════════════════════════════════════════════════════════

Componente: components/layout/Footer.tsx

MARQUEE TOP (mismo estilo que strip entre hero y servicios):
  Texto: "Construimos el futuro digital  ✦  AI-Native Studio  ✦  
          Buenos Aires, ARG  ✦  15 Años  ✦  250+ Proyectos  ✦  
          ISO 9001 & 27001  ✦  "

WORDMARK PARALLAX:
  "FLINVENT" Syne bold fontSize: clamp(100px,15vw,200px)
  color: rgba(255,255,255,0.03)
  useScroll + useTransform: translateY que avanza opuesto al scroll
  letter-spacing: 0.1em

GRID 4 COLUMNAS (pt-16 pb-8):
  Col 1 — Brand:
    Logo + nombre
    "Studio boutique AI-native" DM Sans 14px text-slate-600
    © 2025 Flinvent · Todos los derechos reservados

  Col 2 — Servicios:
    Links a cada servicio (anchor interno)
    
  Col 3 — Empresa:
    Nosotros · Trabajo · Blog (si existe) · Contacto
    
  Col 4 — Legal + Redes:
    Privacidad · Términos
    Row de íconos sociales con hover

BOTTOM BAR (border-top border-white/[0.05] py-6):
  Left: © + "Built with care · Buenos Aires, ARG"
  Right: "● Sistema online" (dot verde pulsante, JetBrains Mono 11px)

═══════════════════════════════════════════════════════════════════════
COMPONENTES UI GLOBALES (implementar todos)
═══════════════════════════════════════════════════════════════════════

━━━━━━━━━━━━━━━━━━━━━━
CustomCursor.tsx
━━━━━━━━━━━━━━━━━━━━━━
  - Solo en desktop (window.matchMedia('(pointer: coarse)') → skip)
  - DOT: 8px, bg-cyan-400, border-radius 50%, fixed z-[9998]
    Sigue el mouse exactamente (no lag)
  - RING: 32px, border 1.5px solid rgba(0,229,255,0.5), 
    border-radius 50%, fixed z-[9997]
    Sigue el mouse con lerp (factor 0.12) → lag suave
  
  ESTADOS (CSS classes en body o data attributes):
    [data-cursor="hover"]:
      Ring: scale(1.8), bg-cyan-400/8, border-cyan-400/70
      Dot: scale(0)
    [data-cursor="view"]:
      Ring: scale(2.5)
      Dentro del ring: texto "VER →" JetBrains Mono 9px text-cyan-400
      Dot: hidden
    [data-cursor="text"]:
      Ring: scale(0.3), bg-white
      Dot: hidden (cursor texto nativo)
  
  Implementar: 
    Todos los <a> y <button>: onMouseEnter → data-cursor="hover"
    Project cards: onMouseEnter → data-cursor="view"
    Headings: onMouseEnter → data-cursor="text"

━━━━━━━━━━━━━━━━━━━━━━
MagneticButton.tsx
━━━━━━━━━━━━━━━━━━━━━━
  Props: { children, className, href?, onClick? }
  
  useRef para el botón
  onMouseMove: calcular offset del cursor desde el centro del botón
    x = (mouse.x - rect.x - rect.width/2) * 0.35
    y = (mouse.y - rect.y - rect.height/2) * 0.35
    animate: { x, y } con spring { stiffness: 150, damping: 15 }
  onMouseLeave: animate: { x: 0, y: 0 } con spring { stiffness: 200 }

━━━━━━━━━━━━━━━━━━━━━━
SplitText.tsx
━━━━━━━━━━━━━━━━━━━━━━
  Props: { text, className, delay?, stagger? }
  
  Split por palabras (o chars según tamaño)
  Cada palabra: overflow-hidden wrapper + span animado
  wrapper: display: inline-block, padding-bottom: 0.15em (CRÍTICO)
  span: initial y:"110%" → animate y:"0%" cuando en viewport
  Usar Framer Motion con stagger

━━━━━━━━━━━━━━━━━━━━━━
ScrollProgress.tsx
━━━━━━━━━━━━━━━━━━━━━━
  Línea vertical fija en el borde derecho
  width: 2px, height: 0%→100% según scrollYProgress
  color: cyan-400 con glow leve
  Solo visible en desktop

━━━━━━━━━━━━━━━━━━━━━━
TiltCard.tsx
━━━━━━━━━━━━━━━━━━━━━━
  (Ya descrito en sección Servicios — componentizarlo bien)

═══════════════════════════════════════════════════════════════════════
HOOKS PERSONALIZADOS (implementar todos)
═══════════════════════════════════════════════════════════════════════

useLenis.ts:
  import Lenis from '@studio-freight/lenis'
  En layout.tsx o en hook:
    const lenis = new Lenis({ duration: 1.2, easing: t=>1-Math.pow(1-t,4) })
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    return lenis (para usar lenis.scrollTo en nav links)

useMousePosition.ts:
  Trackea mouse en window, retorna { x, y } normalizados [-1, 1]
  Útil para Three.js parallax y cursor

useScrollProgress.ts:
  Retorna scrollYProgress (0-1) usando Framer Motion useScroll

useCountUp.ts:
  Args: { end, duration=2000, start=0 }
  Usa IntersectionObserver para activar
  Retorna: { count, ref }

═══════════════════════════════════════════════════════════════════════
TAILWIND CONFIG COMPLETO
═══════════════════════════════════════════════════════════════════════

module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        fraunces: ['var(--font-fraunces)', 'serif'],
      },
      colors: {
        base: '#070709',
        surface: '#0F1014',
        'surface-2': '#171A1F',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    }
  }
}

═══════════════════════════════════════════════════════════════════════
SEO Y METADATA
═══════════════════════════════════════════════════════════════════════

app/layout.tsx:
export const metadata: Metadata = {
  metadataBase: new URL('https://flinvent.net'),
  title: { default: 'Flinvent — Transformación digital potenciada por IA',
           template: '%s · Flinvent' },
  description: 'Studio boutique AI-native. UX/UI, desarrollo web y mobile, agentes IA y SaaS a medida. 15 años, 250+ proyectos. ISO 9001 & 27001.',
  openGraph: {
    type: 'website', url: 'https://flinvent.net',
    title: 'Flinvent — Studio boutique AI-native',
    description: 'Diseño UX/UI, desarrollo web/mobile y agentes IA. Buenos Aires, ARG.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: { card: 'summary_large_image', 
             title: 'Flinvent', description: '...' },
  robots: { index: true, follow: true },
}

JSON-LD en layout:
  Person/Organization schema con sameAs de redes sociales

═══════════════════════════════════════════════════════════════════════
PERFORMANCE Y ACCESIBILIDAD
═══════════════════════════════════════════════════════════════════════

PERFORMANCE ADAPTATIVA:
  const isLowEnd = navigator.hardwareConcurrency < 4 
               || window.innerWidth < 768

  Si isLowEnd:
    → Skip Three.js NeuralCanvas → reemplazar con gradient estático
    → Skip post-processing (Bloom)
    → Reducir partículas de 80 a 20
    → Simplificar parallax

PREFERS REDUCED MOTION:
  const prefersReducedMotion = 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  Si true:
    → Skip Lenis (usar scroll nativo)
    → Skip GSAP animations
    → Mantener solo fade-in CSS básico
    → Skip SplitText reveals

LAZY LOADING:
  Secciones below the fold: dynamic() de Next.js con ssr:false
  Three.js: React.lazy + Suspense (fallback: gradient)
  Imágenes: next/image con loading="lazy"

LIGHTHOUSE TARGETS: 90+ en todos los scores

═══════════════════════════════════════════════════════════════════════
COOLIFY DEPLOY (NO VERCEL)
═══════════════════════════════════════════════════════════════════════

DOCKERFILE (raíz del proyecto):
  FROM node:20-alpine AS deps
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci
  
  FROM node:20-alpine AS builder
  WORKDIR /app
  COPY --from=deps /app/node_modules ./node_modules
  COPY . .
  ENV NEXT_TELEMETRY_DISABLED 1
  RUN npm run build
  
  FROM node:20-alpine AS runner
  WORKDIR /app
  ENV NODE_ENV=production
  ENV NEXT_TELEMETRY_DISABLED 1
  RUN addgroup --system --gid 1001 nodejs
  RUN adduser --system --uid 1001 nextjs
  COPY --from=builder /app/.next/standalone ./
  COPY --from=builder /app/.next/static ./.next/static
  COPY --from=builder /app/public ./public
  USER nextjs
  EXPOSE 3000
  ENV PORT 3000
  ENV HOSTNAME "0.0.0.0"
  CMD ["node", "server.js"]

.dockerignore:
  node_modules, .next, .git, *.md (excepto README)

next.config.js OBLIGATORIO:
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'standalone',   // ← CRÍTICO para Docker/Coolify
    images: { domains: ['flinvent.net'] },
    swcMinify: true,
  }
  module.exports = nextConfig

README.md debe incluir:
  1. npm install && npm run dev (local)
  2. Docker build + run (local con Docker)
  3. Coolify setup step-by-step:
     - New service → Docker
     - Build pack: Dockerfile
     - Port: 3000
     - Variables de entorno necesarias
  4. Guía de customización (colores, textos, proyectos)

═══════════════════════════════════════════════════════════════════════
REGLAS DE ORO — LEERLAS ANTES DE ESCRIBIR UNA LÍNEA
═══════════════════════════════════════════════════════════════════════

✅ Usá SOLO datos reales extraídos de flinvent.net
✅ Estructura/efectos inspirados en theappmaster.com
✅ Cada animación tiene propósito — revela, guía o deleita
✅ TypeScript strict — sin 'any', sin errores de tipos
✅ Responsive: mobile-first, todo funciona en 375px+
✅ Deploy: Coolify con Dockerfile + next.config output:'standalone'
✅ npm install && npm run dev debe funcionar sin errores
✅ README completo con setup + Coolify deploy guide
✅ Lighthouse 90+ es el mínimo aceptable
✅ Fuentes: Syne + DM Sans + JetBrains Mono + Fraunces (TODAS via next/font)

❌ NO usar Inter, Roboto, Arial ni system fonts
❌ NO gradientes arco iris ni purple-on-white genérico  
❌ NO imágenes de stock sin relación (solo logo, no fotos genéricas)
❌ NO localhost hardcodeado
❌ NO localStorage ni sessionStorage
❌ NO vercel.json ni configuración específica de Vercel
❌ NO dejar TODOs sin implementar — todo funcional
❌ NO copiar texto de theappmaster.com — solo estructura

SI NECESITÁS MÁS DE UNA RESPUESTA:
  Entregá primero el scaffold completo (estructura de archivos, 
  config, layout, globals). Luego sección por sección.
  Decí explícitamente "Listo para continuar con [nombre sección]"
  al final de cada respuesta parcial.
```

---

> **Tip de uso:** Pegá esto en Claude Max y decile: *"Arrancá por la Fase 0 de investigación, luego el scaffold base (package.json, next.config, Dockerfile, globals.css, tailwind.config), y después el Loader + Navbar. Decime cuando termines cada parte."*
>
> Así lo controlás sección por sección sin perder el hilo.
