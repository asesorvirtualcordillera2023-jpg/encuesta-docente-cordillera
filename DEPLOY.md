# Publicación en GitHub Pages

## 1. Preparar Supabase

1. Cree el proyecto.
2. Ejecute `supabase.sql`.
3. Cree el usuario administrador y autorícelo en `perfiles_admin`.
4. Copie la URL del proyecto y la clave pública `anon`.

## 2. Configurar el HTML

Edite `index.html` y reemplace los valores del bloque:

```javascript
window.APP_CONFIG = {
  SUPABASE_URL: 'https://TU-PROYECTO.supabase.co',
  SUPABASE_ANON_KEY: 'TU-CLAVE-ANON-PUBLICA'
};
```

La clave `anon` puede estar en el frontend. La seguridad depende de las políticas RLS incluidas en `supabase.sql`. Nunca coloque `service_role`.

## 3. Subir a GitHub

1. Cree un repositorio público o privado con Pages habilitado.
2. Suba `index.html` a la raíz. Los demás archivos son respaldo e instalación; no son necesarios para que Pages muestre el sitio.
3. En **Settings > Pages**, seleccione `Deploy from a branch`, rama `main` y carpeta `/root`.
4. Abra la URL asignada por GitHub Pages.

## Rutas

- Formulario: `https://USUARIO.github.io/REPOSITORIO/`
- Administración: `https://USUARIO.github.io/REPOSITORIO/#admin`

## Supabase Authentication

Agregue la URL de GitHub Pages en **Authentication > URL Configuration > Site URL / Redirect URLs**.
