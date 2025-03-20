## Operación ternaria

Una forma de reescribir el `if...else`. Se compone de tres partes:
1. Una expresión que se evalúa.
2. Expresión que se ejecuta en caso de ser cierta
3. Expresión que se ejecuta en caso de ser falsa

Simplifica la legibilidad, pero no se recomienda para anidar operaciones ternarias o cuando el resultado de la operación es muy complejo.

No se puede utilizar ternarias si no tengo el "else..." (solo si tiene truthy y falsy). Si es compleja (incluye varios else, o tiene otras cosas dentro como console.log...) tampoco se puede.


```js
let numero = 10;
let mensaje;

if(numero % 2 == 0){
    mensaje= "Es par";
} else{
    mensaje= "Es impar";
}

// Versión ternaria
let mensaje = (numero % 2 == 0)? "es par": "es impar";


//----------------------------------------------------------
// otro ejemplo
//----------------------------------------------------------

let edad = 18;

if(edad >=18){
    mensaje="Es mayor de edad";
} else {
    mensaje="Es menor de edad";
}

//Versión ternaria: no es necesario poner los parentesis
let edad = 18;
let mensaje = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";

```


```js
//Función que recibe dos número y devuelve el mayor
function mayor (num1, num2) {
    if (num1>num2){
        return num1;     
    } else {
    return num2;
}}

//Versión ternaria
function mayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

```

Crear una función que reciba 2 parámetros (jugador1 y jugador2) y que devuelva si el jugador1 le gana al jugador2 en "piedra", "papel", "tijera"

```js

function jugar(jugador1, jugador2) {
    if (jugador1 == jugador2) {
        return "Empate";
    } else if (
        (jugador1 == "piedra" && jugador2 == "tijera") ||
        (jugador1 == "papel" && jugador2 == "piedra") ||
        (jugador1 == "tijera" && jugador2 == "papel")
    ) {
        return "Jugador 1 gana";
    } else {
        return "Jugador 2 gana";
    }
}

```


## Recorrer Arrays/Listas

-> forEach: recorrer cada ítem de un array, y ejecuta una función dentro del mismo.
Se le asigna una variable a cada alumno
Ejemplo: listaAlumno -> alumno, listaHobbies -> hobbie, listaLetras -> letra.

*forEach EJECUTA  la función indicada dentro del mismo*

```js
const letrasss = ["a", "b", "c"];

letras.forEach((letra) => {
    console.log(letra) // Devuelve ["a", "b", "c"]
})

//para que solo imprima la a:
const letrasss = ["a", "b", "c"];

letrasss.forEach((letra) => {
    if (letra === "a") {
        console.log(letra); // Imprime solo "a"
    }
});

```


## Modificar elementos con un forEach

(Si quieres usar el indice podemos leerlo agregando un segundo parametro a nuestra funcion flecha)
```js
const letrasss = ["a", "b", "c"];

letras.forEach((letra, indice) => {
    console.log(letra, indice)

    listaLetras[indice] = letra.toUpperCase();

})

console.log(listaLetras); // Devuelve ["A", "B", "C"]
```



### Map

Si deseamos generar una copia de la lista, podemos utilizar el método map(), que crea un nuevo array con los resutados de la función flecha.

*Map DEVUELVE ELEMENTOS*

```js
const listaNumeros = [1, 2, 3, 4, 5];

const nuevaLista = listaNumeros.map( (numero) => {
    return numero * 2;
})

console.log(listaNumeros); // [1, 2, 3, 4, 5]
console.log(nuevaLista); // [2. 4. 6. 8. 10]
```

Si la función es de una sola línea y la línea es un return: quitar return, quitar llaves y punto y coma final

```js
const listaNumeros = [1, 2, 3, 4, 5];

const nuevaLista = listaNumeros.map( (numero) => {
    return numero * 2;
}) //opcion 1

const nuevaLista = listaNumeros.map( numero => numero * 2); //opcion optimizada
```