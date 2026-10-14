const COURSES = {
 spill: {module:'MÓDULO 01 · CONTROL DE DERRAMES',title:'Procedimiento de uso del Spill Kit',short:'Uso seguro del Spill Kit',questions:[
 ['¿Qué se debe hacer primero al detectar un derrame de líquido?', ['Identificar el líquido, evaluar los riesgos e informar al personal correspondiente','Cubrir inmediatamente el líquido con almohadillas','Depositar todos los residuos en una bolsa','Reponer los materiales del kit'],0,'La identificación del líquido y la evaluación del riesgo preceden al control del derrame.'],
 ['¿Cuál es el propósito de utilizar guantes, gafas y otros equipos de protección personal?', ['Acelerar la reposición del kit','Evitar el contacto con el líquido derramado','Reducir el volumen del derrame','Facilitar la circulación de vehículos'],1,'El equipo de protección personal evita la exposición directa al líquido.'],
 ['¿Cómo se colocan los absorbentes tipo «calcetín»?', ['Dentro de la bolsa de residuos','Sobre el recipiente del kit','Alrededor del derrame para impedir su expansión','Únicamente después de terminar la limpieza'],2,'Los absorbentes de contención rodean el derrame y limitan su propagación.'],
 ['¿Qué material se coloca sobre el líquido para absorberlo?', ['Las almohadillas absorbentes','Las cadenas delimitadoras','El cable de puesta a tierra','Las calzas del vehículo'],0,'Las almohadillas absorbentes deben cubrir el líquido hasta absorberlo.'],
 ['¿Qué se hace con los absorbentes usados y demás residuos contaminados?', ['Se regresan al recipiente del Spill Kit','Se dejan en el área hasta la siguiente operación','Se lavan para utilizarlos de inmediato','Se colocan en las bolsas de desecho incluidas en el kit'],3,'El material contaminado se recoge y se deposita en las bolsas correspondientes.'],
 ['¿Qué condición debe verificarse al terminar la limpieza?', ['Que el área permanezca húmeda','Que el área esté limpia y seca','Que el derrame quede cubierto pero visible','Que el Spill Kit permanezca abierto'],1,'El área debe quedar limpia y seca para prevenir resbalones y riesgos adicionales.'],
 ['¿Cómo se desecha el material utilizado?', ['Conforme al procedimiento de seguridad y a la normativa aplicable al líquido derramado','En cualquier contenedor de basura de uso general','En el depósito de combustible de autoconsumo','Junto con las almohadillas sin usar'],0,'La eliminación depende de la sustancia y del procedimiento y la normativa aplicables.'],
 ['¿Qué actividad corresponde al último paso del procedimiento?', ['Iniciar una descarga de combustible','Retirar los delimitadores de tránsito','Revisar el contenido del kit y reponer los materiales faltantes','Abrir las válvulas de emergencia'],2,'La reposición deja al kit preparado para atender otra emergencia.'],
 ['Según la infografía, ¿para cuál de los siguientes grupos de sustancias está diseñado el Spill Kit?', ['Únicamente gases comprimidos','Aceites, combustibles, químicos no agresivos, agua y otros líquidos','Solamente sólidos secos','Exclusivamente sustancias químicas agresivas'],1,'La infografía incluye aceites, combustibles, químicos no agresivos, agua y otros líquidos.'],
 ['¿Por qué es importante responder rápidamente ante un derrame?', ['Para evitar registrar el incidente','Para omitir el equipo de protección','Para disminuir la necesidad de supervisión','Para reducir riesgos al personal, al ambiente y a las instalaciones'],3,'La respuesta oportuna reduce la exposición y los efectos del incidente.']
 ]},
 fuel:{module:'MÓDULO 02 · OPERACIÓN SEGURA',title:'Descarga segura de combustible de autoconsumo',short:'Descarga segura de combustible',questions:[
 ['Antes de iniciar la descarga, ¿cuántos biombos de seguridad deben colocarse?', ['Uno','Dos','Tres','Cuatro'],1,'La infografía exige colocar dos biombos alrededor del área de descarga.'],
 ['¿Qué medida impide el tránsito de unidades por el área de descarga?', ['Colocar postes delimitadores con cadena','Abrir el acceso a otros vehículos','Retirar las calzas del autotanque','Mantener abiertos los depósitos'],0,'Los postes con cadena sirven para delimitar y restringir la circulación.'],
 ['¿Qué extintores señala la infografía como parte de la preparación?', ['Un extintor de agua de 4 kg','Tres extintores de CO₂ de 2 kg','Dos extintores PQS tipo ABC de 9 kg (20 lb)','Un extintor tipo K de 6 kg'],2,'Se especifican dos extintores de polvo químico seco, tipo ABC, de 9 kg (20 lb).'],
 ['¿Cuál de las siguientes acciones debe realizarse antes de descargar?', ['Desconectar la tierra física','Conectar el autotanque a tierra física y colocar calzas en las llantas','Permitir el uso de teléfonos celulares','Retirar los biombos de protección'],1,'La preparación incluye conexión a tierra física y calzas en las llantas.'],
 ['Durante la descarga, ¿qué distancia máxima se indica respecto a la caja de válvulas?', ['Dos metros','Cinco metros','Diez metros','Veinte metros'],0,'La infografía indica permanecer a una distancia máxima de dos metros de la caja de válvulas.'],
 ['¿Qué se debe hacer si se presenta una tormenta eléctrica?', ['Acelerar la descarga','Continuar si las mangueras parecen seguras','Pedir que se acerquen más personas','Suspender inmediatamente la descarga'],3,'Una tormenta eléctrica obliga a suspender inmediatamente la descarga.'],
 ['¿Qué se debe verificar al término de la descarga en el depósito de autoconsumo?', ['Que sus tapas queden correctamente cerradas','Que las tapas permanezcan abiertas para ventilar','Que el depósito quede sin señalización','Que las mangueras permanezcan conectadas'],0,'Al finalizar, las tapas del autoconsumo deben quedar correctamente cerradas.'],
 ['¿Cuál de las siguientes conductas está prohibida en el área de descarga?', ['Mantener libre el acceso a equipos de emergencia','Supervisar continuamente el flujo de producto','Usar un teléfono celular durante la operación','Utilizar el equipo de protección personal'],2,'La infografía prohíbe el uso de teléfonos celulares durante la descarga.'],
 ['Ante una emergencia, ¿cuál es la primera acción indicada?', ['Liberar el área para la circulación','Accionar las válvulas de emergencia de la unidad para detener la descarga','Guardar las mangueras antes de detener la descarga','Continuar hasta vaciar el autotanque'],1,'El primer paso indicado es detener la descarga mediante las válvulas de emergencia de la unidad.'],
 ['Al detectar una condición insegura, ¿cuál es la instrucción general?', ['Continuar con mayor vigilancia','Esperar a que concluya la operación para informar','Suspender la operación y reportar','Desactivar los equipos de emergencia'],2,'La consigna destacada es suspender la operación y reportar la condición insegura.']
 ]}
};
let courseKey=null, person='', answers={}, completed=null, startedAt=null;
const $=id=>document.getElementById(id);
function view(id){if(id==='home'){location.href='../';return;}document.querySelectorAll('.view').forEach(el=>el.classList.toggle('active',el.id===id));document.body.scrollTo({top:0,left:0,behavior:"instant"});}
function safe(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function openCourse(k){courseKey=k;const c=COURSES[k];$('introModule').textContent=c.module;$('introTitle').textContent=c.title;$('fullName').value=person;view('intro')}


$('startForm').addEventListener('submit',e=>{e.preventDefault();person=$('fullName').value.trim().replace(/\s+/g,' ');if(person.length<5){alert('Escribe tu nombre completo.');return;}answers={};startedAt=new Date();renderQuiz();view('test')});
function renderQuiz(){const c=COURSES[courseKey];$('testModule').textContent=c.module;$('testTitle').textContent=c.title;$('participantLine').textContent='Participante: '+person;$('questions').innerHTML=c.questions.map((q,i)=>`<section class="question" id="question-${i}"><div class="question-head"><span class="qnum">${String(i+1).padStart(2,'0')}</span><h3>${safe(q[0])}</h3></div><div class="options">${q[1].map((opt,j)=>`<label class="option"><input type="radio" name="q${i}" value="${j}" ${answers[i]===j?'checked':''}><span>${safe(opt)}</span></label>`).join('')}</div></section>`).join('');$('questions').querySelectorAll('input').forEach(input=>input.addEventListener('change',e=>{answers[Number(e.target.name.slice(1))]=Number(e.target.value);updateProgress()}));updateProgress()}
function updateProgress(){const n=Object.keys(answers).length;$('progressNumber').textContent=n+' / '+COURSES[courseKey].questions.length;$('progressBar').style.width=(n/COURSES[courseKey].questions.length*100)+'%'}
$('testBack').addEventListener('click',()=>{if(confirm('¿Deseas abandonar la evaluación? Las respuestas sin enviar se perderán.'))view('home')});
$('quizForm').addEventListener('submit',e=>{e.preventDefault();const c=COURSES[courseKey],missing=c.questions.findIndex((_,i)=>answers[i]===undefined);if(missing!==-1){alert('Debes responder las 10 preguntas antes de calificar.');$('question-'+missing).scrollIntoView({behavior:'smooth',block:'center'});return;}const correct=c.questions.filter((q,i)=>answers[i]===q[2]).length;const score=Math.round(100*correct/c.questions.length);completed={person,courseKey,score,correct,total:c.questions.length,passed:score>=80,finished:new Date(),started:startedAt};renderResult();view('result')});
function fmt(d){return new Intl.DateTimeFormat('es-MX',{day:'2-digit',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true}).format(d)}
function renderResult(){const r=completed,c=COURSES[r.courseKey];$('resultMedallion').classList.toggle('fail',!r.passed);$('resultMedallion').textContent=r.passed?'✓':'!';$('resultHeading').textContent=r.passed?'¡Evaluación aprobada!':'Evaluación no aprobada';$('resultMessage').textContent=r.passed?'Has demostrado los conocimientos evaluados. Ya puedes descargar tu comprobante individual.':'Se requiere al menos 80% para aprobar. Puedes revisar tus respuestas y repetir la evaluación.';$('resultScore').textContent=r.score+'%';$('resultName').textContent=r.person;$('resultCourse').textContent=c.title;$('resultDate').textContent=fmt(r.finished);$('resultCorrect').textContent=r.correct+' de '+r.total;$('downloadPdf').textContent=r.passed?'Descargar constancia PDF ↓':'Descargar reporte PDF ↓';$('review').innerHTML='<details><summary>Consultar respuestas y retroalimentación</summary>'+c.questions.map((q,i)=>`<div style="padding:12px 3px;border-bottom:1px solid #e8edf5"><strong>${i+1}. ${safe(q[0])}</strong><p class="${answers[i]===q[2]?'good':'bad'}">Tu respuesta: ${safe(q[1][answers[i]])} ${answers[i]===q[2]?'✓':'✗'}</p>${answers[i]!==q[2]?`<p>Respuesta correcta: <strong>${safe(q[1][q[2]])}</strong></p>`:''}<p>${safe(q[3])}</p></div>`).join('')+'</details>'}
$('downloadPdf').addEventListener('click',()=>{if(completed)downloadVoucher(completed)});$('retry').addEventListener('click',()=>openCourse(courseKey));$('goHome').addEventListener('click',()=>view('home'));
// Generación autónoma de PDF (sin bibliotecas ni conexión a Internet).
// Se compone una página A4 horizontal a partir de un canvas y se encapsula su JPEG en el estándar PDF.
function downloadVoucher(r){const c=COURSES[r.courseKey],canvas=document.createElement('canvas');canvas.width=1684;canvas.height=1191;const x=canvas.getContext('2d');const W=canvas.width,H=canvas.height;
 const rect=(color,x0,y0,w,h)=>{x.fillStyle=color;x.fillRect(x0,y0,w,h)};
 const write=(s,xx,yy,size=32,color='#0b2856',weight=600,align='left')=>{x.fillStyle=color;x.font=`${weight} ${size}px Arial, sans-serif`;x.textAlign=align;x.fillText(s,xx,yy)};
 rect('#ffffff',0,0,W,H);rect('#081f49',0,0,W,200);rect('#ff801a',0,194,W,8);// Zona reservada para el logo proporcionado por el usuario.
 const logo=document.getElementById('brandLogo');if(logo&&logo.complete&&logo.naturalWidth){const maxW=385,maxH=125,scale=Math.min(maxW/logo.naturalWidth,maxH/logo.naturalHeight);x.fillStyle='#ffffff';x.fillRect(95,32,410,135);x.drawImage(logo,105,39,logo.naturalWidth*scale,logo.naturalHeight*scale);}
 write('BASE ORIZABA - AUTOCONSUMO',W-105,113,26,'#f5c744',800,'right');
 write(r.passed?'CONSTANCIA DE EVALUACIÓN':'REPORTE DE EVALUACIÓN',W/2,303,42,'#163664',800,'center');rect('#e7eef7',115,335,W-230,2);
 write('SE HACE CONSTAR QUE',W/2,425,25,'#6a7890',700,'center');
 let size=55;while(size>30&&x.measureText(r.person.toUpperCase()).width>W-230){size-=2;x.font=`800 ${size}px Arial`;}write(r.person.toUpperCase(),W/2,505,size,'#081f49',800,'center');
 write(r.passed?'CONCLUYÓ Y APROBÓ LA EVALUACIÓN':'CONCLUYÓ LA EVALUACIÓN',W/2,565,24,'#68758a',700,'center');
 const lines=wrapText(x,c.title,1250,39);lines.forEach((line,i)=>write(line,W/2,635+i*48,39,'#073e82',800,'center'));
 const base=735;rect('#f3f7fc',115,base,W-230,212);rect('#ff801a',115,base,9,212);
 write('RESULTADO',175,base+51,24,'#68768b',700);write(String(r.score)+'%',175,base+128,74,r.passed?'#148466':'#d47726',800);
 write('RESPUESTAS CORRECTAS',490,base+51,22,'#68768b',700);write(`${r.correct} de ${r.total}`,490,base+115,38,'#132d55',800);
 write('ESTATUS',910,base+51,22,'#68768b',700);write(r.passed?'APROBADO':'NO APROBADO',910,base+115,33,r.passed?'#148466':'#c77826',800);
 write('FECHA Y HORA DE CONCLUSIÓN',125,1004,21,'#62718a',800);write(fmt(r.finished),125,1046,26,'#0c315d',700);
 write('CURSO: '+c.short.toUpperCase(),W-115,1005,19,'#62718a',700,'right');
 write('Comprobante generado por el navegador · Acredita únicamente este cuestionario · No sustituye formación práctica.',W/2,1139,19,'#7b8799',400,'center');
 const jpeg=canvas.toDataURL('image/jpeg',.93).split(',')[1];const bytes=base64ToBytes(jpeg);const pdf=makeImagePdf(bytes,842,595);const blob=new Blob([pdf],{type:'application/pdf'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`Solistica_${r.passed?'Constancia':'Reporte'}_${r.courseKey}_${r.finished.toISOString().slice(0,10)}_${r.person.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]+/g,'_').slice(0,45)}.pdf`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);
}
function wrapText(ctx,text,width,size){ctx.font=`800 ${size}px Arial`;const out=[],words=text.split(' ');let line='';for(const word of words){const t=(line?line+' ':'')+word;if(ctx.measureText(t).width>width&&line){out.push(line);line=word}else line=t;}if(line)out.push(line);return out;}
function base64ToBytes(b){const s=atob(b),a=new Uint8Array(s.length);for(let i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return a;}
function makeImagePdf(jpeg,w,h){const enc=new TextEncoder(),pieces=[],offsets=[0],add=s=>pieces.push(enc.encode(s));
 const length=()=>pieces.reduce((s,p)=>s+p.length,0);const obj=(id,content)=>{offsets[id]=length();add(`${id} 0 obj\n${content}\nendobj\n`)};
 add('%PDF-1.4\n');obj(1,'<< /Type /Catalog /Pages 2 0 R >>');obj(2,'<< /Type /Pages /Kids [3 0 R] /Count 1 >>');obj(3,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${w} ${h}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`);
 offsets[4]=length();add(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width 1684 /Height 1191 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`);pieces.push(jpeg);add('\nendstream\nendobj\n');const stream=`q\n${w} 0 0 ${h} 0 0 cm\n/Im0 Do\nQ\n`;obj(5,`<< /Length ${enc.encode(stream).length} >>\nstream\n${stream}endstream`);
 const start=length();add('xref\n0 6\n0000000000 65535 f \n');for(let i=1;i<=5;i++)add(`${String(offsets[i]).padStart(10,'0')} 00000 n \n`);add(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${start}\n%%EOF`);
 const out=new Uint8Array(length());let p=0;for(const part of pieces){out.set(part,p);p+=part.length}return out;
}

// Curso seleccionado desde la página de catálogo.
const selectedCourse = document.body.dataset.course;
if (Object.prototype.hasOwnProperty.call(COURSES, selectedCourse)) {
  openCourse(selectedCourse);
} else {
  window.location.replace('../');
}
