/* Datos de ejemplo. Sustituye la propiedad `semanas` con tus horarios reales.
   Formato de fecha de cada semana: AAAA-MM-DD (lunes correspondiente).
   Cada operador tiene siete turnos, de lunes a domingo. null = sin turno. */

const semanas = {
  "2026-10-05": [
    {
      nombre: "RICARDO ORBEA",
      unidad: "T22795",
      turnos: [4, 5, 3, 2, 1, 3, 2]
    },
    {
      nombre: "EMILIO MANZO",
      unidad: "",
      turnos: [5, 2, 1, 3, 2, 1, 4]
    },
    {
      nombre: "OMAR HEREDIA",
      unidad: "",
      turnos: [
        "Vacaciones",
        "Vacaciones",
        "Vacaciones",
        "Vacaciones",
        "Vacaciones",
        4,
        3
      ]
    },
    {
      nombre: "JUAN CARLOS GUTIERREZ",
      unidad: "T22780",
      turnos: [
        "Vacaciones",
        "Vacaciones",
        "Vacaciones",
        "Vacaciones",
        "Vacaciones",
        "Vacaciones",
        "Vacaciones"
      ]
    },
    {
      nombre: "MIGUEL ANGEL MARTINEZ",
      unidad: "T22265",
      turnos: [2, 4, 2, 1, 3, 2, 1]
    }
  ],

  "2026-10-12": [
    {
      nombre: "RICARDO ORBEA",
      unidad: "T22795",
      turnos: [3, 2, 1, 5, 4, 3, 2]
    },
    {
      nombre: "EMILIO MANZO",
      unidad: "",
      turnos: [4, 3, 2, 1, 5, 4, 3]
    },
    {
      nombre: "OMAR HEREDIA",
      unidad: "",
      turnos: [5, 4, 3, 2, 1, 5, 4]
    },
    {
      nombre: "JUAN CARLOS GUTIERREZ",
      unidad: "T22780",
      turnos: [1, 5, 4, 3, 2, 1, 5]
    },
    {
      nombre: "MIGUEL ANGEL MARTINEZ",
      unidad: "T22265",
      turnos: [2, 1, 5, 4, 3, 2, 1]
    }
  ]
};

const nombresDias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const formatoMes = new Intl.DateTimeFormat("es-MX", { month: "long" });
const weekInput = document.querySelector("#week-input");
const weekLabel = document.querySelector("#week-label");
const body = document.querySelector("#schedule-body");
const status = document.querySelector("#status");

function fromISO(iso) { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d, 12); }
function toISO(date) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`; }
function addDays(date, days) { const result = new Date(date); result.setDate(result.getDate()+days); return result; }
function mondayOf(date) { const day = date.getDay(); return addDays(date, -((day+6)%7)); }
function periodText(monday) {
  const sunday = addDays(monday, 6);
  if (monday.getMonth()===sunday.getMonth()) return `${monday.getDate()} al ${sunday.getDate()} de ${formatoMes.format(sunday)}`;
  return `${monday.getDate()} de ${formatoMes.format(monday)} al ${sunday.getDate()} de ${formatoMes.format(sunday)}`;
}
function render(dateValue) {
  const monday = mondayOf(fromISO(dateValue));
  const key = toISO(monday);
  weekInput.value = key;
  weekLabel.textContent = periodText(monday);
  nombresDias.forEach((name, i) => {
    const header = document.querySelector(`#d${i}`);
    header.replaceChildren();
    header.append(document.createTextNode(name));
    const secondary = document.createElement("span");
    const day = addDays(monday,i);
    secondary.textContent = `${day.getDate()} ${formatoMes.format(day).slice(0,3)}`;
    header.append(secondary);
  });
  body.replaceChildren();
  const rows = semanas[key] || [];
  if (rows.length===0) {
    const tr=document.createElement("tr"), td=document.createElement("td");
    td.colSpan=8;td.textContent="No hay horarios publicados para esta semana.";tr.append(td);body.append(tr);
    status.textContent="Selecciona una semana con horarios disponibles.";
    return;
  }
  rows.forEach(({nombre,turnos})=>{
    const tr=document.createElement("tr"), th=document.createElement("th");
    th.scope="row";th.textContent=nombre;tr.append(th);
    for(let i=0;i<7;i++){const td=document.createElement("td");const turno=turnos[i]??"–";td.textContent=turno;if(turno==="Vacaciones")td.classList.add("vacation-cell");tr.append(td);}
    body.append(tr);
  });
  status.textContent="Los números indican el turno asignado; el guion significa sin turno.";
}

document.querySelector("#prev-week").addEventListener("click",()=>render(toISO(addDays(fromISO(weekInput.value),-7))));
document.querySelector("#next-week").addEventListener("click",()=>render(toISO(addDays(fromISO(weekInput.value),7))));
weekInput.addEventListener("change",()=>render(weekInput.value));
const today = new Date();
render(toISO(today));

const sectionButtons = document.querySelectorAll(".nav-tab");
const sectionLinks = document.querySelectorAll("[data-section]");
const homeSection = document.querySelector("#home-section");
const schedulesSection = document.querySelector("#schedules-section");
const recommendationsSection = document.querySelector("#recommendations-section");
function showSection(section) {
    homeSection.hidden = section !== "home";
    schedulesSection.hidden = section !== "schedules";
    recommendationsSection.hidden = section !== "recommendations";
    sectionButtons.forEach((tab) => {
      const isSelected = tab.dataset.section === section;
      tab.classList.toggle("nav-current", isSelected);
      if (isSelected) tab.setAttribute("aria-current", "page");
      else tab.removeAttribute("aria-current");
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
}
sectionLinks.forEach((link) => link.addEventListener("click", () => showSection(link.dataset.section)));
