//ejercicio fetch
console.log("1) solicitar al camarero un plato de ensalada de atún");

pedirPlato("ensalada de atún");

console.log("3) la persona se toma el vaso de agua");

async function pedirPlato(plato) {
  console.log("2) el camarero va a buscar el plato de comida: ", plato);

  fetch("http://restaurante.com/api/traerPlato")
    .then(response => response.json())
    .then(datos => {
      console.log("Paso 4: El camarero lleva el plato de ", datos.plato);
      console.log("Paso 5: El comensal se come su comida");
    })
    .catch(error => {
      console.log("No tenemos más atún, lo siento");
    });
}

//pasar a async/await con try/catch
console.log("1) solicitar al camarero un plato de ensalada de atún");

pedirPlato("ensalada de atún");

console.log("3) la persona se toma el vaso de agua");

async function pedirPlato(plato) {
  console.log("2) el camarero va a buscar el plato de comida: ", plato);

  try {
    const response = await fetch("http://restaurante.com/api/traerPlato");
    const datos = await response.json();

    console.log("Paso 4: El camarero lleva el plato de ", datos.plato);
    console.log("Paso 5: El comensal se come su comida");
  } catch (error) {
    console.log("No tenemos más atún, lo siento");
  }
}
