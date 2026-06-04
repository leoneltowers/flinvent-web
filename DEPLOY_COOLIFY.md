# Deployment a Coolify

## Pasos para deployar a Coolify

### 1. Conectar el repositorio

1. Ve a Coolify dashboard
2. Crea nuevo "Application"
3. Selecciona "Git" como fuente
4. Autentícate con GitHub (o tu proveedor)
5. Selecciona el repo `flinvent-web`
6. Elige la rama `main`

### 2. Configurar el servicio

- **Build pack:** Detectará automáticamente como Next.js
- **Build command:** `npm run build` (automático)
- **Start command:** `npm start` (automático)

### 3. Variables de entorno (si aplica)

En Coolify Settings → Environment:

```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.flinvent.net
```

### 4. Port

Exponer puerto `3000`

### 5. Deploy

Coolify va a:
1. Clonar el repo
2. Instalar dependencias (`npm install`)
3. Compilar (`npm run build`)
4. Iniciar el servidor (`npm start`)

### Monitoreo

- Accede a tu aplicación vía Coolify URL
- Logs en tiempo real en Coolify dashboard
- Redeploy automático en cada push a `main`

## Troubleshooting

### Error: "Module not found"
- Asegurate que `package-lock.json` esté en el repo
- Run `npm ci` en dev

### Build lento
- Coolify cachea las dependencias
- Primera ejecución puede tomar 5-10 min

### Canvas 3D no funciona
- Verifica que `next.config.js` tiene `images.unoptimized: true`
- Asegurate que el navegador soporta WebGL
