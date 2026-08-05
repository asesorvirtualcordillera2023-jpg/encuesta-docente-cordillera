# Validación de la base

## Fuentes procesadas

- Planificación: `PLAN_ENCUESTA_DIAGNOSTICA_MOODLE_DOCENTES(2).xlsx`.
- Boceto visual y catálogos: `Pegado text.txt`.

## Resultado de la auditoría

| Control | Resultado |
|---|---:|
| Docentes únicos verificables | 138 |
| Docentes declarados en la hoja Resumen | 134 |
| Diferencia | 4 |
| Cédulas duplicadas | 0 |
| Nombres vacíos | 0 |
| Preguntas precargadas | 30 |
| Modalidades únicas | 3 |
| Carreras únicas | 22 |

## Discrepancia conservada

La hoja **Resumen** y el rótulo de la hoja **Docentes únicos** indican 134 docentes, pero las filas verificables contienen 138 identificaciones diferentes. El sistema precarga los 138 registros únicos para no excluir docentes y documenta la diferencia sin modificar silenciosamente la fuente.

## Riesgos eliminados del boceto

- Se retiraron cédulas y nombres del JavaScript público.
- Se reemplazó `localStorage` por Supabase/PostgreSQL.
- Se eliminó la contraseña administrativa incrustada.
- Se retiró la generación de datos simulados.
- El cálculo y la clasificación se realizan dentro de una función transaccional SQL.
- El control de duplicidad se aplica por campaña y docente mediante restricción única.
- Modalidad y carrera permanecen como selecciones únicas realizadas por el docente.
