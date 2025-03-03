
## Actividad 1: Variables y Tipos de Datos

Escribir un programa que defina variables de diferentes tipos y las imprima en la consola.

Instrucciones:

Crea variables de tipo Number, String, Boolean, Null, Undefined, Symbol, y BigInt.
Imprime cada variable en la consola usando console.log.

```js
    let numero = 25; //number
    let texto = "Hola, soy María"; //string. Es mejor guardar la variable como "presentación" o "nombre" para saber a qué se refiere
    let esMayorDeEdad = true; //booleano
    let nulo = null; //null
    let sinDefinir = undefined; //undefined 
    let simbolo = symbol; //symbol (no lo vamos a usar)
    let bigIntNumero = 5435683523545n; // BigInt (para números muy grandes, no lo vamos a usar)


    console.log(numero);
    console.log(texto);
    console.log(verdadero);
    console.log(vacio);
    console.log(sinDefinir);
    console.log(simbolo);
    console.log(bigIntNumero);
```
 
## Actividad 2: Operadores y Expresiones

Escribir un programa que realice operaciones aritméticas y compare valores.

Crea dos variables numéricas.
Realiza operaciones aritméticas básicas (suma, resta, multiplicación, división) y guarda los resultados en variables.
Compara los dos números usando operadores de comparación y guarda los resultados en variables.
Imprime los resultados de las operaciones y comparaciones en la consola.

```js
// Definir dos variables numéricas
let num1 = 10;
let num2 = 5;

// Operaciones aritméticas
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

    // Imprimir resultados en la consola
        console.log("Suma:", suma);
        console.log("Resta:", resta);
        console.log("Multiplicación:", multiplicacion);
        console.log("División:", division);

// Comparaciones
let esIgual = num1 === num2;
let esDiferente = num1 !== num2;
let esMayor = num1 > num2;
let esMenor = num1 < num2;
let esMayorOIgual = num1 >= num2;
let esMenorOIgual = num1 <= num2;

    // Imprimir resultados en la consola
        console.log("¿Son iguales?", esIgual);
        console.log("¿Son diferentes?", esDiferente);
        console.log("¿Es num1 mayor que num2?", esMayor);
        console.log("¿Es num1 menor que num2?", esMenor);
        console.log("¿Es num1 mayor o igual que num2?", esMayorOIgual);
        console.log("¿Es num1 menor o igual que num2?", esMenorOIgual);

```


## Actividad 3: Estructuras de Control
Escribir un programa que use estructuras de control para tomar decisiones.

Crea una variable edad.
Usa una estructura if-else para imprimir un mensaje indicando si la persona es mayor de edad o no.

Usa un bucle for para imprimir los números del 1 al 10.

```js
//Preguntar si la edad es mayor de 18
const edad = 18;
const tienePermiso = true;

if(edad >= 18){
    console.log("Es mayor de edad");
} else {
    console.log("Es mejor de edad");
}

//si es mejor y tiene permiso puede salir
if(edad >= 18){
    console.log("Puede salir a bailar");
} else {
    if(tienePermiso=true){
        console.log("Puede salir a bailar")
    }
    else{
        console.log("No puede salir a bailar")
    }
}

//para simplificar este código: else if
if(edad >= 18){
    console.log("Puede salir a bailar");
} else if(tienePermiso=true){
        console.log("Puede salir a bailar")
    }
    else{
        console.log("No puede salir a bailar")
    } 



// Bucles for
// (i++ es igual que i+1)
for(let i=0 ; i<10; i++){
    console.log("Hacer una tarea", i);
}

//Usa un bucle for para imprimir los números del 1 al 10.
// otra opción: let 1=0 e imprimir i+1
for(let i=1; i<=10; i++){
    console.log("Número:",i);
}

    //imprimir del 10 al 1
    for(let i=10; i>0; i--){
        console.log("Número:",i);
    }

// Bucle para imprimir las 5 primeras imágenes con texto y su número
for(let i=0 ; i<5 ; i++ ){
    console.log('<img src="img/foto'+i+'.png" alt="texto"'+i+'/>');
}

```



Actividad 4: Funciones

Crea una función saludar que reciba un nombre como parámetro y devuelva un saludo personalizado.
Crea una función sumar que reciba dos números como parámetros y devuelva su suma.
Llama a ambas funciones y muestra los resultados en la consola.

```js
// Función para saludar
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Llamar a las funciones y mostrar los resultados
console.log(saludar("Juan"));
console.log("La suma de 3 y 7 es:", sumar(3, 7));
```



Actividad 5: Manipulación del DOM

Escribir un programa que manipule elementos del DOM.

Crea un archivo HTML con un elemento <div> con el id "contenedor".
Escribe un script que cambie el contenido de ese <div> al hacer clic en un botón.
Ejemplo (HTML y JS):

```js
document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById("botonCambiar");
    let contenedor = document.getElementById("contenedor");

    boton.addEventListener("click", function() {
        contenedor.innerHTML = "¡El contenido ha cambiado!";
    });
});

```