/* Datos de ejemplo. Sustituye la propiedad `semanas` con tus horarios reales.
   Formato de fecha de cada semana: AAAA-MM-DD (lunes correspondiente).
   Cada operador tiene siete turnos, de lunes a domingo. null = sin turno. */

const semanas = {
  "2026-10-05": [
    {
      nombre: "DANIEL OJEDA MIXTECA",
      unidad: "",
      turnos: ["Descanso", "Noche", "Noche", "Noche", "Noche", "Noche", "Noche"]
    },
    {
      nombre: "OSCAR ALONSO GONZALEZ BRIGADA",
      unidad: "",
      turnos: ["Mañana", "Mañana", "Mañana", "Mañana", "Mañana", "Mañana", "Mañana"]
    },
    {
      nombre: "HECTOR URIEL AVENDAÑO CORDERO",
      unidad: "",
      turnos: ["Tarde", "Descanso", "Base 1°", "Base 1°", "Base 1°", "Base 1°", "Base 1°"]
    },
    {
      nombre: "MARCO ANTONIO ALVA MARTINEZ",
      unidad: "",
      turnos: ["Noche", "Tarde", "Tarde", "Tarde", "Tarde", "Tarde", "Tarde"]
    },
    {
      nombre: "EDUARDO JOEL MARTINEZ LUNA",
      unidad: "",
      turnos: ["Base 1°", "Base 1°", "Mañana", "Mañana", "Mañana", "Mañana", "Mañana"]
    },
    {
      nombre: "BEATRIZ ADRIANA ARENAS HERNANDEZ",
      unidad: "",
      turnos: ["Base 2°", "Base 2°", "Base 2°", "Base 2°", "Base 2°", "Base 2°", "Descanso"]
    },
    {
      nombre: "ELIUD ROMERO VALLEJO",
      unidad: "",
      turnos: ["Base 2°", "Base 2°", "Tarde", "Tarde", "Tarde", "Tarde", "Tarde"]
    },
    {
      nombre: "JONATHAN UGARTE PALMA",
      unidad: "",
      turnos: ["Base 1°", "Base 1°", "Base 1°", "Base 1°", "Base 1°", "Descanso", "Base 2°"]
    }
  ]
};

const nombresDias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const formatoMes = new Intl.DateTimeFormat("es-MX", { month: "long" });
const weekInput = document.querySelector("#week-input");
const weekLabel = document.querySelector("#week-label");
const body = document.querySelector("#schedule-body");
const status = document.querySelector("#status");
const downloadButton = document.querySelector("#download-table");
const downloadLabel = downloadButton?.querySelector(".download-label");

function fromISO(iso) { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d, 12); }
function toISO(date) { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`; }
function addDays(date, days) { const result = new Date(date); result.setDate(result.getDate() + days); return result; }
function mondayOf(date) { const day = date.getDay(); return addDays(date, -((day + 6) % 7)); }
function periodText(monday) {
  const sunday = addDays(monday, 6);
  if (monday.getMonth() === sunday.getMonth()) return `${monday.getDate()} al ${sunday.getDate()} de ${formatoMes.format(sunday)}`;
  return `${monday.getDate()} de ${formatoMes.format(monday)} al ${sunday.getDate()} de ${formatoMes.format(sunday)}`;
}

function monthShort(date) {
  return formatoMes.format(date).slice(0, 3);
}

function getTurnoStyle(turno) {
  const value = String(turno ?? "").trim().toLowerCase();
  if (value === "vacaciones") return { className: "vacation-cell", border: "#15835b", background: "#e9f8f1", text: "#15835b" };
  if (value === "descanso" || value === "incapacidad") return { className: "absence-cell", border: "#d49b00", background: "#fff7d6", text: "#9a6b00" };
  return null;
}

function textWidth(ctx, text) {
  return ctx.measureText(String(text)).width;
}

function fitTableText(element, text, maxSize = 16, minSize = 9) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const availableWidth = element.clientWidth - 8;
  let size = maxSize;
  do {
    ctx.font = `700 ${size}px Arial`;
    size -= 0.5;
  } while (size >= minSize && ctx.measureText(String(text)).width > availableWidth);
  element.style.fontSize = `${Math.max(size + 0.5, minSize)}px`;
  element.style.whiteSpace = "nowrap";
}

function wrapText(ctx, text, maxWidth) {
  const words = String(text).split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (textWidth(ctx, testLine) <= maxWidth || !line) {
      line = testLine;
    } else {
      lines.push(line);
      line = word;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  const corner = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + corner, y);
  ctx.arcTo(x + width, y, x + width, y + height, corner);
  ctx.arcTo(x + width, y + height, x, y + height, corner);
  ctx.arcTo(x, y + height, x, y, corner);
  ctx.arcTo(x, y, x + width, y, corner);
  ctx.closePath();
}

function fillCellText(ctx, text, x, y, width, height, options = {}) {
  const lineHeight = options.lineHeight || 18;
  const maxWidth = width - 16;
  const maxFontSize = Number.parseInt((options.font || "700 15px Arial").match(/\d+/)?.[0] || "15", 10);
  let fontSize = maxFontSize;
  ctx.font = options.font || "700 15px Arial";
  while (fontSize > 9 && textWidth(ctx, text) > maxWidth) {
    fontSize -= 0.5;
    ctx.font = `${options.font?.startsWith("400") ? "400" : "700"} ${fontSize}px Arial`;
  }
  const totalHeight = lineHeight;
  const currentY = y + (height - totalHeight) / 2 + lineHeight - 4;
  ctx.fillStyle = options.color || "#101d32";
  ctx.textAlign = "center";
  ctx.fillText(String(text), x + width / 2, currentY);
}

function loadExportLogo() {
  return new Promise((resolve, reject) => {
    const logo = new Image();
    logo.onload = () => resolve(logo);
    logo.onerror = reject;
    logo.src = "../Recursos_Imagenes/SVG-_15-SOLISTICA%20V1%20COLOR%201.svg?v=202610091150";
  });
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
    const day = addDays(monday, i);
    secondary.textContent = `${day.getDate()} ${formatoMes.format(day).slice(0, 3)}`;
    header.append(secondary);
  });
  body.replaceChildren();
  const rows = semanas[key] || [];
  if (rows.length === 0) {
    const tr = document.createElement("tr"), td = document.createElement("td");
    td.colSpan = 8; td.textContent = "No hay horarios publicados para esta semana."; tr.append(td); body.append(tr);
    status.textContent = "Selecciona una semana con horarios disponibles.";
    return;
  }
  rows.forEach(({ nombre, turnos }) => {
    const tr = document.createElement("tr"), th = document.createElement("th");
    th.scope = "row"; th.textContent = nombre; tr.append(th);
    for (let i = 0; i < 7; i++) { const td = document.createElement("td"); const turno = turnos[i] ?? "–"; td.textContent = turno; const turnoStyle = getTurnoStyle(turno); if (turnoStyle) td.classList.add(turnoStyle.className); tr.append(td); }
    body.append(tr);
    tr.querySelectorAll("td").forEach((td) => fitTableText(td, td.textContent));
  });
  status.textContent = "Los números indican el turno asignado; el guion significa sin turno.";
}

async function downloadScheduleTable() {
  const label = weekInput.value || toISO(mondayOf(new Date()));
  const areaName = document.querySelector("#main-title")?.textContent.split("|").pop().trim() || "Área";
  const fileName = `Semana ${weekLabel.textContent || label} Horario ${areaName}.jpg`;
  const originalLabel = downloadLabel ? downloadLabel.textContent : "Descargar Turno";

  if (downloadButton) {
    downloadButton.disabled = true;
    if (downloadLabel) downloadLabel.textContent = "Generando...";
  }

  status.textContent = "Generando imagen del horario...";

  try {
    const rows = semanas[label] || [];
    if (!rows.length) {
      status.textContent = "No hay horarios publicados para esta semana.";
      return;
    }

    const monday = fromISO(label);
    const dayHeaders = nombresDias.map((name, index) => {
      const day = addDays(monday, index);
      return `${name}\n${day.getDate()} ${monthShort(day)}`;
    });
    const title = `Horario ${weekLabel.textContent || label}`;
    const canvas = document.createElement("canvas");
    const scale = 2;
    const margin = 32;
    const tableX = margin;
    const tableY = 120;
    const rowHeight = 64;
    const headerHeight = 68;
    const firstColWidth = 240;
    const dayColWidth = 126;
    const tableWidth = firstColWidth + dayColWidth * 7;
    const tableHeight = headerHeight + rowHeight * rows.length;
    const footerHeight = 42;
    canvas.width = (tableWidth + margin * 2) * scale;
    canvas.height = (tableY + tableHeight + margin + footerHeight) * scale;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      status.textContent = "No se pudo generar la imagen del horario.";
      return;
    }

    ctx.scale(scale, scale);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width / scale, canvas.height / scale);

    ctx.fillStyle = "#0f1d33";
    ctx.textAlign = "left";
    ctx.font = "700 28px Arial";
    ctx.fillText("Horario CAD/BASE", 32, 42);
    ctx.font = "700 22px Arial";
    ctx.fillText(title, 32, 72);

    const logo = await loadExportLogo();
    const logoWidth = 150;
    const logoRatio = logo.naturalWidth && logo.naturalHeight ? logo.naturalHeight / logo.naturalWidth : 0.34;
    const logoHeight = logoWidth * logoRatio;
    ctx.drawImage(logo, margin + tableWidth - logoWidth, 20, logoWidth, logoHeight);

    const totalWidth = firstColWidth + dayColWidth * 7;
    drawRoundedRect(ctx, tableX, tableY, totalWidth, tableHeight, 16);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.strokeStyle = "#dfe8f2";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.save();
    ctx.beginPath();
    drawRoundedRect(ctx, tableX, tableY, totalWidth, tableHeight, 16);
    ctx.clip();

    ctx.fillStyle = "#eef4fb";
    ctx.fillRect(tableX, tableY, totalWidth, headerHeight);

    ctx.strokeStyle = "#dfe8f2";
    ctx.lineWidth = 1;
    let currentX = tableX;
    ctx.strokeRect(tableX, tableY, firstColWidth, tableHeight);
    ctx.fillStyle = "#101d32";
    ctx.font = "700 15px Arial";
    ctx.textAlign = "left";
    ctx.fillText("Operador", tableX + 16, tableY + 28);

    currentX += firstColWidth;
    dayHeaders.forEach((header, index) => {
      ctx.strokeRect(currentX, tableY, dayColWidth, tableHeight);
      const [lineOne, lineTwo] = header.split("\n");
      ctx.fillStyle = "#101d32";
      ctx.font = "700 14px Arial";
      ctx.textAlign = "center";
      ctx.fillText(lineOne, currentX + dayColWidth / 2, tableY + 24);
      ctx.fillStyle = "#627188";
      ctx.font = "400 12px Arial";
      ctx.fillText(lineTwo, currentX + dayColWidth / 2, tableY + 44);
      currentX += dayColWidth;
    });

    rows.forEach((row, rowIndex) => {
      const y = tableY + headerHeight + rowIndex * rowHeight;
      ctx.fillStyle = rowIndex % 2 === 0 ? "#ffffff" : "#fbfdff";
      ctx.fillRect(tableX, y, totalWidth, rowHeight);
      ctx.strokeStyle = "#dfe8f2";
      ctx.strokeRect(tableX, y, firstColWidth, rowHeight);
      ctx.font = "700 14px Arial";
      ctx.textAlign = "left";
      ctx.fillStyle = "#101d32";
      const nameLines = wrapText(ctx, row.nombre, firstColWidth - 16);
      nameLines.slice(0, 2).forEach((line, lineIndex) => {
        ctx.fillText(line, tableX + 16, y + 24 + lineIndex * 17);
      });

      row.turnos.forEach((turno, dayIndex) => {
        const x = tableX + firstColWidth + dayColWidth * dayIndex;
        ctx.strokeStyle = "#dfe8f2";
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, dayColWidth, rowHeight);
        const turnoStyle = getTurnoStyle(turno);
        if (turnoStyle) {
          ctx.fillStyle = turnoStyle.background;
          drawRoundedRect(ctx, x + 8, y + 14, dayColWidth - 16, rowHeight - 28, 10);
          ctx.fill();
          ctx.strokeStyle = turnoStyle.border;
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.fillStyle = turnoStyle.text;
          ctx.font = "700 13px Arial";
          ctx.textAlign = "center";
          ctx.fillText(String(turno ?? "–"), x + dayColWidth / 2, y + rowHeight / 2 + 5);
        } else {
          ctx.fillStyle = "#101d32";
          ctx.font = "700 16px Arial";
          ctx.textAlign = "center";
          ctx.fillText(String(turno ?? "–"), x + dayColWidth / 2, y + rowHeight / 2 + 6);
        }
      });
    });

    ctx.restore();
    ctx.fillStyle = "#627188";
    ctx.font = "400 14px Arial";
    ctx.textAlign = "left";
    ctx.fillText("Si se tiene alguna duda, contactese con su supervisor.", margin, tableY + tableHeight + 28);

    const objectUrl = await new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("No se pudo generar la imagen del horario."));
          return;
        }
        resolve(URL.createObjectURL(blob));
      }, "image/jpeg", 0.95);
    });

    const link = document.createElement("a");
    link.download = fileName;
    link.href = objectUrl;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    status.textContent = "La imagen del horario se descargó correctamente.";
  } catch (error) {
    console.error(error);
    status.textContent = error instanceof Error ? error.message : "No se pudo descargar la imagen del horario.";
  } finally {
    if (downloadButton) {
      downloadButton.disabled = false;
      if (downloadLabel) downloadLabel.textContent = originalLabel;
    }
  }
}

document.querySelector("#prev-week").addEventListener("click", () => render(toISO(addDays(fromISO(weekInput.value), -7))));
document.querySelector("#next-week").addEventListener("click", () => render(toISO(addDays(fromISO(weekInput.value), 7))));
weekInput.addEventListener("change", () => render(weekInput.value));
const today = new Date();
render(toISO(today));
window.addEventListener("resize", () => render(weekInput.value));

const sectionButtons = document.querySelectorAll(".nav-tab");
const sectionLinks = document.querySelectorAll("[data-section]");
const homeSection = document.querySelector("#home-section");
const schedulesSection = document.querySelector("#schedules-section");
const recommendationsSection = document.querySelector("#recommendations-section");
function showSection(section) {
  if (homeSection) homeSection.hidden = section !== "home";
  schedulesSection.hidden = section !== "schedules";
  recommendationsSection.hidden = section !== "recommendations";
  document.body.classList.toggle("home-view", section === "home");
  sectionButtons.forEach((tab) => {
    const isSelected = tab.dataset.section === section;
    tab.classList.toggle("nav-current", isSelected);
    if (isSelected) tab.setAttribute("aria-current", "page");
    else tab.removeAttribute("aria-current");
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}
sectionLinks.forEach((link) => link.addEventListener("click", () => showSection(link.dataset.section)));
if (downloadButton) downloadButton.addEventListener("click", downloadScheduleTable);
showSection("schedules");
