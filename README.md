# Encuesta de satisfacción Docente

Aplicación web para evaluación docente confidencial del Instituto Superior Universitario Cordillera.

## Estructura

```text
encuesta-satisfaccion-docente/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
└── database/
    └── insert_datos_reales_docentes_encuesta.sql
```

## Publicación en GitHub

1. Crea un repositorio en GitHub.
2. Sube todo el contenido de esta carpeta.
3. Publica el proyecto con GitHub Pages, Vercel, Netlify o Firebase Hosting.

## Configuración Supabase

La conexión se encuentra en:

```text
assets/js/app.js
```

Busca las constantes:

```js
SUPABASE_URL
SUPABASE_KEY
```

No subas nunca la `service_role key`. Para frontend solo se usa la llave pública / anon / publishable.

## Base de datos

En Supabase primero crea las tablas principales. Luego puedes ejecutar:

```text
database/insert_datos_reales_docentes_encuesta.sql
```

## URL pública recomendada

```text
https://encuestas.cordillera.edu.ec
```

El enlace debe mantenerse fijo. El periodo activo se controla desde administración/Supabase.
