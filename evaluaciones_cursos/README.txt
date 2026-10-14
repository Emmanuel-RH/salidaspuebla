PLATAFORMA SOLISTICA — RUTAS SIN .HTML

index.html: catálogo
spill-kit/index.html: curso Spill Kit
autoconsumo/index.html: curso Autoconsumo
styles.css y script.js: recursos compartidos
assets/: infografías y logo-solistica.png (añadir logotipo oficial)

Publicar toda esta carpeta en GitHub Pages.
URLs: /evaluaciones_cursos/, /evaluaciones_cursos/spill-kit/, /evaluaciones_cursos/autoconsumo/
Las rutas ../ apuntan al CSS, JS y assets compartidos desde las subcarpetas.
No abrir como file://; usar Live Server o servidor local.


ACTUALIZACIÓN: Sin efecto de arrastre fuera de la página
- Se establece el BODY como contenedor único de desplazamiento vertical (100dvh).
- HTML no se desplaza; overscroll-behavior-y:none impide el rebote elástico en navegadores compatibles.
- Se conserva el pie de página al terminar el contenido y se respeta el área segura en móviles.
- Los cursos conservan sus index.html en spill-kit/ y autoconsumo/.
- Se actualiza scrollTo al nuevo contenedor y se corrige la longitud binaria al crear PDF.
- Nota: algunos gestos/controladores de navegador o SO pueden tener animaciones fuera del control CSS.
