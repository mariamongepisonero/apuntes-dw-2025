## Listeners para eventos del usuario

Son funciones que se ejecutan en respuesta a eventos específicos que ocurren en el DOM: clics, movimiento mouse, keydown (teclas presionadas), teclas levantadas. Para agregar un evento usamos `addEventListener(evento, funcion)`

``` js
//seleccionar item del DOM
const boton = document.querySelector('button');

boton.addEventListener("click", miFuncion);

//es igual que esto
boton.addEventListener("click", () => {
    console.log("Hola");
    });

function miFuncion(){
    console.log("Hola");
}
```

## Pasar parámetros a funciones con eventos
A veces necesitamos enviar parámetros adicionales a la función que maneja el evento

```js
boton.addEventListener("click", () => {
    miFuncion("Tomi");
    });

//ejecutar la funcion sin enviar parametro
boton.addEventListener("click", miFuncion);
//Ejecutar la funcion enviando parámetro, la debo meter dentro de una funcion flecha
boton.addEventListener("click", () => miFuncion ("María"));

function miFuncion(usuario){
    console.log("Hola ${usuario}");
}

```

Ejercicios:
1. Cambiar el color de un elemento al hacerle clic: Crear 2 botones (rojo y azul) que cambien el color de fondo de un bloque, al hacer click. La función de cambiar de color debe ser la misma.

2. Mensaje al pasar el mouse:
Crear un elemento que muestre un mensaje cuando el ratón pase por encima de él


### Parametro e (event/evento)
Es un objeto que contiene información sobre el evento ocurrido. Este se pasa automáticamente a la función que maneja el evento.

```js
function handleClick(){
    console.log("El boton ha sido clickeado");
    console.log("Coordenadas del mouse: ", e.clientX, e.clientY);
}

boton.addEventListener("click", handleClick);
```

Ejercicio:
3. Formulario de entrada: Crear un formulario que valide la entrada de un usuario, y muestre en pantalla si la entrada no es válida. 
Input y botón enviar.
Si el campo a rellenar está vacío, que salte mensaje indicandolo