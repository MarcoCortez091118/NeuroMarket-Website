# Documentación de cambios: Firebase + prevención de pantalla negra

## Problema reportado
Al cargar el sitio, en algunos entornos la UI quedaba en negro por errores en inicialización de integraciones opcionales.

## Qué se corrigió

### 1) Inicialización de Firebase segura (no fatal)
- Archivo: `lib/firebase.ts`
- Se usa configuración desde `import.meta.env` (`VITE_FIREBASE_*`).
- Firebase solo se inicializa si existen claves mínimas (`apiKey`, `projectId`, `appId`).
- Se añadió `try/catch` alrededor de `initializeApp/getFirestore/getStorage` para evitar que una excepción de Firebase tumbe el render completo.
- Si algo falla, el sistema cae a modo seguro (`app`, `db`, `storage` en `null`) y solo registra aviso en `DEV`.

### 2) Integración de Gemini desacoplada del arranque
- Archivo: `services/blogGenerator.ts`
- Se eliminó dependencia del SDK que podía bloquear inicio y se utiliza llamada HTTP defensiva.
- Si no existe `VITE_GEMINI_API_KEY`/`VITE_API_KEY`, se regresa contenido local de fallback.
- En caso de error en red o parseo, devuelve `null` y no rompe el render.

### 3) Vite y variables de entorno compatibles
- Archivo: `vite.config.ts`
- Se removieron `define` legacy de `process.env.*`.
- El proyecto ahora usa convención nativa de Vite: `import.meta.env.VITE_*`.

## Variables requeridas
En `.env.local`:

```bash
VITE_GEMINI_API_KEY=your_gemini_api_key

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Resultado esperado
- Si Firebase está bien configurado: inicializa normalmente.
- Si Firebase falta o falla: la app **sigue renderizando** sin bloqueo global.
- Si Gemini no está disponible: el blog usa fallback local, sin afectar pantalla inicial.
