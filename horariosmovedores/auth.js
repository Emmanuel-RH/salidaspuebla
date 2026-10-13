/*
 * USUARIOS_VALIDOS
 * Agrega, elimina o cambia registros en esta sección para administrar el acceso.
 * Para una protección real de los horarios, valida estas credenciales en un servidor.
 */
const USUARIOS_VALIDOS = {
  planta: [
    { usuario: "BaseOri", contrasena: "Traxion2026!" }
  ],
  sivesa: [
    { usuario: "BaseOri", contrasena: "Traxion2026!" }
  ],
  cad: [
    { usuario: "BaseOri", contrasena: "Traxion2026!" }
  ],
  turnospuebla: [
    { usuario: "BaseOri", contrasena: "Traxion2026!" }
  ]
};

const area = document.body.dataset.area;
const usuarios = USUARIOS_VALIDOS[area] || [];
const loginForm = document.querySelector("#login-form");
const usernameInput = document.querySelector("#login-usuario");
const passwordInput = document.querySelector("#login-contrasena");
const loginError = document.querySelector("#login-error");
const logoutButton = document.querySelector("#logout-button");
const loginAreaLabel = document.querySelector("#login-area");
const welcomeUser = document.querySelector("#welcome-user");

if (loginAreaLabel) {
  loginAreaLabel.textContent = {
    cad: "CAD/PATIO",
    planta: "Planta",
    sivesa: "SIVESA",
    turnospuebla: "Turnos Puebla"
  }[area] || area;
}

function isValidUser(usuario, contrasena) {
  return usuarios.some((credencial) =>
    credencial.usuario === usuario && credencial.contrasena === contrasena
  );
}

function setAuthenticated(authenticated) {
  document.body.classList.toggle("is-authenticated", authenticated);
  if (!authenticated) {
    passwordInput.value = "";
    if (welcomeUser) welcomeUser.textContent = "";
    usernameInput?.focus();
  }
}

// La autenticación es intencionalmente solo de esta carga de página.
setAuthenticated(false);

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const usuario = usernameInput.value.trim();
  const contrasena = passwordInput.value;

  if (isValidUser(usuario, contrasena)) {
    loginError.textContent = "";
    if (welcomeUser) welcomeUser.textContent = `Bienvenido @${usuario}`;
    setAuthenticated(true);
    return;
  }

  loginError.textContent = "Usuario o contraseña incorrectos.";
  passwordInput.value = "";
  passwordInput.focus();
});

logoutButton?.addEventListener("click", () => setAuthenticated(false));
