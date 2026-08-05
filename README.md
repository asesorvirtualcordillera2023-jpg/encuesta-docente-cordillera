# Encuesta Diagnóstica Moodle - Supabase - archivo único

Este paquete está preparado para GitHub Pages sin carpeta `assets`.

## Archivos

- `index.html`: contiene formulario público, panel administrativo, CSS, configuración y JavaScript propios.
- `supabase.sql`: crea tablas, datos iniciales, funciones RPC, autenticación administrativa y políticas RLS.
- `data/`: respaldo normalizado de docentes, catálogos y preguntas.
- `VALIDACION_BASE.md`: resultados de la auditoría de la planificación.
- `DEPLOY.md`: publicación paso a paso.

## Configuración

1. Cree un proyecto en Supabase.
2. Ejecute `supabase.sql` completo en **SQL Editor**.
3. Cree el usuario administrador en **Authentication > Users**.
4. Inserte su UUID en `perfiles_admin` usando el ejemplo incluido al final del SQL/README original.
5. Abra `index.html` y ubique el bloque `window.APP_CONFIG` cerca del final.
6. Reemplace `SUPABASE_URL` y `SUPABASE_ANON_KEY` con los datos de **Project Settings > API**.
7. No use ni publique la clave `service_role`.

## Uso

- URL principal: formulario docente.
- URL con `#admin`: acceso al panel administrativo.
- El formulario consulta una cédula exacta mediante RPC y no publica la base completa de docentes.
- Modalidad y carrera son selecciones únicas realizadas por el docente.
- Supabase bloquea duplicados y calcula la clasificación en PostgreSQL.

## Dependencias web

El CSS y JavaScript institucional están embebidos en `index.html`. El cliente oficial de Supabase y la utilidad de PDF se cargan desde CDN mediante etiquetas incluidas dentro del mismo HTML; no requieren una carpeta local.
