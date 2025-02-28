## Variables Referenciales vs Primitivas

Primitiva: es el balde (un contenedor pequeño). Pueden ser strings, numeros, booleanos, y otros... Estos pueden ser **let** o **const**.


Referencial: es la llave del camión (no el camión), donde guardamos muchos datos. Pueden ser objetos, arrays (listas) o funciones. Estos son siempre **const**.

``` js
    const num=25;
    num=30; //ERROR: No se puede modificar una constante primitivo

    const alumnos=("Juan", "María", "Pedro");
    alumnos[0]= "Tomás", //OK: Se puede moficiar el contenido de un array (referencial)

```


## Comentarios en JS

- Comentarios simples: se utiliza // para 1 sola linea
- Comentarios simples en una sola linea: puede usarse // al final de la línea
- Comentarios en bloque: /*  xxxxxx */ (como en CSS). Es para hacer comentarios de múltiples líneas.
- Comentario de documentación: Se utiliza /** xxxxx */, para iniciar un bloque informativo. Se usa mucho para funciones.


```js
 let nombre="Juan" //1 sola línea al final

 /* soy un
 comentario
 multilinea */


// JSDOC
/** 
 * Esta es una función que suma dos números
 * 
 * @param {number} num1 -El primer número
 * @param {number} num2 - El segundo número
 * @return {number} La suma de num1 y num2
 * 
 * */
function sumar (num1, num2){
    return num1+num2
}

```

# Operadores aritméticos

Tenemos operadores de asignación, comparación, lógicos.

Los aritméticos más comunes son:
- Suma "+": Suma 2 valores
- Resta "-": Resta 2 valores
- Incrementar un valor "++": Incrementar el valor de una variable
- Decrementar un valor "--": Decrementa el valor de una variable
- Multiplicación"*".
- División "/".
- Módulo (%): El resto de la división de dos valores.

```js
let a=10;
let b= 5;

let suma = a+b; // 15
let resta = a-b; //5
let multi = a*b; //50
let divi = a/b; //2
let modulo = a%b; //0
let incremento = a++; //11
let decremento = b--; //4


//Símbolos comparativos

== //para ver si son iguales 
=== //para ver si son iguales estrictamente (el mismo valor y el mismo tipo, no vale que uno sea número y otro texto)
!= // para ver si son distintos
!== //si no son estrictamente iguales
< // para ver si es menor
> // para ver si es mayor
<= //para ver si es menor o igual que
>= //para ver si es mayor o igual que

if(a == b) {
    // con dos == se está preguntando si dos valores son iguales, en este caso a y b
} else {}

if(a != b) {
    //si a y b son distintos
} else {}



//PREGUNTA EXAMEN
let a = 5;
let b = 10;
let c = "5";
console.log( a == c ) //true

let a = 5;
let b = 10;
let c = "5";
console.log( a === c ) //false



```

