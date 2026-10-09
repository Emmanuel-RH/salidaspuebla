# Horarios Movedores | Solistica Base Orizaba

## Instalación
1. Copia la carpeta `horariosmovedores` en la raíz del repositorio `Emmanuel-RH/salidaspuebla`, al mismo nivel que `turnospuebla`.
2. El módulo utiliza los recursos ya existentes: `assets/logo-solistica.svg` y `assets/Blog_TultePark.webp`.
3. En el `index.html` principal del repositorio, cambia el enlace `./horarios-movedores/` por `./horariosmovedores/`.
4. Abre `horariosmovedores/index.html` desde el sitio para ver las tres tarjetas.

## Estructura
- `index.html`: menú con Movedores Planta / CAD / Base.
- `styles.css`: diseño responsive y personalización de fondos degradados.
- `app.js`: navegación semanal, tabla de 7 días y descarga de imagen JPG.
- `planta/index.html`, `cad/index.html`, `base/index.html`: consulta de cada área.
- `planta/datos.js`, `cad/datos.js`, `base/datos.js`: datos independientes.

## Capturar horarios
Edita exclusivamente el archivo `datos.js` del área requerida, con una clave de lunes por semana:

```js
const semanas = {
  '2026-10-05': [
    { nombre: 'EJEMPLO OPERADOR', turnos: [1, 2, 3, 'Vacaciones', 5, null, 'Descanso'] }
  ]
};
```

No se incluyen datos reales: los tres archivos empiezan con `const semanas = {};`.

## Cambiar imágenes de fondo
En `styles.css` cambia `--photo` y `--shade` en `.tile` o establece cada tarjeta, por ejemplo:

```css
.planta{--photo:url('../assets/movedores-planta.webp');--shade:linear-gradient(155deg,#082f5870,#07264add)}
.cad{--photo:url('../assets/movedores-cad.webp');--shade:linear-gradient(155deg,#082f5870,#07264add)}
.base{--photo:url('../assets/movedores-base.webp');--shade:linear-gradient(155deg,#082f5870,#07264add)}
```

**Nota:** Para visualizar el logo y la imagen en la computadora, abre el módulo dentro del repositorio completo, ya que esos recursos se reutilizan de `/assets/`.
