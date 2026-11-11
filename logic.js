// ===== Formulario de contacto =====
const formulario = document.querySelector("#formulario-contacto");
const correo = document.querySelector("#correo");
const comentario = document.querySelector("#comentario");
const aviso = document.querySelector("#aviso-formulario");
const lista = document.querySelector("#lista-solicitudes");
 
// Validación en tiempo real del correo (requisito 29)
correo.addEventListener("input", () => {
    correo.classList.toggle("campo-invalido", !correo.value.includes("@"));
});
 
// Envío del formulario (requisitos 30 y 31)
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // evita que la página se recargue
    if (comentario.value.length < 10) {
        aviso.textContent = "El comentario debe tener al menos 10 caracteres.";
    } else {
        // 1. Crea un <li> con createElement() y escribe los datos con textContent
        // 2. Crea un <button> "Eliminar" que, al hacer clic, borre el <li> con remove()
        // 3. Añade el botón al <li> y el <li> a la lista con append()
        // 4. Muestra un mensaje de éxito en el aviso y vacía el formulario
    }
});