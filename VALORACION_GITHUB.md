# Valoración pública en GitHub Pages

La valoración funciona en GitHub Pages usando un enlace con hash:

```text
https://usuario.github.io/registro-incidentes/#rate_ticket=ID_FIREBASE&app_id_ref=registro-incidentes-app
```

GitHub Pages no ejecuta servidor backend ni rutas dinámicas. Por eso la app usa `#rate_ticket=...`; el navegador carga `index.html` y JavaScript abre la pantalla pública de valoración.

## Checklist obligatorio

1. Publica `index.html` en GitHub Pages.
2. Incluye el archivo `.nojekyll` en la raíz del sitio publicado.
3. En Firebase Console, habilita **Authentication > Sign-in method > Anonymous**.
4. En Firebase Authentication, agrega tu dominio de GitHub Pages en **Authorized domains**:
   - `usuario.github.io`
   - o tu dominio personalizado, si usas uno.
5. Publica las reglas de `firestore.rules`.
6. En Google Cloud Console, si restringes la API key por HTTP referrer, agrega:
   - `https://usuario.github.io/*`
   - `https://usuario.github.io/registro-incidentes/*`

## Prueba recomendada

1. Entra al panel desde la URL real de GitHub Pages.
2. Crea un ticket y márcalo como **Resuelto**.
3. En **Registros**, presiona el ícono de estrella.
4. Copia el enlace generado.
5. Ábrelo en una ventana incógnita o en otro navegador.
6. Selecciona estrellas y envía la valoración.
7. Vuelve al panel; debe aparecer la calificación en el ticket.

## Nota de seguridad

Con autenticación anónima, cualquier persona con un enlace válido puede abrir la pantalla de valoración. Para una producción más estricta, conviene migrar agentes a login institucional y dejar a los usuarios públicos únicamente permiso de actualización sobre el campo `valoracion`.
