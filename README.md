# Salidas a Puebla

Página web responsiva para consultar los turnos semanales de los operadores que realizan salidas a Puebla. No necesita servidor ni dependencias.

## Publicar en GitHub Pages

1. Crea un repositorio público en GitHub.
2. Sube `index.html`, `styles.css` y `app.js` a la raíz del repositorio.
3. En **Settings → Pages → Build and deployment**, selecciona **Deploy from a branch**.
4. Elige la rama `main`, carpeta `/(root)` y pulsa **Save**.
5. La URL de publicación aparecerá en la sección Pages.

## Actualizar los horarios

Edita el objeto `semanas` al inicio de `app.js`. Cada clave es la fecha **del lunes** en formato `AAAA-MM-DD`. Los 7 valores de `turnos` corresponden a lunes, martes, miércoles, jueves, viernes, sábado y domingo. Usa `null` cuando el operador no tenga salida.

```js
"2026-10-12": [
  { nombre: "Juan Pérez", turnos: [1, 2, 3, null, 1, 2, null] }
]
```

La información incluida es demostrativa. **Importante:** GitHub Pages es un sitio público si el repositorio se publica públicamente. No incluyas datos personales o información operativa confidencial sin autorización; para control de acceso se necesita autenticación y una fuente de datos protegida.
