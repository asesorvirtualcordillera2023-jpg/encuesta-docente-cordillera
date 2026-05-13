# Registro de Incidentes - paquete de producción

## Archivos

- `index.html`: aplicación lista para publicar como sitio estático.
- `original.html`: respaldo exacto del HTML recibido.
- `firestore.rules`: base de reglas para Firestore. Debes ajustarlas antes de abrir el sistema a usuarios reales.
- `firebase.json`: configuración sugerida para Firebase Hosting.
- `netlify.toml`: configuración opcional si se publica en Netlify.

## Despliegue rápido en Firebase Hosting

1. Crea o selecciona el proyecto Firebase usado por la app.
2. Habilita Authentication > Anonymous.
3. Habilita Firestore Database.
4. Revisa y publica `firestore.rules`.
5. Instala Firebase CLI y ejecuta:

```bash
firebase login
firebase init hosting
firebase deploy
```

Durante `firebase init hosting`, usa esta carpeta como directorio público y conserva `index.html`.

## Notas de producción

- La clave `apiKey` de Firebase en frontend no es una contraseña; la seguridad real depende de Authentication, Firestore Rules y App Check.
- No uses reglas abiertas como `allow read, write: if true` en producción.
- Para un entorno institucional real se recomienda añadir autenticación por correo institucional, roles de agente/administrador y Firebase App Check.

## Valoración en GitHub Pages

La valoración pública está preparada para GitHub Pages mediante URLs con hash (`#rate_ticket=...`). Esto evita problemas de rutas 404 porque GitHub Pages solo sirve archivos estáticos. Revisa `VALORACION_GITHUB.md` para el checklist completo.

Ejemplo de enlace generado:

```text
https://usuario.github.io/registro-incidentes/#rate_ticket=ID_FIREBASE&app_id_ref=registro-incidentes-app
```

