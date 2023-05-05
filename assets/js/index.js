const botonEnviar = document.getElementById("enviar");


botonEnviar.addEventListener("click", () => {

	const nombre = document.getElementById("nombre").value;
	const apellido = document.getElementById("apellido").value;

	const nombreCompleto = nombre + " " + apellido;


	const nuevoElemento = document.createElement("p");
	nuevoElemento.textContent = nombreCompleto;


	const nombresApellidosDiv = document.getElementById("nombres-apellidos");

    if (nombresApellidosDiv.textContent.includes(nombreCompleto)) {
		alert("Ya registrado");
		return;
	}


	nombresApellidosDiv.appendChild(nuevoElemento);

	guardarNombreApellido(nombreCompleto);
});


const nombresApellidosDiv = document.getElementById("nombres-apellidos");

window.addEventListener("load", cargarNombresApellidos);

function cargarNombresApellidos() {

	const nombresApellidos = localStorage.getItem("nombresApellidos");


	if (nombresApellidos) {
		const nombresApellidosArray = JSON.parse(nombresApellidos);
		nombresApellidosArray.forEach((nombreCompleto) => {
			const nuevoElemento = document.createElement("p");
			nuevoElemento.textContent = nombreCompleto;
			nombresApellidosDiv.appendChild(nuevoElemento);
		});
	}
}

function guardarNombreApellido(nombreCompleto) {
	let nombresApellidos = localStorage.getItem("nombresApellidos");


	if (!nombresApellidos) {
		nombresApellidos = [];
	} else {

		nombresApellidos = JSON.parse(nombresApellidos);
	}

	nombresApellidos.push(nombreCompleto);
	localStorage.setItem("nombresApellidos", JSON.stringify(nombresApellidos));
}