// PARTE 1 ------------------------------------------
// Declaramos nuestras variables y referencias del DOM
// ---------------------------------------------------

const cargarBtn = document.querySelector("#cargarBtn");
const limpiarBtn = document.querySelector("#limpiarBtn");
const filtrarBtn = document.querySelector("#filtrarBtn");

const spinner = document.getElementById("spinner");
const perfilesContainer = document.getElementById("perfiles");
const errorContainer = document.getElementById("error");
const errorText = document.getElementById("errorText");

const listaUsuarios = [];

// PARTE 2 --------------------------------------------
// Funciones y Event Listeners
// ----------------------------------------------------

//Funcion para mostrar/ocultar spinner
const toggleSpinner = (visible) => {
    if (visible == "on") {
        spinner.classList.add("hidden");
    } else {
        spinner.classList.remove("hidden");
    }
}

//Función para mostrar error
const mostrarError = (mensaje) => {
    errorText.textContent = mensaje;
    errorContainer.classList.remove("hidden");
}

//Función para ocultar error
const ocultarError = () => {
    errorContainer.classList.add("hidden");
}

// tarjetas
const mostrarDatos = (listaUsuarios) => {
    perfilesContainer.innerHTML = "";
    toggleSpinner("off");

    if (listaUsuarios.lenght == 0) {
        perfilesContainer.innerHTML = "No se encontraron usuarios en la base de datos";
        return; //salimos de la función ANTES
    }

    //imprimir en pantalla las tarjetas de usuarios
    listaUsuarios.forEach(usuario => {
        perfilesContainer.innerHTML += crearTarjetaPerfil(usuario);
    });
}

const crearTags = (listaDeItems) => {
    const miHtml = listaDeItems.map(item => {
        return `<span class="bg-indigo-100 text-indigo-800 hover:bg-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded">${item}</span>`;
    })

    return miHtml.join(' ');
    ;
}

const crearTarjetaPerfil = (usuario) => {
    //deconstruccion de objetos
    const { id, nombre, profesion, habilidades, experiencia, avatar } = usuario;

    const habilidadesEtiquetas = crearTags(habilidades); // ["html", "css", "js"]

    return `
  <div class="profile-card bg-white rounded-lg shadow-md overflow-hidden">
    <div class="flex items-center justify-center h-40 bg-gradient-to-r from-indigo-500 to-purple-600">
      <img class="h-24 w-24 rounded-full border-4 border-white object-cover" src="${avatar}" alt="${nombre}" />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-800">${nombre}</h3>
      <p class="text-indigo-600 font-medium">${profesion}</p>
      <div class="mt-3">
        <p class="text-gray-700"><span class="font-semibold">Experiencia:</span> ${experiencia} años</p>
      </div>
      ${habilidadesEtiquetas}
      </div>
    </div>
  </div>
`;

}

//Fetch
/*CON THEN
    const cargarDatos = () => {
    // Hacer el fetch aquí
    fetch("./datos.json")
        .then(response => {
            return response.json(); // convierte la respuesta a JSON
        })

        .then(data => {
            console.log("Tus datos de la db son:", data);
            // llamar a la función de mostrar datos
            mostrarDatos(data);
        })
        .catch(error => {
            console.error("Error al cargar los datos:", error);
        });
};*/

const cargarDatos = async () => {
    try {
        toggleSpinner("on");
        esperar(1500);
        const response = await fetch("./datos.json");
        const listaUsuarios = await response.json();

        mostrarDatos(listaUsuarios);

    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
};

function esperar(milisegundos) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milisegundos);
}

cargarBtn.addEventListener("click", cargarDatos);


// PARTE 3 --------------------------------------------
// Código de nuestra app ------------------------------
// ----------------------------------------------------

mostrarError("CUIDADOO ESTAS POR ROMPER TODO");
toggleSpinner("on");
toggleSpinner("off");
ocultarError();
